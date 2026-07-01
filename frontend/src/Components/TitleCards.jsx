

import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'


const TitleCards = ({ title = "Popular on Netflix", category,type='movie', onCardClick }) => {
  const [apiData, setApiData] = useState([])
  const cardRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      
    }
  }
  console.log("TMDB Token:", import.meta.env.VITE_TMDB_TOKEN);
useEffect(() => {

    fetch(`https://api.themoviedb.org/3/${type}/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results) {
          setApiData(res.results)
        } else {
          console.error("TMDB error response:", res)
          setApiData([])
        }
      })
      .catch(err => {
        console.error(err)
        setApiData([])
      })
  }, [category, type])

  const handleWheel = (e) => {
    cardRef.current.scrollLeft += e.deltaY
  }

  return (
    <div className='min-w-full pl-4 md:px-1 text-white'>
      <h2 className='mb-2 mt-2 text-xl md:text-2xl font-bold tracking-wide transition duration-300 hover:text-red-600 cursor-pointer inline-block'>
        {title}
      </h2>
      <div
        className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth"
        ref={cardRef}
        onWheelCapture={handleWheel}
      >
        {apiData.map((card) => (
          <div
            key={card.id}
            onClick={() => {
              onCardClick && onCardClick(card)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="relative shrink-0 w-50 md:w-48 overflow-hidden rounded-xl cursor-pointer group"
          >
           { console.log("card clicked:", card)}
            {card.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-400">
                No Image
              </div>
            )}
            <p className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/30 px-2 rounded">
              {card.original_title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards