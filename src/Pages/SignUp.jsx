import React, { useState } from 'react'
import Logo from '../assets/background_banner.jpg'

const SignUp = () => {
  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className=' relative w-full h-screen flex items-center justify-center overflow-hidden '>
      <div className='absolute z-10 inset-0 '>
        <img src={Logo} alt="Netflix image" className='w-full h-screen object-cover ' />
        <div className='absolute inset-0 bg-black/50 bg-linear-to-t from-black/90 via-black/20 to-black/90'></div>
      </div>



      <ul className="absolute z-20 text-white text-center flex flex-col items-center gap-3 list-none top-40">
        <li className="text-4xl md:text-6xl font-extrabold tracking-tight mask-b-from-20%">
          Unlimited Movies,
        </li>
        <li className="text-5xl md:text-5xl font-bold text-gray-200 mask-b-from-20%">
          shows, and more.
        </li>

        <li className='md:text-2xl font-bold text-gray-300'>
          start at ₹199. Cancel at any time.
        </li>
        <p className='text-red-300'>Ready to watch? Enter your email to create or restart your membership.</p>

         <form onSubmit={handleSubmit}
         className='flex flex-col sm:flex-row w-full max-w-xl mt-2 justify-around gap-5'>
             <input type="email" 
              placeholder='Enter Your Email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)}}
                required
                className=' rounded-2xl  border-2 text-center py-2 px-8 ml-10 cursor-pointer focus-outline-none focus:ring-2 focus:ring-white placeholder-red-400'
              />

              <button type='submit' className='w-full sm:w-auto bg-red-600 rounded-md py-2 px-4 hover:bg-red-800 cursor-pointer whitespace-nowrap active:scale-[0.98]'>
                Get Started
               
                </button>
         </form>



      </ul>




    </section>


  )
}

export default SignUp
