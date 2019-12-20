import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';

class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  navList = () => {
    this.props.navTree.forEach((item, index) => {
      return (
        <li key={index} >
          <a href={item.dive ? '#' : `/page/${item.id}`} >
            {item.name}
            {item.dive && <i className='icon ion-md-arrow-dropdown'/>}
          </a>
          
        </li>
      )
      }
    );
  };
  render() {
    const {
      navTree
    } = this.props;

    const subNav = (items) => {
      const links = items.map((link) =>
        <li key={link.id}>
          <a href={link.dive ? '#' : `/page/${link.id}`}>
            <span>{link.name}</span>
            <span>{link.dive && <i className='icon ion-md-arrow-dropdown'/>}</span>
          </a>
          {link.dive && <ul className='sub-menu'>{level(link.subNav)}</ul>}
        </li>
      );

      return links;
    };

    const level = (items) => {
      const links = items.map((link) =>
        <li key={link.id}>
          <a href={link.dive ? '#' : `/page/${link.id}`} >
            <span>{link.name}</span>
            <span>{link.dive && <i className='icon ion-md-arrow-dropdown'/>}</span>
          </a>
          {link.dive && <ul className='sub-menu'>{subNav(link.subNav)}</ul>}
        </li>
      );

      return links;
    };

    const items = navTree.map((item) =>
      <li key={item.id} >
        <a href={item.dive ? '#' : `/page/${item.id}`} >
          {item.name}
          {item.dive && <i className='icon ion-md-arrow-dropdown'/>}
        </a>
        {item.dive && <ul className='sub-menu'>{subNav(item.subNav)}</ul>}
      </li>
    );

    // const items = navTree.forEach((item, index) => {
    //   <li key={index} >
    //     <a href={item.dive ? '#' : `/page/${item.id}`} >
    //       {item.name}
    //       {item.dive && <i className='icon ion-md-arrow-dropdown'/>}
    //     </a>
    //     {item.dive && <ul className='sub-menu'>{subNav(item.subNav)}</ul>}
    //   </li>
    //   }
    // );

    
    return (      
      <div css={{position: 'relative', minHeight: '20px'}}>
          <div className='navContainer'>
            <nav className={`${this.state.activeMenu ? 'active' : ''}`}>
              <div className='menu-icons'>
                <i className='icon ion-md-menu' onClick={this.toggleMenu}></i>
                <i className='icon ion-md-close' onClick={this.toggleMenu}></i>
              </div>
              <a className='logo'>
                <img src='/images/pns.jpg' width='100' />
              </a>
              <ul className='nav-list'>
                {items}
                <li className='move-right'>
                  <button className='button is-rounded is-small '>Book a collection</button>
                  <button className='button is-rounded is-small tn'>Book a delivery</button>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    );
  }
}


export default Navbar;