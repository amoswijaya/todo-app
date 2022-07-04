import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCA1-K13GI4k16CSEdBPbBr9no4GOHVJ-o',
  authDomain: 'simple-todo-e8565.firebaseapp.com',
  projectId: 'simple-todo-e8565',
  storageBucket: 'simple-todo-e8565.appspot.com',
  messagingSenderId: '963726750436',
  appId: '1:963726750436:web:01442ca32ac2fa443872f1',
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
