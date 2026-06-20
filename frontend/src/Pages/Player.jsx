import React, { useEffect, useState } from 'react'
import arrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams();

  const navigate =useNavigate();

  const [apiData, setApiData] = useState({
    title: "",
    release_date: ""
  })

  const [videoKey, setVideoKey] = useState("")

  const [noVideo, setNoVideo] = useState(false) 

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
        // SAFEGUARD: Check if the movie actually has videos
        if (res.results && res.results.length > 0) {
          const trailer = res.results.find(vid => vid.site === 'YouTube' && vid.type === 'Trailer')
          const finalVideo = trailer || res.results[0];

          if (finalVideo) {
            setVideoKey(finalVideo.key); 
          }
        } else {
          
          setNoVideo(true);
        }
      })
      .catch(err => console.error(err));
     
  }, [id])
  

  return (
    <div className='relative w-screen h-screen flex flex-col justify-center text-white bg-black'>
      <img src={arrow} alt="" className='absolute top-4 left-2 bg-black rounded-full w-8 hover:bg-gray-600 cursor-pointer z-10' onClick={()=>navigate("/")}/>
      
    
      {videoKey ? (
        <iframe 
          width={'100%'} 
          height={'100%'} 
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0" 
          title='trailer' 
          allowFullScreen >
        </iframe>
      ) : noVideo ? (
        <div className="flex items-center justify-center h-full text-2xl">No Trailer Available</div>
      ) : (
        <div className="flex items-center justify-center h-full text-2xl">Loading Trailer...</div>
      )}

      <div className='relative flex justify-around font-semibold p-4'>
        <p className='absolute left-0 bottom-2 text-gray-600'>Published date: {apiData.release_date}</p>
        <p className='absolute left-0 bottom-8 text-gray-600'>Title: {apiData.title}</p>
      </div>
    </div>
  )
}

export default Player