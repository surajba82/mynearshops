import React from 'react';
import {IconChevronTop} from './Icons';
import {Link} from 'react-router-dom';
/** @jsx jsx */ import { jsx } from '@emotion/core';

  const NavList = ({list, shopUrl}) => {
    let hasMenu = false;
    
    return (
      <ul>
      {list.map(item => (
          <li key={item.id}>
            <a><span key={item.name}>{item.name}</span> <IconChevronTop /></a>
            {item.subNav && <ul className='megamenu'><SubList list={item.subNav} shopUrl={shopUrl} /></ul>}
          </li>
      ))}
      <li><a className='badge'><span >OFFERS</span></a></li>
      </ul>
    )
  };

  const SubList = ({list, shopUrl}) => {
    return (
      <React.Fragment>
        {list.map((item, index) => (
            <React.Fragment>
              <div key={index} css={{
                display: 'flex',
                flexDirection: 'column',
                margin: '5px',
                width: '24%',
                border: '1px solid rgba(0,0,0,0.3)'
              }}>
                <div css={{
                  color: 'black',
                  padding: '5px 10px',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                  background: '#e6e6e6',
                  fontSize: '1rem'
                }}>{item.name}</div>
                <ul>
                  {item.items.map(k => (
                  <li key={k}><Link to={`/${shopUrl}/category/${k.toLowerCase().replace(' ', '-')}`}>{k}</Link></li>
                  ))}
                </ul>
            </div>
            
            </React.Fragment>
        ))}
        </React.Fragment>
    )
  };


class Nav extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
 
  
  render() {
    const {
        navTree,
        shopUrl
    } = this.props;

    
    
    return (      
        <nav>
            <NavList list={navTree} shopUrl={shopUrl} />
        </nav>
    );
  }
}


export default Nav;