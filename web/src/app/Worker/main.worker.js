import workerFunctions from './workerFunctions';

const invalidTypeError = () => {
  postMessage({success: false, message: 'Invalid type'});
};

onmessage = (e) => {

  const data = JSON.parse(e.data);

  if (!data.hasOwnProperty('type') || !workerFunctions.hasOwnProperty(data.type)) {
    invalidTypeError();
  } else {
    try {
      Promise.resolve(workerFunctions[data.type](data.payload))
        .then(result => {
          const message = JSON.stringify({
            success: true,
            payload: result,
          });

          postMessage(message);
        })
        .catch(e => {
          postMessage({
            success: false,
            message: e.toString(),
          })
        });
    } catch (e) {
      postMessage({
        success: false,
        message: e.toString(),
      })
    }
  }
};
