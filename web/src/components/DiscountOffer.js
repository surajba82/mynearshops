import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const DiscountOffer = (props) => {
  return (
        <div css={{
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
          Get &pound;5 Off 1st Order &amp; Free Delivery on orders over &pound;55 
          <a ><i class="far fa-times-circle"></i></a>
        </div>  
    )
};

export default DiscountOffer;
