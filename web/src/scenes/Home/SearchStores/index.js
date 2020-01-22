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
        <div css={{width: '100%'}}>
            <div css={{backgroundColor:'rgba(0,0,0,0.5)', padding: '20px'}}>
              <div css={{fontSize:'24px', color: 'white', textAlign: 'center', width: '60%', margin: '0 auto 10px auto'}}>Search stores by name, city or postcode</div>
              <form css={{marginTop: '20px', width: '60%', margin: '0 auto'}} onSubmit={() => console.log('form submit')}>
                <div className="field has-addons" >
                  <div className="control" css={{width: '100%'}}>
                      <SearchStores 
                        stores={this.props.storesList}
                        selectedValue={''}
                        selectValue={(store) => this.setState({storeUrl: `${store.storeUrl}`})}
                      />
                      <button 
                        className="button is-small" 
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