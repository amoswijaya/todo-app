/* eslint-disable no-undef */

import React, { useRef } from 'react';
import Header from './header';
import Body from './body';
import { UserAuth } from '../context/authContext';

const Home = () => {
  const headerRef = useRef(null);
  const { theme } = UserAuth();
  const handlerClick = () => {
    headerRef.current.focus();
  };

  return (
    <div data-theme={theme} className='bg-base-300'>
      <Header onClick={handlerClick} />
      <Body isFocus={headerRef} />
    </div>
  );
};

export default Home;
