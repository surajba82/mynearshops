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
      navTree
    } = this.props;
    
    return (
      <React.Fragment>
        <Navbar navTree={navTree} />
        <div css={{padding: '10px'}}>
          <h1>Welcome to {storeName}</h1>
        </div>
        <FeaturedProducts />
      </React.Fragment>
    )
  }
}

export {ShopDetail};

const mapStateToProps = (state) => {
  const {shopDetail} = getDataState(state);

  console.log(shopDetail);

  const {
    storeId = '',
    storeName = '',
    navTree = []
  } = shopDetail;

  return {
    storeId,
    storeName,
    navTree
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
