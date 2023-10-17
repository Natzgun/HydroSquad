import { motion } from "framer-motion"
import React from 'react'

function Slide3({ data }) {
  return (


    <div className='sm:h-screen p-16 sm:grid grid-cols-2 grid-rows-4 gap-6'>
      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 text-white text-center text-5xl py-4 rounded-lg'>
        1
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-60 bg-blue-400 row-span-1 text-white text-center text-5xl py-4 rounded-lg'>
        <h1 className="font-extrabold font-voces">

          {data.titulo}
        </h1>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-70 bg-[#189977]  text-white text-center text-3xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl font-hindi">
            {data.contenido1}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 text-white text-center text-5xl py-4 rounded-lg'>

        <div className="flex items-center justify-center h-full">
          <img src={data.imagen} className="w-[50%]" alt="" />
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-60 bg-blue-400  row-span-1 text-white text-center text-3xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl font-hindi">
            {data.contenido2}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-70 bg-[#189977]  text-white text-center text-3xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl font-hindi">
            {data.contenido3}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide3
