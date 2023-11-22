import '../style/Price.scss';
import {PiPaintBrushBroadLight} from 'react-icons/pi';
import {GrUserWorker} from 'react-icons/gr';
import {GiConcreteBag} from 'react-icons/gi';
import {BsCalendar2DayFill} from 'react-icons/bs';
import {FaArrowRight} from 'react-icons/fa';

export const Prices = () => {
  return (
    <div className='prices'>
      <div className='prices__head'>
        <h2>Pakiety</h2>
        <h2>Wykończenia pod klucz</h2>
        <div className='prices__p'>
          Nasi doświadczeni architekci stworzą projekt i funkcjonalną aranżację
          wnętrza. Ekipa wykończeniowa kompleksowo wykona wszystkie prace
          związane z inwestycją i wyposaży lokal w niezbędne elementy.
        </div>
        <div className='prices__grid-box'>
          <div className='prices__item'>
            <div className='prices__item-title'>
              Prace
              <br />
              wykończeniowe
            </div>
            <PiPaintBrushBroadLight className='prices__icon' />
          </div>
          <div className='prices__item'>
            <div className='prices__item-title'>
              Prace
              <br />
              wykończeniowe
            </div>
            <GrUserWorker className='prices__icon' />
          </div>
          <div className='prices__item'>
            <div className='prices__item-title'>
              Prace
              <br />
              wykończeniowe
            </div>
            <GiConcreteBag className='prices__icon' />
          </div>
          <div className='prices__item'>
            <div className='prices__item-title'>
              Prace
              <br />
              wykończeniowe
            </div>
            <BsCalendar2DayFill className='prices__icon' />
          </div>
        </div>
      </div>
      <div className="prices__grid">
      <div className='prices__price'>
        <h2 className='prices__price-title'>INVEST</h2>
        <p className='prices__price-p'>
          Wykończenie w atrakcyjnym budżecie, w sam raz pod wynajem.
        </p>
        <p className='prices__price-p'>
          850 zł/m
          <sup>2</sup>
        </p>
        <button className='prices__price__button'>
          Zobazc
          <FaArrowRight className='prices__price__button-arrow' />
        </button>
      </div>
      <div className='prices__price prices__price-classic'>
        <h2 className='prices__price-title'>CLASSIC</h2>
        <p className='prices__price-p'>
          Wykończenie w atrakcyjnym budżecie, w sam raz pod wynajem.
        </p>
        <p className='prices__price-p'>
          850 zł/m
          <sup>2</sup>
        </p>
        <button className='prices__price__button'>
          Zobazc
          <FaArrowRight className='prices__price__button-arrow' />
        </button>
      </div>
      <div className='prices__price prices__price-style'>
        <h2 className='prices__price-title'>STYLE</h2>
        <p className='prices__price-p'>
          Wykończenie w atrakcyjnym budżecie, w sam raz pod wynajem.
        </p>
        <p className='prices__price-p'>
          850 zł/m
          <sup>2</sup>
        </p>
        <button className='prices__price__button'>
          Zobazc
          <FaArrowRight className='prices__price__button-arrow' />
        </button>
      </div>
      <div className='prices__price prices__price-premium'>
        <h2 className='prices__price-title'>PREMIUM</h2>
        <p className='prices__price-p'>
          Wykończenie w atrakcyjnym budżecie, w sam raz pod wynajem.
        </p>
        <p className='prices__price-p'>
          850 zł/m
          <sup>2</sup>
        </p>
        <button className='prices__price__button prices__price__button-premium'>
          Zobazc
          <FaArrowRight className='prices__price__button-arrow' />
        </button>
      </div>
      </div>
    </div>
  );
};
