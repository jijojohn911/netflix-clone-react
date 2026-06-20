import {useState} from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';


const AuthNavbar = () => {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div  className='fixed top-4  z-11 w-full text-white font-medium flex md:justify-between items-center px-5 py-2 gap-4 md:gap-0 text-[14px]  '>
      <div>
        <img src={Logo} alt="Logo"  className='w-40 '/>
      </div>
      <div  className='relative flex gap-8 md:flex '>
        <button className=' bg-gray-500/70 p-2 rounded hover:bg-gray-500/90 transition-colors duration-200 ' onClick={()=>setIsOpen(!isOpen)}>Language</button>
      <NavLink to={'/login'}><button  className='bg-gray-500/70 p-2 px-4 rounded hover:bg-gray-500/90 transition-colors duration-200'>Sign In</button></NavLink>
        {isOpen &&(
        <div className='absolute top-12 left-2 flex flex-col bg-gray-200  text-black p-2 rounded gap-2 ' >
          <button className=' bg-white p-1 hover:bg-gray-400 rounded'>English</button>
          <button  className=' bg-white p-1 hover:bg-gray-400 rounded'>Hindi</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default AuthNavbar
