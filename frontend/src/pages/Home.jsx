import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => { 
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1572239780645-203c467a49b5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] pt-8 flex justify-between flex-col w-full '>
            <img className='w-16 ml-8' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with UBER</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home