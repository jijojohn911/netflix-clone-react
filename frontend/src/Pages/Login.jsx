import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import drop_down from '../assets/caret_icon.svg'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Login Failed')
        return
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/home')
      console.log("logged in:", data.user);

    } catch (err) {
      setError('Could not connect to server')
    }
  }
  return (
    <div className='bg-linear-to-b from-red-950 to-black text-white w-screen min-h-screen flex flex-col'>
      <div className='pt-6 px-4 sm:pt-8 sm:pl-5 border-b border-gray-800'>
        <img src={Logo} alt="netflix_logo" className='w-20 sm:w-25 mb-5' />
      </div>

      <div className='flex-1 flex items-center justify-center px-4'>
        <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
          <h1 className='font-bold text-2xl sm:text-3xl pb-3'>Enter your info to sign in</h1>
          <h6 className='text-gray-400 pb-6 sm:pb-8 text-sm sm:text-base'>
            Or get started with a new account.
          </h6>

          <form onSubmit={handleSubmit} className='flex flex-col w-full'>
            <input
              type="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border rounded p-2 w-full font-light mb-2'
            />
            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border rounded p-2 w-full font-light mb-2'
            />
            {error && <p className='text-red-500 mb-2 text-sm'>{error}</p>}
            <button type='submit' className='bg-red-700 rounded p-2 sm:p-1 text-xl sm:text-2xl mb-6 sm:mb-8 font-medium'>
              Continue
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4 text-center">
            New to Netflix?{' '}
            <NavLink to="/signup" className="text-white hover:underline font-medium">
              Sign up now
            </NavLink>
          </p>


          <div className='flex flex-wrap justify-between items-center gap-2 text-sm sm:text-base'>
            <label className='flex items-center gap-1'>
              <input type="checkbox" />
              Remember Me
            </label>
            <p>Need Help?</p>
          </div>

          <p className='text-gray-500 text-xs sm:text-sm mt-4'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login