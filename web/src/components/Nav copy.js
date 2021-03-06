import React from 'react';
import {IconChevronRight} from './Icons';
/** @jsx jsx */ import { jsx } from '@emotion/core';

const Menulist = ({child}) => {
    {child.map(item => {
        if (item.dive) {
        return (
            <React.Fragment>
            <li class="submenu">
                <a href="#" title={item.name}>{item.name}</a>
            </li>
            <ul class="megamenu">
            <ul>
            
            </ul>
            </ul>
            </React.Fragment>
        ); 
        }
        else if (!item.dive) {
        return (
            <li name={item.name}><a>{item.name}</a></li>
        ); 
        }
        return null;
    })}
}

const SimpleList = ({list}) => (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );

  const NavList = ({list}) => {
    let hasMenu = false;
    
    return (
        <ul>
        {list.map(item => (
            <li key={item.name}>
                <a>{item.name}</a>
                {item.dive && <ul className='megamenu'><SubList list={item.subNav} /></ul>}
            </li>
        ))}
        </ul>
    )
  };

  const SubList = ({list}) => {
    let hasChild = false;
    return (
        <ul css={{position: 'relative', width: '25%'}}>
        {list.map(item => (
            <li key={item.name}>
                <a css={{display: 'flex', justifyContent: 'space-between'}}>
                  <span css={{
                    display: 'flex', 
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'inline-block'
                  }}>{item.name}</span> 
                  {item.dive && <span css={{display: 'flex', alignItems: 'center'}}><IconChevronRight /></span>}
                </a>
                {item.dive && <SubList list={item.subNav} />}
            </li>
        ))}
        </ul>
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