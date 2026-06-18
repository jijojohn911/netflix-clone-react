import React, { useEffect, useRef } from 'react'
import cards_data from '../assets/cards/Cards_data'

const TitleCards = ({title="Popular on Netflix",category}) => {

 const cardRef = useRef();

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

  {cards_data.map((card) => {
    return (
      <div
        key={card.name}
        className="relative flex-shrink-0 w-50 md:w-48 overflow-hidden rounded-xl cursor-pointer group"
      >
        <img
          src={card.image}
          alt="cards"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
        />

        <p className="absolute bottom-2 left-2 text-white font-bold text-sm bg-black/30 px-2 rounded">
          {card.name}
        </p>
      </div>
    )
  })}
</div>
    </div>
  )
}

export default TitleCards
<<<<<<< HEAD






=======
>>>>>>> 0f20879e1950705b4ad9c260b0b715bd4751750c
