/* eslint-disable no-undef */

import React, { useRef } from 'react';
import Header from './header';
import Body from './body';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const Home = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { logOut } = UserAuth();
  const handlerClick = () => {
    headerRef.current.focus();
  };
  const logout = async () => {
    await logOut();
    navigate('/login');
  };

  return (
    <>
      <Header onClick={handlerClick} />
      <button className='btn' onClick={logout}>
        LogOut
      </button>
      <Body isFocus={headerRef} />
    </>
  );
};

export default Home;
