import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ApiService from '../ApiService';
import {HOME} from './app.config';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import {applyMiddleware} from 'redux-subspace';
import thunk from 'redux-thunk';
import app from './app.reducer';
import {routes} from './app.routes';
import Header from '../components/Header';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingCart, faLocationArrow, faDolly } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */ import { jsx, CX } from '@emotion/core';
 
library.add(
  faSearch, 
  faShoppingCart, 
  faLocationArrow, 
  faDolly
);


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const basePath = (process.env.BASE_PATH || '').trim();

export const store = createStore(
  app,
  composeEnhancers(
    applyMiddleware(...middleware)
  ),
);


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      userid: userId,
      feapiurl: feApiUrl,
      beapiurl: beApiUrl,
    } = this.props;

    ApiService.setParams({
      feApiUrl,
      beApiUrl,
      userId,
    });

    if (process.env.SERVER && process.env.SERVER === 'mock') {
      const mockPort = 8005;
      const mockUrl = `http://${window.location.hostname}:${mockPort}`;
      const mockHost = window.location.hostname;
      this.apiService.setParams({
        apiUrl: `${mockUrl}/api`,
      })
    }
    console.log(this.props);
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <br />
        <Router>
          <Switch>
            {routes.all
              .map(routeKey => routes.byId[routeKey])
              .map(({path, main, ...rest}, index) => (
                <Route
                  key={index}
                  path={path}
                  exact
                  render={main}
                />
              ))}
            <Redirect to={`/`} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
