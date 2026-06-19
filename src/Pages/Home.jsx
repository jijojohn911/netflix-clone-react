import React from 'react'
import Navbar from '../Components/Navbar'
import TitleCards from '../Components/TitleCards'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-black text-white'>
    
      <Navbar/>
      <div>
        
        <div className="relative w-full">
          <img src={hero_banner} alt="hero_banner" 
          className="w-full h-[80vh] md:h-screen object-cover"/>
          
        
          <div className="absolute inset-0 bg-gradient-to-r
           from-black via-black/40 to-transparent"></div>
        </div>

       <div className="absolute top-1/4  z-10 max-w-xl pr-6">
          <img src={hero_title} alt="Hero_title" className="mb-4 ml-10 max-w-xs md:max-w-md" />
          <p className="text-sm md:text-lg text-gray-300 drop-shadow-md ml-10">
            Discovering his ties to a secret ancient order, a young man
            living in modern Istanbul embarks on a quest to save the city from
            an immortal enemy.
          </p>


          <div className='p-10 flex sm:flex-row gap-10'>
          <button className='bg-white text-black flex w-18 h-10 items-center rounded  hover:bg-gray-200  pl-1 '>
            <img src={play_icon} alt="play_icon"  className='w-7 h-7'/>
            Play</button>
          <button className='bg-[#6d6d6eb3] text-white flex w-30 h-10 items-center rounded  hover:bg-[#676770b3]'>
            <img src={info_icon} alt="info_icon" 
             className='w-10 h-10'/>
            More Info</button>
         </div>

         
         
        </div>
          <TitleCards/>
          
      </div>
      <div>
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"}  category={"upcoming"}/>
        <TitleCards title={"Top Pics For You"} now_playing/>
      </div>
        <Footer/>
    </div>
  )
}

export default Home