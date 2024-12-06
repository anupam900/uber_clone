import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password }); // Fixed setUserData to setCaptainData
    setEmail('');
    setPassword('');
  };

  return (

    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
    <img className='w-16 mb-7' src='https://th.bing.com/th/id/OIP.doQunjC7NmRaNPR1hBZruQHaHa?rs=1&pid=ImgDetMain' alt='uber logo' />

<form onSubmit={submitHandler}>
<h3 className='text-lg font-medium mb-2'>What's your email?</h3>
<input required 
value={email}
onChange={(e) => setEmail(e.target.value)}
type='email' 
className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base' 
placeholder='abc@xyz.com' />
<h3 className='text-lg font-medium mb-2'>Enter password</h3>
<input required 
value={password}
onChange={(e) => setPassword(e.target.value)}
type='password' 
className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base' 
placeholder='********' />
<button className='bg-[#111] text-white font-semibold mb-2 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
Login
</button>
<p className='text-center'>Join a fleet? <Link to="/captainsignup" className='text-blue-600'>Register as a captain</Link></p>
</form>
    </div>
    <div>
    <Link to="/login"
      className='bg-[#d56228] flex justify-center text-white font-semibold mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
      Sign in as User
      </Link>
    </div>
 </div>
  )
}

export default CaptainLogin