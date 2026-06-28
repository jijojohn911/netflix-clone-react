import React from 'react'
import youtube_icons from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
const Footer = () => {
    return (
        <div className='p-30 '>
            <div className='flex gap-5 w-10 cursor-pointer '>
                <img src={facebook_icon} alt="" className='w-8 h-8 transition duration-300 hover:brightness-5 hover:contrast-12'
                />
                <img src={instagram_icon} alt="" className='w-8 h-8 transition duration-300 hover:brightness-5 hover:contrast-12'
                />
                <img src={twitter_icon} alt="" className='w-8 h-8 transition duration-300 hover:brightness-5 hover:contrast-12'
                />
                <img src={youtube_icons} alt="" className='w-8 h-8 transition duration-300 hover:brightness-5 hover:contrast-12'
                />
            </div>
            <ul className='grid grid-cols-4 gap-x-26 gap-y-4 max-w-4xl  pt-9 pl-2 mb-9 text-gray-400 text-sm'>



                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Audio discription
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Help Centre
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Gift Cards
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Media Centre
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Investor Relations
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Jobs
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Terms of Use
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Privacy
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Legal Notices
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Cookie Preferences
                </li>
                <li className='text-gray-400  hover:text-white hover:underline hover:cursor-pointer transition duration-400 '>
                    Contact Us
                </li>
            </ul>
            <p className='text-gray-400'>&copy; 1997-2026 Netflix, Inc.</p>
        </div>
    )
}

export default Footer