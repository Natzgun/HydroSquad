import { motion } from "framer-motion"
import { Pre1 } from "../../assets/textures/Pre1"

import { Canvas } from '@react-three/fiber';
import Camera from './Camera';
import Lights from './Lights';
import { OrbitControls } from '@react-three/drei';
function Slide5({ data }) {
  return (
    <div class="sm:h-screen p-16 sm:grid grid-cols-3 gap-4 break-words">
      <motion.div whileHover={{ scale: 1.1 }} class=" text-white text-center text-5xl py-4 rounded-lg">
        <div className="flex items-center justify-center h-full">
          <img src={data.imagen} className="w-[60%]" alt="" />
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-50 col-span-1 bg-green-300 text-white text-center text-5xl py-4 rounded-lg">
        <Canvas style={{ display: 'block', width: '400px', height: '400px' }}  >
          <Lights />
          <Camera />
          <OrbitControls target={[0, 1, 0]} />
          <Pre1 />

        </Canvas>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-50 col-span-1 bg-red-300 text-white text-center text-3xl py-4 rounded-lg ">
        <h1 className="font-extrabold">{data.titulo}</h1>
        <div className="flex flex-col items-center justify-around h-full px-6">
          <p className="font-semibold font-hindi text-2xl">
            {data.contenido1}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} class="bg-opacity-50 col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl font-hindi">
            {data.contenido2}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Slide5;
