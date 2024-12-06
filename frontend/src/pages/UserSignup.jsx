import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ fullName: { firstName: firstName, lastName: lastName }, email: email, password: password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              className='bg-[#eeeeee] px-4 py-2 w-1/2 rounded border text-lg placeholder:text-base'
              placeholder='First Name'
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              className='bg-[#eeeeee] px-4 py-2 rounded border w-1/2 text-lg placeholder:text-base'
              placeholder='Last Name'
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
            placeholder='abc@xyz.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
            placeholder='********'
          />
          <button className='bg-[#111] text-white font-semibold mb-2 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
            Sign Up
          </button>
        </form>
        <p className='text-center'>
          Already have an account? <Link to="/login" className='text-blue-600'>Login here</Link>
        </p>
      </div>
      <div>
      <p className='text-[10px] text-center leading-tight'>This site is protected by reCAPTCHA and the Google <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply</p>
      </div>
    </div>
  );
};

export default UserSignUp;