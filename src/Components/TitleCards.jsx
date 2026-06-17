import React from 'react'
import cards_data from '../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className=' absolute my-30 min-w-full py-4 md:px-1 text-white bg-red-600 '>
        <h2 className='mb-4 text-xl text-black md:text-2xl font-bold tracking-wide transition duration-300 hover:text-red-600 cursor-pointer inline-block'>Popular on Netflix</h2>
        <div className='flex w-full overflow-scroll  overflow-x-auto '>
            {cards_data.map((card)=>{
                return <div key={card.name}>
                <img src={card.image} alt="" />
                <p className='text-black'>{card.name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCards
