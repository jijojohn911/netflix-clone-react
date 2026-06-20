import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_icon from '../assets/profile_img.png'
import drop_down from '../assets/caret_icon.svg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (

        <div className={`fixed top-0 left-0 w-full z-20 flex flex-col md:flex-row md:justify-between items-center px-5 py-2 gap-4 md:gap-0 text-[14px] text-[#e5e5e5] transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
            <div className='flex flex-col sm:flex-row items-center gap-80 w-full md:w-auto justify-between md:justify-start '>
                <img src={logo} alt="Netflix_logo" className='w-30 h-6' />
                <ul className='hidden sm:flex items-center gap-10 text-sm font-medium whitespace-nowrap'>
                    <NavLink to={"/"}>   <li className='cursor-pointer hover:text-red-600'>Home</li></NavLink>
                    <li className='cursor-pointer  hover:text-red-600'>TV Shows</li>
                    <li className='cursor-pointer  hover:text-red-600'>Movies</li>
                    <li className='cursor-pointer  hover:text-red-600'>New & Popular</li>
                    <li className='cursor-pointer hover:text-red-600'>My List</li>
                    <li className='cursor-pointer hover:text-red-600  '>Browser by Languages</li>
                </ul>
            </div>
            <div className='flex items-center gap-10 cursor-pointer'>
                <img src={search_icon} alt="search_icon" className='w-5 h-5 cursor-pointer' />
                <p className='text-sm font-medium cursor-pointer hidden sm:block'>Children</p>
                <img src={bell_icon} alt="bell_icon" className="w-5 h-5 cursor-pointer" />

                <div className='flex items-center gap-2 cursor-pointer '>
                    <img src={profile_icon} alt="profile_icon" className="w-8 h-8 rounded" onClick={() => setIsOpen(!isOpen)} />
                    <img src={drop_down} alt="drop_down" className='w-3' onClick={() => setIsOpen(!isOpen)} />
                    {isOpen && (
                        <div className='absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 top-full mt-2 w-24 bg-white shadow-lg py-2 z-50 rounded border border-gray-100'>
                            <p className='px-3 py-1.5 text-gray-800 text-xs font-medium hover:bg-gray-100 cursor-pointer text-center md:text-left'>
                                Sign Out
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar