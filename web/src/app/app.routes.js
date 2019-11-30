import {Redirect} from 'react-router-dom';
import React from 'react';
import Home from '../scenes/Home/Home';
import {
  HOME,
  STORE_MOON,
} from './app.config';

export const routes = {
  byId: {
    home: {
      path: "/",
      exact: true,
      main: ({match}) => <Redirect to={`/`}/>
    },
    home: {
      path: `/`,
      exact: true,
      main: () => <Home />
    },
    moon: {
      path: `/:id`,
      exact: true,
      main: () => <div>Moon</div>
    },
  },
  all: [
    'home',
    'home',
    'moon',
  ],
};

export const pathResolver = (path = '', params = {}) => {
  const optionalParamsRegex = new RegExp('(:).*\\?', 'gi');
  const requiredParams = Object.entries(params)
    .reduce((resolvedPath, [param, value]) => {
      const regex = new RegExp('(:)(' + param + ')(\\?\?)(\\/|\$)', 'gi')

      return resolvedPath.replace(regex, `${value}/`);
    }, path);

  return requiredParams.replace(optionalParamsRegex, '');
};
