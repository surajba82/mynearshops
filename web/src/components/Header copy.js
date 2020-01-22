import React, { useState } from 'react';
import { connect } from 'react-redux';
import {BrandLogo, IconLogin, IconShoppingCart} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
function Header(props) {
  const {cartItems} = props;
  const totalCost = cartItems.reduce((total, num) => {
    return total + Number(num.price.substring(1));
  }, 0);
  
  
  return (
    <header css={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor: '#fa7e03',
        marginBottom: '3px',
        minHeight: '60px',
        display: 'flex',
        alignItems: 'stretch'
    }}>
        <div className='wrapper' css={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%'
        }}>
          <div css={{
            position: 'fixed',
            right: '0',
            background: '#fff',
            width: '400px',
            height: '100%',
            zIndex: '100',
            border: '1px solid',
            transition: 'right 0.2s'
          }}>cart content</div>
          <div css={{
            display:'flex', 
            justifyContent: 'space-between',
            width: '100%'
            }}>
            <div css={{display: 'flex', alignItems: 'center'}}>
              <a href='/' css={{
                  display: 'flex', 
                  color: '#ffffff', 
                  textShadow: '0 3px 5px rgba(0,0,0,0.3)',
                  fontSize: '32px'
                }}
              >
                mynearshops
              </a>
            </div>
            <div css={{display: 'flex', alignItems: 'stretch'}}>
              <a href='#' css={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderLeft: '1px solid rgba(0,0,0,0.3)',
                borderRight: '1px solid rgba(0,0,0,0.3)',
                padding: '0 20px'
                }}>
                <IconLogin />
                <span css={{
                  color: '#fff',
                  fontSize: '14px',
                  marginLeft: '10px'
                }}>Sign up <br />or Log in</span>
              </a>
              <a 
                href='#'
                onClick={() => setOpen(true)}
                css={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRight: '1px solid rgba(0,0,0,0.3)',
                padding: '0 20px',
                position: 'relative'
                }}>
                  <span css={{
                    position: 'absolute',
                    color: '#fff',
                    left: '30px',
                    top: '20px',
                    fontSize: '20px'
                  }}>{cartItems.length}</span>
                <IconShoppingCart />
                <span css={{
                  color: '#fff',
                  fontSize: '16px',
                  marginLeft: '10px'
                }}>£{totalCost.toFixed(2)}</span>
              </a>
            </div>
          </div>
        </div>
    </header>
  )
};


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
)(Header);
