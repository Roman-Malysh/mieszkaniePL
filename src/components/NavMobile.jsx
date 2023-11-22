import '../style/NavMobile.scss';
import React from 'react';
import classNames from 'classnames';
import { BsPhone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export const NavMobile = ({isNav}) => {
  const { t, i18n } = useTranslation();

  return (
    <nav className={classNames('nav-mobile',{'open': isNav})}>
      <ul className='nav-mobile__ul'>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.pakiety')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.zabudowy')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.remonty')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.project')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.realizacje')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.oNas')}</a></li>
        <li className='nav-mobile__li'><a className='nav-mobile__a' href="">{t('nav.blog')}</a></li>
      </ul>
      <p className="nav-mobile__p">{t('nav.contactUS')}</p>
      <div className='nav-mobile__wrap'>
      <BsPhone className='nav-mobile__tel-icon' />
      <a className='nav-mobile__tel' href="tel:+48577347453">+48577347453</a>
      </div>
      <div className='nav-mobile__wrap'>
      <IoIosMail className='nav-mobile__mail-icon'/>
      <a href="mailto:mail@.com" className="nav-mobile__mail">mail@.com</a>
      </div>
      <button className='nav-mobile__button'>smth</button>
    </nav>
  )
}
