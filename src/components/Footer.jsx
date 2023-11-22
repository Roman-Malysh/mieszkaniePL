import '../style/Footer.scss';
import {useTranslation} from 'react-i18next';
import logo from '../logoPL.png';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';

export const Footer = () => {
  const {t, i18n} = useTranslation();
  const color = '#FAF0E6';

  return (
    <footer className='footer'>
      <div className="footer__container">
      <nav className='footer__nav'>
        <ul className='footer__nav__ul'>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.pakiety')}
            </a>
          </li>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.zabudowy')}
            </a>
          </li>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.remonty')}
            </a>
          </li>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.project')}
            </a>
          </li>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.realizacje')}
            </a>
          </li>
          <li className='footer__nav__li'>
            <a className='footer__nav__a' href=''>
              {t('nav.oNas')}
            </a>
          </li>
        </ul>
      </nav>
      <a href='/' className='footer__home'>
        <img src={logo} alt='logo' className='footer__home' />
      </a>
      <div className='footer__adresses'>
        <div className='footer__adress'>
          <p className='footer__adress-city'>Warsaw</p>
          <p className='footer__adress-p'>ul. smth 19</p>
          <p className='footer__adress-p'>sb-pt</p>
          <a href='#' className='footer__adress-a'>
            564876465
          </a>
          <a href='#' className='footer__adress-a'>
            mailto
          </a>
        </div>
      </div>
      <div className='footer__socials'>
        <FaInstagram color={color} size={50} />
        <FaFacebook color={color} size={50} />
        <FaTelegramPlane color={color} size={50} />
      </div>
      <div className='footer__notes'>
        <p className='footer__notes-p'>
          SKB GROUP LIMITED LIABILITY COMPANY with its registered office in ul.
          Wiertnicza 63A, 02-952 Warsaw, Poland . Entered in the Register of
          Entrepreneurs of the National Court Register, kept by the District
          Court for the Capital City of Warsaw and XIII Commercial Division of
          the National Court Register, with the share capital of PLN 5,000.00
          fully paid up. KRS:0000642109, NIP: 5272782752, REGON: 365642690.
        </p>
        <p className='footer__notes-p'>
          Мы являемся профессионалами в дизайне и ремонте интерьера. Мы
          выполняем каждую реализацию с тщательностью, полным профессионализмом
          и в соответствии с бюджетом и сроками реализации. Мы предлагаем
          профессиональную комплексную поддержку с учетом личных предпочтений
          клиента. В нашем предложении мы даем возможность вернуть помещение в
          состояние застройки, а затем воспользоваться нашим предложением на
          отделочные пакеты.
        </p>
      </div>
      <div className="footer__copyrights">© Copyright 2022 Gotowe Mieszkanie | Все права защищены | </div>
      </div>
    </footer>
  );
};
