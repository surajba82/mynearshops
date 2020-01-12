import React from 'react';
import {IconChevronRight, IconChevronTop} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';

  const NavList = ({list}) => {
    let hasMenu = false;
    
    return (
      <ul>
      {list.map(item => (
          <li key={item.id}>
            <a><span key={item.name}>{item.name}</span> <IconChevronTop /></a>
            {item.subNav && <ul className='megamenu'><SubList list={item.subNav} /></ul>}
          </li>
      ))}
      <li><a><span className='badge'>OFFERS</span></a></li>
      </ul>
    )
  };

  const SubList = ({list}) => {
    return (
      <React.Fragment>
        {list.map((item, index) => (
            <React.Fragment>
              <div key={index} css={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
                width: '20%',
              }}>
                <div css={{
                  color: 'black',
                  padding: '5px 10px',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  fontWeight: 'bold'
                }}>{item.name}</div>
                <ul>
                  {item.items.map(k => (
                  <li key={k}><a>{k}</a></li>
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
        navTree
    } = this.props;

    
    
    return (      
        <nav>
            <NavList list={this.props.navTree} />
        </nav>
    );
  }
}


export default Nav;