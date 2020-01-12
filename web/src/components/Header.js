import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrandLogo, IconLogin, IconShoppingCart} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const Header = (props) => {
  return (
    <header css={{
        padding: '5px 10px',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }}>
        <div className='wrapper'>
          <div css={{display:'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
            <div css={{display: 'flex', alignItems: 'center'}}>
              <a href='/' css={{display: 'flex'}}>
                <img src='./images/logo.jpg' width="180" />
              </a>
            </div>
            <div css={{display: 'flex', alignItems: 'center'}}>
              <a href='#' css={{display: 'flex'}}>
                <IconLogin />
              </a>
              &nbsp; &nbsp;
              <a href='#' css={{display: 'flex'}}>
                <IconShoppingCart />
              </a>
            </div>
          </div>
        </div>
    </header>
  )
};

export default Header;
