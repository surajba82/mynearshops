import React from 'react';
import Header from './components/Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingCart, faLocationArrow, faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx, CX } from '@emotion/core';
 
library.add(faSearch, faShoppingCart, faLocationArrow, faDolly);

function App() {
  return (
    <div className="container is-fluid">
      <Header />
      <br />
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="field" css={{position: 'relative'}}>
            <div class="control" css={{display: 'flex'}}>
              <input type="text" class="input " placeholder="Search shops by name, city or postcode" />
              <a class="button is-primary "><FontAwesomeIcon icon='search' /></a>
              <a class="button is-small" css={{position: 'absolute', top: '12px', right: '60px', fontSize: '0.75rem'}}><FontAwesomeIcon icon='location-arrow' /> Locate Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
