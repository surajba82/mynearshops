import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
const Header = (props) => {
  return (
    <header css={{
        background: 'orangered',
        padding: '5px 10px',
        color: '#fff',
        fontSize: '1.5rem',
        fontFamily: 'cursive'
    }}>
        My near shops
    </header>
  )
};

export default Header;
