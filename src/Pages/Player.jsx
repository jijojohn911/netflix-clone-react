import React, { useEffect, useState } from 'react'
import arrow from '../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'


const Player = () => {
    const { id } = useParams()

  const [apiData, setApiData] = useState({
    title: "",
    release_date: ""
  })

  const [videoKey, setVideoKey] = useState("")

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjQ4MzIwZTQzMWMyMGZlZDc2OWMzNTYzZGUxN2UzNSIsIm5iZiI6MTc4MTgwNjQzNy4yNjQsInN1YiI6IjZhMzQzNTY1ZmU3NTY5NjhiMzI3M2JmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QPykZakzPNHCmYQs99pxYCoVDnzzQCoRkqwD__OQDg'
    }
  };

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData({ title: res.title, release_date: res.release_date }))
      .catch(err => console.error(err));

    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        const trailer = res.results.find(vid => vid.site === 'YouTube' && vid.type === 'Trailer')
        const finalVideo = trailer || res.results[0];

        if (finalVideo) {
          setVideoKey(finalVideo.key); 
        }
      })
      .catch(err => console.error(err));
  }, [id])
  return (
    <div className=' relative w-screen h-screen flex flex-col justify-center text-white'>

      <img src={arrow} alt="" className=' absolute top-4 left-2  bg-black rounded-full w-10 cursor-pointer' />
      <iframe width={'100%'} height={'100%'} src={`https://www.youtube.com/embed/${videoKey}`}
        frameborder="0" title='trailer' allowFullScreen ></iframe>
      <div className='relative flex justify-around font-semibold'>
        <p className=' absolute bottom-1 left-1 '>Published date: {apiData.release_date}</p>
        <p className='absolute bottom-1 left-60'>{apiData.title}</p>
      
      </div>
    </div>
  )
}

export default Player