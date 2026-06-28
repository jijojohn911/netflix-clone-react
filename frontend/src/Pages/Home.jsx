import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import TitleCards from '../Components/TitleCards'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import Footer from '../Components/Footer'

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const navigate = useNavigate()
  const [imgLoaded, setImgLoaded] = useState(true)

  const handlePlay = () => {
    console.log("Play clicked, selectedMovie:", selectedMovie)
    if (selectedMovie) {
      navigate(`/player/${selectedMovie.id}`)
    }
  }

  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-black text-white'>
      <Navbar />

      {/* Hero section: banner + overlay text now share one relative container */}
      <div className="relative w-full">
        <img
        key={selectedMovie?.backdrop_path || 'default'}
          src={
            selectedMovie?.backdrop_path
            
              ? `https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path}`
              : hero_banner
          }
          onLoad={() => setImgLoaded(true)}
          alt="hero_banner"
          className="w-full h-[60vh] sm:h-[70vh] md:h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        <div className="absolute top-1/4 left-4 sm:left-8 md:left-10 z-10 max-w-[85%] sm:max-w-md md:max-w-xl pr-2 sm:pr-6">
          {selectedMovie ? (
            <h1 className="mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide drop-shadow-md">
              {selectedMovie.original_title || selectedMovie.title}
            </h1>
          ) : (
            <img
              src={hero_title}
              alt="Hero_title"
              className="mb-3 sm:mb-4 max-w-45 sm:max-w-xs md:max-w-md"
            />
          )}

          <p className="text-xs sm:text-sm md:text-lg text-gray-300 drop-shadow-md line-clamp-3 sm:line-clamp-none">
            {selectedMovie
              ? selectedMovie.overview
              : `Discovering his ties to a secret ancient order, a young man
            living in modern Istanbul embarks on a quest to save the city from
            an immortal enemy.`}
          </p>

          <div className='pt-4 sm:pt-6 md:pt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-10'>
            <button
              onClick={handlePlay}
              disabled={!selectedMovie}
              className={`flex items-center justify-center gap-1 px-4 h-9 sm:h-10 rounded text-sm sm:text-base
                ${selectedMovie ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/50 text-black/50 cursor-not-allowed'}`}
            >
              <img src={play_icon} alt="play_icon" className='w-5 h-5 sm:w-7 sm:h-7' />
              Play
            </button>
            <button className='bg-[#6d6d6eb3] text-white flex items-center justify-center gap-1 px-4 h-9 sm:h-10 rounded text-sm sm:text-base hover:bg-[#676770b3]'>
              <img src={info_icon} alt="info_icon" className='w-6 h-6 sm:w-10 sm:h-10' />
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col gap-6">
        <TitleCards onCardClick={setSelectedMovie} />
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} onCardClick={setSelectedMovie} />
        <TitleCards title={"Only On Netflix"} category={"popular"} onCardClick={setSelectedMovie} />
        <TitleCards title={"Upcoming"} category={"upcoming"} onCardClick={setSelectedMovie} />
        <TitleCards title={"Top Pics For You"} category={"now_playing"} onCardClick={setSelectedMovie} />
      </div>

      <Footer />
    </div>
  )
}

export default Home