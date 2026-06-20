import React from 'react'
import Logo from '../assets/logo.png'
import drop_down from '../assets/caret_icon.svg'

const Login = () => {
  return (
    <div className='bg-linear-to-b from-red-950 to-black text-white w-screen h-screen'>
        <div className='pt-8 pl-5 border-b border-gray-800 ' >
            <img src={Logo} alt="netflix_logo"  className='w-25 mb-5'/>
        </div>
        <div className=' absolute top-50 left-130 '>
            <h1 className='font-bold text-3xl pb-3'>Enter your info to sign in</h1>
            <h6 className='text-gray-400 pb-8'>Or get started with a new account.</h6>
            
            <div className='flex flex-col'>
            <input type='email' 
            placeholder='Enter your Email'
            className='border rounded p-2 w-127 font-light mb-2'/>
            <input type="password" placeholder='Password' className='border  rounded p-2 w-127 font-light mb-2 '/>
            <button className='bg-red-700 rounded p-1 text-2xl mb-8 font-medium'>Continue</button>
            </div>

                <div className='flex  justify-between gap-2'>
            <label>Remember Me</label>
            <input type="checkbox" className='mr-75 mt-0.5' />
             <p>Need Help?</p>
                </div>
               
            
            <p className='text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
        </div>
    </div>
  )
}

export default Login