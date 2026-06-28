import React from 'react'
import TitleCards from '../Components/TitleCards'
import Navbar from '../Components/Navbar'


const NewAndPopular = () => {
  return (

    <div className='pt-24 pb-10 bg-black h-screen'>
        <Navbar/>
        <TitleCards title='New Movies' category='now_playing' type='movie'/>
        <TitleCards title="New TV Shows" category="on_the_air" type="tv" />
        <TitleCards title='Top Rated Movies' category='top_rated' type='movie'/>
        </div>
  )
}

export default NewAndPopular