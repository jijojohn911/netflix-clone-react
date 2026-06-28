import React, { useEffect, useState } from 'react'
import arrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
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
    <div className='relative w-screen h-screen flex flex-col text-white bg-black'>

      <img
        src={arrow}
        alt="back"
        className='absolute top-3 left-2 sm:top-4 sm:left-4 bg-black rounded-full w-7 sm:w-8 md:w-10 hover:bg-gray-600 cursor-pointer z-10'
        onClick={() => navigate("/home")}
      />

      <div className='flex-1 w-full'>
        {videoKey ? (
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${videoKey}`}
            frameBorder="0"
            title='trailer'
            allowFullScreen
          ></iframe>
        ) : noVideo ? (
          <div className="flex items-center justify-center h-full text-lg sm:text-xl md:text-2xl px-4 text-center">
            No Trailer Available
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-lg sm:text-xl md:text-2xl px-4 text-center">
            Loading Trailer...
          </div>
        )}
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 font-semibold p-3 sm:p-4'>
        <p className='text-gray-400 text-sm sm:text-base'>Title: {apiData.title}</p>
        <p className='text-gray-400 text-sm sm:text-base'>Published date: {apiData.release_date}</p>
      </div>
    </div>
  )
}

export default Player