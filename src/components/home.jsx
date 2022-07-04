/* eslint-disable no-undef */
import firebase from 'firebase/compat/app';
import React, { useRef } from 'react';
import Header from './header';
import Body from './body';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const handlerClick = () => {
    headerRef.current.focus();
  };
  const logOut = () => {
    firebase.auth().signOut();
    navigate('/login');
  };
  return (
    <>
      <Header onClick={handlerClick} />
      <button className='btn' onClick={logOut}>
        LogOut
      </button>
      <Body isFocus={headerRef} />
    </>
  );
};

export default Home;
