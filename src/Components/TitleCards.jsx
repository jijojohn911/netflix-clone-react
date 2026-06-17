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







// import React, { useRef } from 'react'
// import cards_data from '../assets/cards/Cards_data'

// const TitleCards = () => {
//   const cardsContainerRef = useRef(null);

//   return (
//     /* FORCE FULL SCREEN: 
//       - 'w-screen' makes it exactly the width of the browser window.
//       - 'relative left-1/2 -translate-x-1/2' breaks out of any constrained parent element.
//     */
//     <div className='w-screen relative left-1/2 right-1/2 -translate-x-1/2 text-white bg-transparent my-10 overflow-hidden'>
      
//       {/* Title aligning with the standard Netflix edge padding */}
//       <h2 className='mb-4 text-xl md:text-3xl font-bold tracking-wide px-4 md:px-16'>
//         Popular on Netflix
//       </h2>
      
//       {/* Horizontal Scroll Area */}
//       <div 
//         ref={cardsContainerRef}
//         className='flex gap-4 overflow-x-auto scroll-smooth py-4 px-4 md:px-16 w-full select-none'
//         style={{ 
//           scrollbarWidth: 'none',          /* Firefox */
//           msOverflowStyle: 'none',         /* IE and Edge */
//         }}
//       >
//         {/* Forces webkit browsers (Chrome/Safari) to hide the scrollbar track */}
//         <style>{`
//           div::-webkit-scrollbar {
//             display: none !important;
//           }
//         `}</style>

//         {cards_data.map((card) => {
//           return (
//             <div 
//               key={card.name} 
//               className='min-w-[260px] sm:min-w-[300px] md:min-w-[360px] lg:min-w-[400px] 
//                          cursor-pointer transition-all duration-300 ease-out
//                          hover:scale-105 hover:z-30'
//             > 
//               {/* Large Cinematic Aspect Ratio Card Box */}
//               <div className="overflow-hidden rounded-md shadow-lg aspect-[16/9] bg-zinc-900">
//                 <img 
//                   src={card.image} 
//                   alt={card.name} 
//                   className='w-full h-full object-cover pointer-events-none'
//                 />
//               </div>
              
//               <p className='text-sm font-medium mt-2 text-zinc-400 truncate px-1'>
//                 {card.name}
//               </p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default TitleCards