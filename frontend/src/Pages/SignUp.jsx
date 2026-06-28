import React, { useState } from 'react'
import Logo from '../assets/background_banner.jpg'
import AuthNavbar from '../Components/AuthNavbar'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
       console.log("API URL:", import.meta.env.VITE_API_URL)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           username:username.trim(),
           email:email.trim(), 
            password })
            
            
      })
     
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Signup failed')
        return
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/home')
    } catch (err) {
      setError("Could not connect to server")
      
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      <AuthNavbar />
      <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4'>

        <div className='absolute z-10 inset-0'>
          <img src={Logo} alt="Netflix image" className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/50 bg-linear-to-t from-black/90 via-black/20 to-black/90'></div>
        </div>

        <ul className="relative z-20 text-white text-center flex flex-col items-center gap-3 list-none w-full max-w-md md:max-w-lg lg:max-w-xl py-12">
          <li className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Unlimited Movies,
          </li>
          <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            shows, and more.
          </li>
          <li className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-300'>
            start at ₹199. Cancel at any time.
          </li>
          <p className='text-red-300 text-sm sm:text-base'>
            Ready to watch? Enter your details to create your account.
          </p>

          <form onSubmit={handleSubmit} className='flex flex-col w-full gap-3 mt-2'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='rounded-2xl border-2 text-center py-2 px-6 w-full focus:outline-none focus:ring-2 focus:ring-white placeholder-red-400'
            />

            <input
              type="email"
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='rounded-2xl border-2 text-center py-2 px-6 w-full focus:outline-none focus:ring-2 focus:ring-white placeholder-red-400'
            />

            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='rounded-2xl border-2 text-center py-2 px-6 w-full focus:outline-none focus:ring-2 focus:ring-white placeholder-red-400'
            />

            {error && <p className='text-red-500 text-sm'>{error}</p>}

            <button type='submit' 
            disabled={loading}
            className='w-full bg-red-600 rounded-md py-2 px-4 hover:bg-red-800 cursor-pointer active:scale-[0.98]'>
             {loading ? 'creating Account ....': 'Get Started'}
            </button>
          </form>
        </ul>
      </section>
    </>
  )
}

export default SignUp