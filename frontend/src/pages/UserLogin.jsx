import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
            placeholder='abc@xyz.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
            placeholder='********'
          />
          <button className='bg-[#111] text-white font-semibold mb-2 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>
        <p className='text-center'>
          New here? <Link to="/signup" className='text-blue-600'>Create a new account</Link>
        </p>
      </div>
      <div>
        <Link to="/captainlogin"
          className='bg-[#10b461] flex justify-center text-white font-semibold mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
