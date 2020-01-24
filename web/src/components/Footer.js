import React from 'react';
import {BrandLogo, IconLogin, IconShoppingCart} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';
 
function Footer() {
  return (
    <footer className="footer">
      <div className="content wrapper" css={{
        marginTop: '60px',
        borderTop: '1px solid rgba(0,0,0,0.3)',
        paddingTop: '10px'
      }}>
        <div className='columns'>
          <div className='column'>
            <div css={{fontWeight: 'bold', color: 'black'}}>INFORMATION</div>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact Us</a></li>
              <li><a>Sitemap</a></li>
            </ul>
          </div>
          <div className='column'>
            <div css={{fontWeight: 'bold', color: 'black'}}>CUSTOMER RESOURCES</div>
            <ul>
              <li><a>Cancellation Policy</a></li>
              <li><a>Delivery Policy</a></li>
              <li><a>Return Policy</a></li>
              <li><a>Terms &amp; Conditions</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>
          <div className='column'>
            <div css={{fontWeight: 'bold', color: 'black'}}>FOLLOW US</div>
            <ul>
              <li><a>Facebook</a></li>
              <li><a>Twitter</a></li>
              <li><a>Instagram</a></li>
            </ul>
          </div>
          <div className='column'>
          <div css={{fontWeight: 'bold', color: 'black'}}>CONTACT US</div>
            <ul>
              <li>+44 2079 934988</li>
              <li><a>hello@mynearshops.com</a></li>
              <li>9am to 6pm, Monday - Friday</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
