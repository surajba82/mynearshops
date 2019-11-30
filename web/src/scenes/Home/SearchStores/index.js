import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SearchStores} from './SearchStores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getDataState} from '../../../data/data.selectors';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
class Search extends Component {
  
  
  render() {
    return (
      <div className="columns is-centered">
          <div className="column is-half">
          <form>
              <div className="field" >
              <div className="control" >
                  <SearchStores 
                    stores={this.props.storesList}
                    selectedValue={''}
                    selectValue={this.props.selectStore}
                  />
                  <button className="button is-small" css={{position: 'absolute', top: '5px', right: '5px'}}>
                    <FontAwesomeIcon icon='location-arrow' /> Locate Me
                  </button>
              </div>
              </div>
          </form>
          </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  const {stores} = getDataState(state);

  return {
    storesList: stores.all.map(key => stores.byId[key]),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectStore: (store) => console.log(store),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);