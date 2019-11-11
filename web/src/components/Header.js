import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const Header = (props) => {
  return (
    <nav class="navbar is-fixed-top"  role="navigation" aria-label="main navigation">
        <div css={{padding: '0 10px', display: 'flex', flexGrow: '1'}}>
        <div class="navbar-brand">
            <a class="navbar-item" href="/"><span css={{fontWeight: 'bold', color: 'red', fontSize: '1.5rem'}}>MY LOCAL STORE</span></a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary"><strong>Sign up</strong></a>
                        <a class="button is-light">Log in</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </nav>

  )
};

export default Header;
