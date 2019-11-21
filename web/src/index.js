import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

let props = {};

if (process.env.NODE_ENV === 'development') {
  props = {
    brand: 'testbrand',
    feapiurl: `http://${window.location.hostname}:8002/api`,
    beapiurl: `http://${window.location.hostname}:8002/admin`,
    userid: 'testuser',
  }
}

ReactDOM.render(<App {...props} />, document.getElementById('root'));
