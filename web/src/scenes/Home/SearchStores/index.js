import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {SearchStores} from './SearchStores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getDataState} from '../../../data/data.selectors';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
class Search extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      storeUrl: ''
    }
  }
  
  render() {
    if(this.state.storeUrl !== '') {
      return(
        <Redirect to={`/${this.state.storeUrl}`}/>
      )
    } else {
      return (
        <div className="columns is-centered">
            <div className="column is-half">
            <form css={{marginTop: '20px'}} onSubmit={() => console.log('form submit')}>
                <div className="field has-addons" >
                  <div className="control" css={{width: '100%'}}>
                      <SearchStores 
                        stores={this.props.storesList}
                        selectedValue={''}
                        selectValue={(store) => this.setState({storeUrl: `${store.storeUrl}`})}
                      />
                      <button 
                        className="button is-small is-primary" 
                        css={{
                          position: 'absolute', 
                          top: '8px', 
                          right: '10px', 
                          zIndex: '10',
                          height: '2em',
                          padding: '0 4px'
                        }}
                      >
                        <FontAwesomeIcon icon='map-marker-alt' /> &nbsp; Locate Me
                      </button>
                  </div>
                  <div className="control">
                      <button 
                        type="submit"
                        className="button is-primary" 
                      ><FontAwesomeIcon icon='search' /></button>
                  </div>
                </div>
            </form>
            </div>
        </div>
      )
    }
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