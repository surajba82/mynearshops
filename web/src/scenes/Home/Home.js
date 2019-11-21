import React, {Component} from "react";
import { connect } from 'react-redux';
import {fetchStores, clearAppData} from '../../app/app.actions';
import SearchStores from './SearchStores/SearchStores';
import Featured from "./Featured/Featured";
import Offers from "./Offers/Offers";

class Home extends Component {
  componentDidMount() {
    this.props.populateStoresList();
  }

  componentWillUnmount() {
    this.props.clearAppData();
  }
  
  render() {
    return (
      <div>
        <SearchStores />
        <Featured />
        <Offers />
      </div>
    )
  }
}

export {Home};

const mapStateToProps = (state) => {
  // const {uploads: {ui}, data} = state;
  // return {
  //   loading: ui.loading,
  //   loadingText: ui.loadingText,
  //   activePage: ui.activePage,
  //   uploadType: ui.uploadList.type,
  //   hasSalesCatalogs: (data.salesCatalogs.all.length ? true : false),
  // }

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
