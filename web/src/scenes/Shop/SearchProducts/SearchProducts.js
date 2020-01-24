import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateCart} from '../../../data/data.actions';
import Autosuggest from 'react-autosuggest';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const getSuggestionValue = ({name}) => {
  return name;
};
const renderSuggestion = ({name, imageUrl, price, quantity, offer}) => {
  return (
    <div
      data-test='searchOption'
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <div css={{display: 'flex', marginRight: '10px'}}><img src={imageUrl} width='50' css={{border:'1px solid rgba(0,0,0,0.5)'}} /></div>
      <div css={{display: 'flex', flex: '1'}}>{name} <br />{quantity}</div>
      {offer ? <div css={{
        display: 'flex', 
        marginRight: '10px', 
        backgroundColor: '#d43030', 
        color: 'white',
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px'
        
        }}>{offer}</div>: ''}
      <div>
        <span css={{fontSize:'22px', fontWeight: 'bold', marginRight: '10px'}}>{price}</span>
        <button class="button is-small is-primary">Add</button>
      </div>
    </div>
  )
};

const getSuggestionLabelFromValue = (_id, suggestions) => {
  const suggestion = suggestions.find((item) => item._id === _id);

  if (suggestion) {
    return suggestion.name;
  }
  return '';
};

class SearchProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
      results: [],
      value: getSuggestionLabelFromValue(props.selectedValue, props.products),
      noResults: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedValue === '' && prevProps.selectedValue !== '') {
      this.onSuggestionsFetchRequested({
        value: this.state.value,
      })
    }
  }

  filterShops(value) {
    const matchingShop = (product, queryString) => {
      return product.name.toLowerCase().indexOf(
        queryString.trim().toLowerCase()
      ) > -1;
    }
    return this.props.products
      .filter((product) => matchingShop(product, value))
      // .map(({_id, name, imageUrl, price, quantity}) => ({
      //   _id,
      //   name,
      //   imageUrl,
      //   price,
      //   quantity,
      //   offer      
      // }))
  }

  onSuggestionsFetchRequested = ({value}) => {
    const results = this.filterShops(value);
    this.setState({
      results,
      noResults: results.length === 0,
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      results: [],
      noResults: false
    })
  };

  onChange = (e, { newValue }) => {
    this.setState({
      value: newValue,
    });
    if (this.props.selectedValue !== ''
      && this.props.products.find((store) => store._id === this.props.selectedValue).name !== newValue) {
      this.props.selectValue('');
    }
  };

  onSuggestionSelected = (e, {suggestion}) => {
    e.preventDefault();
    this.props.selectValue(suggestion);
    this.props.dispatch(updateCart(suggestion));
  }

  render() {
    const inputProps = {
      placeholder: 'Search for products',
      value: this.state.value,
      onChange: this.onChange,
      name: 'storeSearch',
      className: 'input'
    };

    return (
        <div>
            <Autosuggest
                suggestions={this.state.results}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                inputProps={inputProps}
                renderSuggestion={renderSuggestion}
                focusInputOnSuggestionClick={false}
            />
            {
              this.state.noResults &&
                <div 
                  className="no-suggestions" 
                  css={{
                    backgroundColor: '#fa4a5b',
                    padding: '10px',
                    color: '#fff'
                  }}>
                  Could not find an Product matching your search
                </div>
            }
        </div>
    )
  }

}

//export {SearchProducts};
const mapStateToProps = (state) => {
  const {cartItems} = state.data;
  
  return {
    cartItems
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchProducts);
