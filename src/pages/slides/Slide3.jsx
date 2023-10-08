import { motion } from "framer-motion"
import React from 'react'

function Slide3({data}) {
  return (
    
    
    <div className='h-screen p-16 grid grid-cols-2 grid-rows-4 gap-6'>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
      1
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
      {data.titulo}
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>
    <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido1}
          </p>
        </div>
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
      <img src={data.imagen} alt="" />
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>
    <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido2}
          </p>
        </div>
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>
    <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido3}
          </p>
        </div>
    </motion.div>
    </div>
  )
}

export default Slide3
