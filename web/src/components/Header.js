import React, { useState } from 'react';
import { connect } from 'react-redux';
import {BrandLogo, IconLogin, IconShoppingCart} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
function Header(props) {
  const {cartItems} = props;
  const totalCost = cartItems.reduce((total, num) => {
    return total + Number(num.price.substring(1));
  }, 0);
  const [isOpen, setOpen] = useState(false);
  const rightPos = isOpen ? '0' : '-470px';
  
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
          <div 
            style={{right: rightPos}}
            css={{
              position: 'fixed',
              background: '#fff',
              width: '450px',
              height: '100%',
              zIndex: '10',
              boxShadow: '0 3px 20px rgba(0,0,0,.5)',
              transition: 'right 0.2s'
          }}>
            <div css={{padding: '10px'}}>
              {cartItems.map(item => (
                  <div key={item._id} css={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    marginBottom: '10px'
                  }}>
                    <div css={{width: '100px'}}><img src={item.imageUrl} /></div>
                    <div css={{
                      fontSize: '16px',
                      color: 'black',
                      fontWeight: 'bold',
                      paddingLeft: '10px'
                    }}>{item.name}<br />Quantity: 1</div>
                    <div css={{
                      flex: '1',
                      textAlign: 'right',
                      color: 'black'
                    }}>{item.price}</div>
                  </div>
              ))}

              <div css={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div css={{color: 'black'}}>SUBTOTAL</div>
                <div css={{color: 'black'}}>£{totalCost.toFixed(2)}</div>
              </div>

              <button 
                className='button is-large is-primary'
                css={{width: '100%', position: 'absolute', bottom: '10px'}}
              >CHECKOUT</button>
              <button 
                className='button is-small' 
                css={{position: 'absolute', right: '10px', top: '10px'}}
                onClick={() => setOpen(!isOpen)}
              >X</button>
            </div>

            
          </div>
          <div css={{
            display:'flex', 
            justifyContent: 'space-between',
            width: '100%'
            }}
          >
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
                onClick={() => setOpen(!isOpen)}
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
