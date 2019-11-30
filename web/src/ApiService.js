import ErrorService from './ErrorService';
import axios from 'axios';
import {
  API_REQUEST_TIMEOUT,
  ERROR_MESSAGE_INVALID_REQUEST,
  ERROR_MESSAGE_NOT_FOUND,
  ERROR_NAME_TIMEOUT,
} from './app/app.config';

// interceptors are higher order functions that accept
// list of parameters, instance type (admin or user)
// and finally the axios instance config
const addBaseUrl = (params) => (type) => (config) => {
  switch(type) {
    case 'admin':
      return {
        ...config,
        baseURL: params.beApiUrl,
      };
    case 'user':
      return {
        ...config,
        baseURL: params.feApiUrl,
      };
    default:
      return config;
  }
};
const setRequestToJson = () => () => (config) => {
  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      'Content-Type': 'application/json',
    }
  }
};
const addTimeout = () => () => (config) => {
  return {
    ...config,
    timeout: API_REQUEST_TIMEOUT,
  }
};
const errorHandler = (error, timeoutHandler) => {
  if (error.code === 'ECONNABORTED') {
    return ErrorService.handleTimedOut();
  }

  const {response = false} = error;

  if (response === false) {
    return ErrorService.handle();
  }
  if (response.status === 500 || response.status === '500') {
    return ErrorService.handle();
  }
  if (response.status === 404 || response.status === '404') {

    return ErrorService.handle(error);
  }
  if (response.status === 401 || response.status === '401') {
    timeoutHandler();
    const timeoutError = ErrorService.handle(error);

    timeoutError.name = ERROR_NAME_TIMEOUT;
    return timeoutError;
  }
  try {
    const {data: {message}} = response;

    return ErrorService.handle(message);
  } catch (e) {
    return ErrorService.handle();
  }

  return ErrorService.handle(error.toString());
};
const responseErrorHandler = (timeoutHandler) => () => [(response) => response, (error) => {
  return Promise.reject(errorHandler(error, timeoutHandler));
}];

const invalidRequestHandler = (message = ERROR_MESSAGE_INVALID_REQUEST) => {
  const error = new Error(message);

  return Promise.reject(error);
};

class ApiService {

  constructor() {
    this._allowedKeys = [
      'feApiUrl',
      'beApiUrl',
      'brand',
      'userId',
    ];
    this._params = {};
    this.addInterceptors();
  }

  addInterceptors(timeoutHandler) {
    this.adminInstance = axios.create();
    this.userInstance = axios.create();

    // add request and response interceptors to the axios instances
    const requestInterceptors = [
      addBaseUrl(this._params),
      setRequestToJson(),
      addTimeout(),
    ];
    const responseInterceptors = [
      responseErrorHandler(timeoutHandler)
    ];
    const interceptorsAndInstances = (interceptor) => [
      [interceptor('admin'), this.adminInstance],
      [interceptor('user'), this.userInstance],
    ];

    requestInterceptors.forEach((requestInterceptor) => {
      interceptorsAndInstances(requestInterceptor).forEach(([interceptor, instance]) => {
        if (Array.isArray(interceptor)) {
          instance.interceptors.request.use(interceptor[0], interceptor[1]);
        } else {
          instance.interceptors.request.use(interceptor);
        }
      });
    });
    responseInterceptors.forEach((responseInterceptor) => {
      interceptorsAndInstances(responseInterceptor).forEach(([interceptor, instance]) => {
        if (Array.isArray(interceptor)) {
          instance.interceptors.response.use(interceptor[0], interceptor[1]);
        } else {
          instance.interceptors.response.use(interceptor);
        }
      });
    });
  }

  setParam(key, val) {
    if (this._allowedKeys.indexOf(key) > -1) {
      this._params[key] = val;
    }
  }

  setParams(hash = {}) {
    Object.keys(hash)
      .forEach((key) => {
        this.setParam(key, hash[key]);
      });
    this.addInterceptors();
  }

  fetchStores() {
    // const url = `/store/${this._params.brand}/dashboard/salescatalogs`;
    const url = `/store`;
    return this.userInstance.get(url);
  }

  fetchSalesCatalogs() {
    // const url = `/store/${this._params.brand}/dashboard/salescatalogs`;
    const url = `/${this._params.brand}/salescatalog`;
    return this.userInstance.get(url);
  }

  fetchUserProfileData() {
    const url = `/userprofile`;

    return this.userInstance.get(url);
  }

  fetchBrands() {
    const url = `/brand`;

    return this.userInstance.get(url);
  }

  







}

const ApiServiceSingleton = new ApiService();

export default ApiServiceSingleton;
