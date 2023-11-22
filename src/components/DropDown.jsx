import { useState } from 'react';
import '../style/DropDown.scss';
import { useTranslation } from 'react-i18next';
import { getLanguage } from '../getLanguage';
import { MdKeyboardArrowDown } from "react-icons/md";

export const DropDown = () => {
  const [open, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const handleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={handleOpen}>{getLanguage().toUpperCase()}<MdKeyboardArrowDown />
      </button>
      {open ? (
        <ul className="dropdown__menu">
          <li className="dropdown__menu-item">
            <button className='dropdown__menu-button' onClick={() => {
              changeLanguage('pl');
              setIsOpen(false);
            }}>
              PL
            </button>
          </li>
          <li className="dropdown__menu-item">
            <button className='dropdown__menu-button' onClick={() => {
              changeLanguage('en');
              setIsOpen(false);
            }}>
              EN
            </button>
          </li>
          <li className="dropdown__menu-item">
            <button className='dropdown__menu-button' onClick={() => {
              changeLanguage('ru');
              setIsOpen(false);
            }}>
              RU
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};