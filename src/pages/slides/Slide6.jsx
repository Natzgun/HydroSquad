import { motion } from "framer-motion"

function Slide5({ data }) {
  return (
    <div class="sm:h-screen p-16 sm:grid grid-cols-6 grid-rows-3 gap-4 break-words">
      <motion.div whileHover={{ scale: 1.1 }} class=" row-span-2 col-span-2 text-white text-center text-5xl py-4 rounded-lg">
        <div className="flex items-center justify-center h-full">
          <img src={data.imagen} className="w-[50%]" alt="" />
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-40 row-span-2 col-span-2 bg-green-300 text-white text-center text-5xl py-4 rounded-lg">

      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-40 row-span-2 col-span-2 bg-red-300 text-white text-center text-3xl py-4 rounded-lg ">
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="text-3xl ">{data.titulo}</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-40 row-span-1 col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido1}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-40 row-span-1 col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido2}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Slide5;
