import React, {Component} from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import {clearAppData} from '../../app/app.actions';
import {fetchProducts} from '../../data/data.actions';
import {fetchShopDetail} from '../Shop/shop.actions';
import {getDataState} from '../../data/data.selectors';
import loadable from '../../components/loadable';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';
/** @jsx jsx */ import { jsx } from '@emotion/core';

class Category extends Component {
  componentDidMount() {
    if(!this.props.navTree.length) {
      this.props.fetchShopDetail(); 
    }
    this.props.dispatch(fetchProducts()); 
  }

  componentWillUnmount() {
    this.props.clearAppData();
  }
  
  render() {
    const {
      superCategory,
      subCategories,
      products,
    } = this.props;
    
    return (
      <div className='wrapper'>
        <div className="columns" css={{marginTop: '0'}}>
          <div className='column is-one-fifth'><Sidebar superCategory={superCategory} subCategories={subCategories} /></div>
          <div className='column'><Products products={products} /></div>
        </div>
      </div>
    )
  }
}

export {Category};

const mapStateToProps = (state) => {
  const {categories = {}} = state.data;
  const {shopDetail} = getDataState(state);
  const {
    superCategory = '',
    subCategories = [],
    products =[],
  } = categories;
  const {navTree = []} = shopDetail;
  const loading = state.data.loading;
  const loadingText = state.data.loadingText;
  
  return {
    superCategory,
    subCategories,
    products,
    navTree,
    loading,
    loadingText,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopDetail: (id) => dispatch(fetchShopDetail(id)),
    clearAppData: () => dispatch(clearAppData()),
    dispatch,
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(loadable(Category)));