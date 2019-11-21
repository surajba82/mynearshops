import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const SearchStores = (props) => {
  return (
    <div className="columns is-centered">
        <div className="column is-half">
        <form>
            <div className="field" css={{position: 'relative'}}>
            <div className="control" css={{display: 'flex'}}>
                <input type="text" className="input " placeholder="Search shops by name, city or postcode" />
                <button type='submit' className="button is-primary "><FontAwesomeIcon icon='search' /></button>
                <a class="button is-small" css={{position: 'absolute', top: '12px', right: '60px', fontSize: '0.75rem'}}><FontAwesomeIcon icon='location-arrow' /> Locate Me</a>
            </div>
            </div>
        </form>
        </div>
    </div>
  )
};

export default SearchStores;
