import React from 'react';
import { connect } from 'react-redux';
import {IconPlus, IconMinus} from '../../../components/Icons';
import {updateCart} from '../../../data/data.actions';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const Products = (props) => {
    const {products, dispatch} = props;
  
    return (
        <div className='columns is-multiline'>
        {
          products.map(product => (
            <div key={product.id} className='column is-one-fifth' css={{textAlign: 'center', position: 'relative'}}>
                {product.offer && <div css={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#bf0000',
                    borderRadius: '2px', 
                    color: 'white',
                    padding: '5px'
                }}>{product.offer}</div>}
                <div><img src={`${product.imageUrl}`} /></div>
                <div><a css={{color:'#fa7e03', fontWeight: 'bold'}}>{product.name}</a></div>
                <div css={{fontWeight: 'bold'}}>{product.price}</div>
                <div css={{marginTop: '10px'}}>
                    <div className="field has-addons" >
                        <div className="control" css={{width: '100%', textAlign: 'center'}}>
                            <button className="button is-small is-default"><IconMinus /></button>
                            <input type='text' value='1' className="input is-small" css={{
                                width: '40px',
                                border: '2px solid rgba(0,0,0,0.2)',
                                borderLeft: '0',
                                borderRight: '0',
                                textAlign: 'center'
                            }} />
                            <button className="button is-small is-default"><IconPlus /></button>

                        </div>
                    </div>
                </div>
                <div css={{marginTop: '10px'}}>
                  <button className="button is-primary" onClick={() => dispatch(updateCart(product))}>Add</button>
                </div>
            </div>
          ))
        };
      </div>
    );
  }
  
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
)(Products);