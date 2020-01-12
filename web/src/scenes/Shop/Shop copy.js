import React, {Component} from "react";
import { withRouter } from "react-router";
import ApiService from '../../ApiService';
import { connect } from 'react-redux';
import {clearAppData} from '../../app/app.actions';
import {fetchShopDetail} from './shop.actions';
import Navbar from '../../components/Navbar';
import Nav from '../../components/Nav';
import FeaturedProducts from "./FeaturedProducts";
import {getDataState} from '../../data/data.selectors';
import {SearchProducts} from './SearchProducts/SearchProducts';
import {IconSearch} from '../../components/Icons';
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

    console.log(this.props);
    
    return (
      <React.Fragment>
        <div>
          <div css={{display: 'flex', alignItems: 'center'}}>
            <img src='./images/pns.jpg' css={{maxWidth: '120px'}} />
          </div>
        </div>
        <div css={{background: '#f6f6f6'}}>
          <div className='wrapper'>
            <div css={{display: 'flex', justifyContent: 'space-between'}}>
              <div css={{display: 'flex', alignItems: 'center'}}>
                <img src='./images/pns.jpg' css={{maxWidth: '120px'}} />
              </div>
              <div>
                <Nav navTree={navTree} />
              </div>
              <div css={{display: 'flex', alignItems: 'center'}}>
                <button className='button is-rounded is-small '>Book a collection</button> &nbsp;
                <button className='button is-rounded is-small tn'>Book a delivery</button>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div css={{padding: '10px'}}>
            <h1>Welcome to {storeName}</h1>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
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
