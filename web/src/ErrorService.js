import {
  ERROR_MESSAGE_GENERIC,
  ERROR_MESSAGE_TIMEOUT
} from './app/app.config';

class ErrorService {

  handle(error, altMessage = ERROR_MESSAGE_GENERIC) {
    console.error(error);
    if (error instanceof Error) {
      return error;
    }
    return new Error(error || altMessage);
  }

  handleTimedOut() {
    return new Error(ERROR_MESSAGE_TIMEOUT);
  }

  log(message) {
    console.log(message);
  }

}

const ErrorServiceSingleton = new ErrorService();

export default ErrorServiceSingleton;
