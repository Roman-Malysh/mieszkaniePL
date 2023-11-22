import '../style/MenuBurger.scss';
import  classNames  from 'classnames';
import { useState } from 'react';

export const MenuBurger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <a onClick={() => setIsActive(!isActive)} className={classNames('toggle-menu',{'active': isActive})} href='#'>
      <i></i>
      <i></i>
      <i></i>
    </a>
  );
};
