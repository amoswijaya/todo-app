import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserAuth } from '../context/authContext';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signUp, theme } = UserAuth();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (email === '' || password === '' || name === '') {
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
        await signUp({ email, password, name });
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-theme={theme}
      className='flex justify-center items-center h-screen bg-base-300'
    >
      <div className='card shadow-2xl w-auto bg-base-100  p-3'>
        <h1 className='text-center text-2xl font-bold'>Register</h1>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Your Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-96 max-w-xs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        <button onClick={handleRegister} className='btn my-4'>
          Create acount
        </button>
      </div>
    </div>
  );
};

export default Register;
