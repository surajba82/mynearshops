import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const Header = (props) => {
  return (
    <nav className="navbar is-fixed-top"  role="navigation" aria-label="main navigation">
        <div css={{padding: '0 10px', display: 'flex', flexGrow: '1'}}>
        <div className="navbar-brand">
            <a className="navbar-item" href="/"><span css={{fontWeight: 'bold', color: 'red', fontSize: '1.5rem'}}>mynearshops</span></a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary"><strong>Sign up</strong></a>
                        <a className="button is-light">Log in</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </nav>

  )
};

export default Header;
