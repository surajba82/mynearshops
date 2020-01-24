import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ApiService from '../ApiService';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import {applyMiddleware} from 'redux-subspace';
import thunk from 'redux-thunk';
import app from './app.reducer';
import {routes} from './app.routes';
import {SHOP} from './app.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import {getDataState} from '../data/data.selectors';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingCart, faLocationArrow, faDolly, faAngleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SearchProducts from '../scenes/Shop/SearchProducts/SearchProducts';
import {IconSearch} from '../components/Icons';
/** @jsx jsx */ import { jsx, CX } from '@emotion/core';
 
library.add(
  faSearch,
  faMapMarkerAlt,
  faShoppingCart, 
  faLocationArrow, 
  faDolly,
  faAngleDown
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

const mapStateToProps = (state) => {
  const {shopDetail} = getDataState(state);
  const {
    shopUrl = '',
    storeName = '',
    navTree = [],
    products = [],
  } = shopDetail;
 
  return {
    shopUrl,
    storeName,
    navTree,
    products,
  }
};

class RootApp extends Component {
  constructor(props) {
    super(props);   
  }

  render() {
    const {
      navTree,
      products,
      shopUrl,
    } = this.props;

    const shopObj = SHOP[shopUrl];

    
    if(this.props.navTree.length) {
      return(
        <React.Fragment>
          <div className='wrapper' css={{padding: '10px 0'}}>
            <div className="columns">
              <div className="column"><img src={shopObj.shopLogo}  /></div>
              <div className="column"></div>
              <div className="column is-two-thirds">
                  <div className="field has-addons">
                    <div className="control" css={{width:'100%'}}>
                      <SearchProducts 
                        products={products}
                        selectedValue={''}
                        selectValue={(store) => console.log('hi')}
                      />
                    </div>
                    <div className="control">
                        <a className="button is-primary">
                          <IconSearch />
                        </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div css={{background: '#f6f6f6', boxShadow: '0 1px 3px rgba(0,0,0,0.3)'}}>
            <div className='wrapper'>
              <div css={{display: 'flex', justifyContent: 'space-between'}}>
                <Nav navTree={navTree} shopUrl={shopUrl}  />
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <div></div>
      )
    }
    
  }
}


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
    
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <ConnectedRootApp />
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
        <Footer />
      </Provider>
    )
  }
}

export default App;

const ConnectedRootApp = withRouter(connect(
  mapStateToProps,
)(RootApp));

