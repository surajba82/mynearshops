import React from 'react';
import Home from '../scenes/Home';
import Shop from '../scenes/Shop/Shop';
import Category from '../scenes/Category/Category'

export const routes = {
  byId: {
    home: {
      path: `/`,
      exact: true,
      main: () => <Home />
    },
    shop: {
      path: `/:id`,
      exact: true,
      main: () => <Shop />
    },
    category: {
      path: `/:id/category/:id`,
      exact: true,
      main: () => <Category />
    },
  },
  all: [
    'home',
    'shop',
    'category',
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
