import React, { useEffect, useRef, useState } from 'react'
import cards_data from '../assets/cards/Cards_data'

const TitleCards = ({title="Popular on Netflix",category}) => {

  const [apiData,setApiData]=useState([])

 const cardRef = useRef();
 
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjQ4MzIwZTQzMWMyMGZlZDc2OWMzNTYzZGUxN2UzNSIsIm5iZiI6MTc4MTgwNjQzNy4yNjQsInN1YiI6IjZhMzQzNTY1ZmU3NTY5NjhiMzI3M2JmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QPykZakzPNHCmYQs99pxYCoVDnzzQCoRkqwD__OQDg'
  }
};


  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  },[])

  const handleWheel = (e) => {
   
    cardRef.current.scrollLeft += e.deltaY;
  };
  return (
    <div 
    className='min-w-full pl-4 md:px-1 text-white'
    >
        <h2
         className='mb-2 mt-2 text-xl md:text-2xl font-bold tracking-wide transition duration-300 hover:text-red-600 cursor-pointer inline-block '>{title}
         </h2>
       <div 
       className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth"
       ref={cardRef}
        onWheelCapture={handleWheel}
       >

  {apiData.map((card) => {
    return (
      <div
        key={card.original_title}
        className="relative flex-shrink-0 w-50 md:w-48 overflow-hidden rounded-xl cursor-pointer group"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
          alt="cards"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
        />

        <p className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/30 px-2 rounded">
          {card.original_title}
        </p>
      </div>
    )
  })}
</div>
    </div>
  )
}

export default TitleCards
