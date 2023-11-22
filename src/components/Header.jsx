import React from 'react';
import '../style/Header.scss';
import logo from '../logoPL.png';
import {Nav} from './Nav';
import {DropDown} from './DropDown';
import {MenuBurger} from './MenuBurger';
import {NavMobile} from './NavMobile';
import {useState} from 'react';

export const Header = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='header__wrap' onClick={() => setIsNav(!isNav)}>
          <MenuBurger />
        </div>
        <a href='/' className='header__home'>
        <img src={logo} alt="logo" className='header__home'/>
        </a>
        <Nav />
        <DropDown />
      </header>
      {isNav && <NavMobile isNav={isNav} />}
    </>
  );
};
