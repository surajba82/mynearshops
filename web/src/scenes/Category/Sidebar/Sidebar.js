import React from 'react';
import {IconChevronRight} from '../../../components/Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';

function Sidebar({superCategory, subCategories}) {
  return (
    <div>
      <div css={{
        color: 'black',
        padding: '5px 10px',
        textTransform: 'uppercase',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        fontWeight: 'bold',
        background: '#e6e6e6',
        fontSize: '1rem'
      }}>{superCategory.name}</div>
      <ul>
      {
        subCategories.map(category => (
          <li key={category.id}>
            <a css={{
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold',
              padding: '4px',
              margin: '0 4px',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{category.name}</span>
              <IconChevronRight/>
            </a>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default Sidebar;