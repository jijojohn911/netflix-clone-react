import React from 'react'
import TitleCards from '../Components/TitleCards'
import Navbar from '../Components/Navbar'

const TvShow = () => {
  return (
    <div className='pt-24 pb-10 bg-black h-screen'>
        <Navbar/>
        <TitleCards title='Popular Movies' category='popular' type='movie'/>
        <TitleCards title='Top Rated' category='top_rated' type='movie'/>
        <TitleCards title='Now playing' category='now_playing' type='movie'/>
        <TitleCards title='upcoming' category='upcoming' type='movie'/>
    </div>
  )
}

export default TvShow