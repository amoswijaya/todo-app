import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';
const Login = () => {
  const [email, setEmail] = useState('amos@admin.com');
  const [password, setPassword] = useState('12345678');
  const { logIn, theme } = UserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-theme={theme}
      className='flex justify-center items-center h-screen'
    >
      <div className='card shadow-2xl w-auto  p-3'>
        <h1 className='text-center text-2xl font-bold'>Login</h1>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>E-mail</span>
          </label>
          <input
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
      </div>
    </div>
  );
};

export default Login;
