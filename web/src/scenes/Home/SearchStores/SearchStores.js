import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = ({storeName}) => storeName;
const renderSuggestion = ({storeName, postalCode}) => {
  return (
    <div
      name='uploadSearchOption'
      data-test='uploadSearchOption'
    >
      <span>{storeName}</span> &nbsp; <span>{postalCode}</span>
      
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

  filterUploads(value) {
    const matchingUpload = (store, queryString) => {
      return store.storeName.toLowerCase().indexOf(
        queryString.trim().toLowerCase()
      ) > -1;
    }
    return this.props.stores
      .filter((store) => matchingUpload(store, value))
      .map(({storeName, _id, postalCode}) => ({
        storeName,
        _id,
        postalCode,
      }))
  }

  onSuggestionsFetchRequested = ({value}) => {
    const results = this.filterUploads(value);
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
      this.props.selectValue('')
    }
  };

  onSuggestionSelected = (e, {suggestion}) => {
    e.preventDefault();
    this.props.selectValue(suggestion._id)
  }

  render() {
    const inputProps = {
      placeholder: 'Search for stores by name, city or postcode',
      value: this.state.value,
      onChange: this.onChange,
      name: 'storeSearch',
      className: 'input'
    };
    const helper = this.state.noResults ? {
      error: 'true',
      helper: 'Could not find an Upload matching your search',
    } : {};

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
        </div>
    )
  }

}

export {SearchStores};
