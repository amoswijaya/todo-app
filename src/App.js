import Home from './components/home';
// import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import Login from './components/login';
import { ProtectedRoute } from './hooks';
// import { authSuccess } from './store/action';
export default function App() {
  // const dispatch = useDispatch();
  // const { isAuthenticated, isLoading, user } = useSelector(
  //   (state) => state.auth
  // );
  // useEffect(() => {
  //   return dispatch(authSuccess(getCurrentUser()));
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log('user', user);
  // }, [user]);
  // const { isAuthed, isLoading } = useAuth();
  return (
    <div data-theme='light' className='h-screen'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}
