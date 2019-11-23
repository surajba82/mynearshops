import Worker from 'worker-loader?inline=true&fallback=false./main.worker.js';
import {uuid} from '../../util';
import {WORKER_COUNT} from '../app.config';
import workerFunctions from './workerFunctions';

const WorkerObject = () => ({
  id: uuid(),
  worker: new Worker(),
});

class Job {
  constructor({type, payload}, onDone) {
    this.jobId = uuid();
    this._type = type;
    this._payload = payload;
    this.onDone = onDone;
    this.thread = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  assignToWorker({id, worker}) {
    this.workerId = id;
    // console.debug(`Doing job: ${this.jobId} on worker: ${this.workerId}`);
    const message = JSON.stringify({
      type: this._type,
      jobId: this.jobId,
      payload: this._payload,
    });

    worker.postMessage(message);

    worker.onmessage = (response) => {
      // console.debug(`Done: ${this._type} / ${this.jobId} on worker: ${this.workerId}`);
      const data = JSON.parse(response.data);

      if (!data.hasOwnProperty('success')) {
        this.reject('Error receiving message');
      } else if (!data.success) {
        this.reject(data.message);
      } else {
        this.resolve(data.payload);
      }
      this.onDone(this);
    };

    worker.onerror = (error) => {
      this.reject(error);
    };
  }
}

class WorkerPool {

  constructor(workerCount = 1) {
    this._workerCount = workerCount;
    this._idleWorkers = [];
    this._activeWorkers = [];
    this._pendingJobs = [];

    this._initialiseWorkers();
  }

  _initialiseWorkers() {
    for (let i = 0; i < this._workerCount; i++) {
      let workerObject = WorkerObject();

      this._idleWorkers.push(workerObject);
    }
  }

  _runJobs() {
    if (this._pendingJobs.length > 0 && this._idleWorkers.length > 0) {
      const nextJob = this._pendingJobs.shift();
      const {id, worker} = this._idleWorkers.shift();

      nextJob.assignToWorker({id, worker});
      this._activeWorkers.push({id, worker});
    }
  }

  _handleDone({workerId}) {
    const worker = this._activeWorkers.find((workerObj) => workerObj.id === workerId);
    this._activeWorkers = this._activeWorkers.filter(({id}) => id !== workerId);
    this._idleWorkers.push(worker);
    this._runJobs();
  }

  exec({type, payload}) {
    if (this._idleWorkers.length + this._activeWorkers.length + this._pendingJobs.length === 0) {
      this._initialiseWorkers();
    }

    const job = new Job({type, payload}, this._handleDone.bind(this));
    if (this._idleWorkers.length > 0) {

      const {id, worker} = this._idleWorkers.shift();

      job.assignToWorker({id, worker});
      this._activeWorkers.push({id, worker});
    } else {
      this._pendingJobs.push(job);
    }

    return job.thread;
  }

  terminate() {
    [
      ...this._idleWorkers,
      ...this._activeWorkers,
    ].forEach(({worker}) => {
      worker.terminate();
    });
    this._idleWorkers = [];
    this._activeWorkers = [];
    this._pendingJobs = [];
  }

}

let WorkerPoolSingleton;
if (window.Worker) {
  WorkerPoolSingleton = new WorkerPool(WORKER_COUNT);
} else {
  WorkerPoolSingleton = {
    exec: ({type, payload}) => {
      return new Promise((resolve, reject) => {
        try {
          const result = workerFunctions[type](payload);

          resolve(result);
        } catch (e) {
          reject(e);
        }
      })
    },
    terminate: () => {},
  }
}

export default WorkerPoolSingleton;
