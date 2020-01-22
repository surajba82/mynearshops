import React, {Component} from "react";
import { connect } from 'react-redux';
import {fetchStores, clearAppData} from '../../app/app.actions';
import Search from './SearchStores';
import Featured from "./Featured/Featured";
/** @jsx jsx */ import { jsx } from '@emotion/core';

class Home extends Component {
  componentDidMount() {
    this.props.populateStoresList();
  }

  componentWillUnmount() {
    this.props.clearAppData();
  }
  
  render() {
    return (
      <div className='wrapper'>
        <div css={{
          background: 'url("./images/bg.jpg") no-repeat center center',
          display: 'flex',
          alignItems: 'center',
          minHeight: '600px',
          justifyContent: 'center'
        }}>
          <Search />
        </div>
        
        <Featured />
      </div>
    )
  }
}

export {Home};

const mapStateToProps = (state) => {
  

  console.log(state);

  return {}
};
const mapDispatchToProps = (dispatch) => {
  return {
    populateStoresList: () => dispatch(fetchStores()),
    clearAppData: () => dispatch(clearAppData()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
