import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const getSuggestionValue = ({storeName, storeUrl, postalCode}) => {
  console.log(postalCode, storeUrl);
  return storeName;
};
const renderSuggestion = ({storeName, postalCode,address}) => {
  return (
    <div
      data-test='searchOption'
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div>{storeName}</div> 
      <div css={{fontSize: '10px'}}>at {address.landmark}, {address.cityDistrictTown}, {postalCode}</div>
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

class SearchStores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
      results: [],
      value: getSuggestionLabelFromValue(props.selectedValue, props.stores),
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
    const matchingShop = (store, queryString) => {
      return store.storeName.toLowerCase().indexOf(
        queryString.trim().toLowerCase()
      ) > -1;
    }
    return this.props.stores
      .filter((store) => matchingShop(store, value))
      .map(({_id, storeName, storeUrl, postalCode, address}) => ({
        _id,
        storeName,
        storeUrl,
        postalCode,
        address,
      }))
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
      && this.props.stores.find((store) => store._id === this.props.selectedValue).name !== newValue) {
      this.props.selectValue('');
    }
  };

  onSuggestionSelected = (e, {suggestion}) => {
    e.preventDefault();
    this.props.selectValue(suggestion)
  }

  render() {
    const inputProps = {
      placeholder: 'Search for stores by name, city or postcode',
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
                  Could not find an Shop matching your search
                </div>
            }
        </div>
    )
  }

}

export {SearchStores};
