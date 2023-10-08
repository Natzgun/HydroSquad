
import React from 'react'

function Slide3({data}) {
  return (
    
    
    <div className='h-screen p-16 grid grid-cols-2 grid-rows-4 gap-6'>
    <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>1</div>
    <div className='row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>{data.titulo}</div>
    <div className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>{data.contenido1}</div>
    <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
      <img src={data.imagen} alt="" />
    </div>
    <div className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>{data.contenido2}</div>
    <div className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>{data.contenido3}</div>
    </div>
  )
}

export default Slide3
