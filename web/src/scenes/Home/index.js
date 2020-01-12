import React, {Component} from "react";
import { connect } from 'react-redux';
import {fetchStores, clearAppData} from '../../app/app.actions';
import Search from './SearchStores';
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
        <Search />
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
