import { motion } from "framer-motion"
const Slide2 = ({ data }) => {
  return (

    <div className='sm:h-screen p-16 sm:grid grid-cols-3 grid-rows-4 gap-6 break-words'>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-50 row-span-2 bg-blue-400 text-white text-center text-2xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <h1 className="font-bold">{data.titulo}</h1>
          <p className="font-semibold font-hindi text-xl ">
            {data.contenido1}
          </p>
        </div>

      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 text-white text-center text-5xl py-4 rounded-lg'>
        <p>{data.contenido2}</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-60 row-span-4 bg-slate-500 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold font-hindi text-2xl">
            {data.contenido3}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-60 bg-[#3BE5B8]  row-span-2 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold font-hindi text-2xl">
            {data.contenido4}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='row-span-2 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex items-center justify-center h-full">
          <img src={data.imagen} className="w-[60%]" alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default Slide2
