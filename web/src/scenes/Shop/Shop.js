import React, {Component} from "react";
import { withRouter } from "react-router";
import ApiService from '../../ApiService';
import { connect } from 'react-redux';
import {clearAppData} from '../../app/app.actions';
import {SHOP} from '../../app/app.config';
import {fetchShopDetail} from './shop.actions';
import Navbar from '../../components/Navbar';
import Nav from '../../components/Nav';
import FeaturedProducts from "./FeaturedProducts";
import {getDataState} from '../../data/data.selectors';
import {SearchProducts} from './SearchProducts/SearchProducts';
import {IconSearch, IconDeliveryTruck, IconCar} from '../../components/Icons';
import Carousel from '../../components/Carousel';
/** @jsx jsx */ import { jsx } from '@emotion/core';

class ShopDetail extends Component {
  componentDidMount() {
    const {match: { params }} = this.props;
    
    ApiService.setParam('brand', params.id);
    ApiService.addInterceptors(() => this.props.handleSessionTimeout());

    this.props.fetchShopDetail();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchShopDetail();
    }
  }

  componentWillUnmount() {
    this.props.clearAppData();
  }
  
  render() {
    const {
      storeName,
      navTree,
      products,
    } = this.props;
    const {match: { params }} = this.props;
    const shopObj = SHOP[params.id];
    
    return (
      <React.Fragment>
        <div className='wrapper' css={{padding: '10px 0'}}>
        <div className="columns">
          <div className="column"><img src={shopObj.shopLogo} css={{maxWidth: '120px'}} /></div>
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
              <Nav navTree={navTree} />
            </div>
          </div>
        </div>
        <div className='wrapper' css={{marginTop:'16px'}}>
          <div className="columns">
            <div className="column" css={{zIndex: '1', background:'linear-gradient(to right, #fff 2%, #fff 70%, rgba(255,255,255,0) 100%)'}}>
              <div css={{display: 'flex', alignItems: 'center'}}>
                <div css={{minWidth: '60%'}}>
                  <div css={{
                    fontSize: '1.5rem',
                    marginTop: '10px',
                    color: 'black'}}>
                      Welcome to 
                  </div>
                  <div css={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    color: 'black'}}>
                      {shopObj.shopName}
                  </div>
                  <div css={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <div css={{textAlign: 'center'}}><IconDeliveryTruck /></div>
                      <div><button className='button is-rounded is-small is-primar'>Book a delivery</button></div>
                    </div>
                    <div>
                      <div css={{textAlign: 'center'}}><IconCar /></div>
                      <div><button className='button is-rounded is-small is-primar'>Book a collection</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-three-quarters" css={{marginLeft:'-200px'}}><Carousel /></div>
          </div>          
        </div>
        <br/><br/>
        <FeaturedProducts />
      </React.Fragment>
    )
  }
}

export {ShopDetail};

const mapStateToProps = (state) => {
  const {shopDetail} = getDataState(state);

  const {
    storeId = '',
    storeName = '',
    navTree = [],
    products =[],
  } = shopDetail;

  return {
    storeId,
    storeName,
    navTree,
    products
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopDetail: (id) => dispatch(fetchShopDetail(id)),
    clearAppData: () => dispatch(clearAppData()),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopDetail));