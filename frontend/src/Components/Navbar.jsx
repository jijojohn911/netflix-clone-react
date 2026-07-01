import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_icon from '../assets/profile_img.png'
import drop_down from '../assets/caret_icon.svg'
import menu_icon from '../assets/menu_icon.svg' 
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);      
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const navLinks = [
        { name: 'TV Shows', path: '/tv-shows' },
        { name: 'Movies', path:'/movies' },
        { name: 'New & Popular', path:'/new-and-popular' },
      
    ];

    const handleSignOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div className={`fixed top-0 left-0 w-full z-20 px-5 py-3 text-[14px] text-[#e5e5e5] transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-linear-to-b from-black/70 to-transparent'}`}>
            <div className='flex items-center justify-between w-full'>
                {/* Logo + desktop nav links */}
                <div className='flex items-center gap-8'>
                    <NavLink to='/home'>
                        <img src={logo} alt="Netflix_logo" className='w-24 sm:w-28 h-auto' />
                    </NavLink>
                    <ul className='hidden md:flex items-center gap-6 text-sm font-medium whitespace-nowrap'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-red-600 ${isActive ? 'text-white font-semibold' : ''}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side icons */}
                <div className='flex items-center gap-4 sm:gap-6'>
                    <img src={search_icon} alt="search_icon" className='w-5 h-5 cursor-pointer' />
                    <p className='text-sm font-medium cursor-pointer hidden lg:block'>Children</p>
                    <img src={bell_icon} alt="bell_icon" className="w-5 h-5 cursor-pointer hidden sm:block" />

                    {/* Profile dropdown */}
                    <div className='relative flex items-center gap-2 cursor-pointer'>
                        <img
                            src={profile_icon}
                            alt="profile_icon"
                            className="w-8 h-8 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        <img
                            src={drop_down}
                            alt="drop_down"
                            className={`w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        {isOpen && (
                            <div className='absolute right-0 top-full mt-2 w-28 bg-white shadow-lg py-2 z-50 rounded border border-gray-100'>
                                <p
                                onClick={handleSignOut}
                                className='px-3 py-1.5 text-gray-800 text-xs font-medium hover:bg-gray-100 cursor-pointer text-left'
                                >
                                    Sign Out
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Hamburger - mobile only */}
                    <img
                        src={menu_icon}
                        alt="menu_icon"
                        className='w-6 h-6 cursor-pointer md:hidden'
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </div>

            {/* Mobile nav links dropdown */}
            {menuOpen && (
                <ul className='flex flex-col md:hidden mt-3 gap-3 text-sm font-medium bg-black/90 rounded-md p-4'>
                   {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-red-600 block ${isActive ? 'text-white font-semibold' : ''}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar