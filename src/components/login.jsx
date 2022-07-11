import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserAuth } from '../context/authContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, theme } = UserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === '' || password === '') {
        Swal.fire({
          text: 'Please add your email and password',
          toast: true,
          position: 'top',
          timer: 1000,
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar: true,
        });
      } else {
        await logIn(email, password);
        navigate('/');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Swal.fire({
          text: 'Invalid email or password',
          toast: true,
          position: 'top',
          timer: 1000,
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar: true,
        });
      }
    }
  };
  const toRegister = () => {
    navigate('/register');
  };
  return (
    <div
      data-theme={theme}
      className='flex justify-center items-center h-screen bg-base-300'
    >
      <div className='card shadow-2xl w-auto  p-3 bg-base-100'>
        <h1 className='text-center text-2xl font-bold'>Login</h1>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>E-mail</span>
          </label>
          <input
            id='email'
            type='email'
            placeholder='Type here'
            className='input input-bordered w-96 max-w-xs'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Type here'
            className='input input-bordered w-96 max-w-xs'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className='btn my-4'>
          Login
        </button>
        <div
          onClick={toRegister}
          className='btn glass text-base-content opacity-40'
        >
          Create account
        </div>
      </div>
    </div>
  );
};

export default Login;
