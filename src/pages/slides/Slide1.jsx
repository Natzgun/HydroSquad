import { motion } from "framer-motion"
const Slide1 = ({ data }) => {

  return (
    <div className='sm:h-screen p-16 grid grid-cols-2 grid-rows-4 gap-6'>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-blue-500 text-white text-center text-4xl py-4 rounded-lg'>
        <div className="flex items-center justify-center h-full">
          <h1 className="font-bold">
            1{data.titulo}
          </h1>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 bg-blue-500 text-white text-center text-3xl px-8 py-4 rounded-lg flex justify-center'>
        <div className="flex items-center justify-center h-full">
          <p className="font-bold">
            2{data.contenido2}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='row-span-3 bg-blue-500 text-white text-center text-3xl px-8 py-4 rounded-lg'>
        <div className="flex items-center justify-center h-full">
          <p className="font-bold">
            3{data.contenido3}
          </p>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg '>
        <div className="flex items-center justify-center h-full">
          <p className="font-bold">
            4{data.contenido4}
          </p>
        </div>
      </motion.div>
    </div>

  )
}

export default Slide1
