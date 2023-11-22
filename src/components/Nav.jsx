import '../style/Nav.scss'
import React from 'react';
import { BsPhone } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className='nav'>
      <ul className='nav__ul'>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.pakiety')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.zabudowy')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.remonty')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.project')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.realizacje')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.oNas')}</a></li>
        <li className='nav__li'><a className='nav__a' href="">{t('nav.blog')}</a></li>
      </ul>
      <div className='nav__wrap'>
      <BsPhone className='nav__phone' />
      <a className='nav__tel' href="tel:+48577347453">+48577347453</a>
      </div>
    </nav>
  );
};
