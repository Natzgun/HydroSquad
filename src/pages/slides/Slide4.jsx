import { motion } from "framer-motion"
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Camera from './Camera';
import Lights from './Lights';
import { Pre2 } from "../../assets/textures/Pre2"
function Slide4({ data }) {

  return (

    <div className='sm:h-screen p-16 sm:grid grid-cols-3 grid-rows-2 gap-6 break-words'>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-20 row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        <Canvas style={{ display: 'block', width: '400px', height: '400px' }}  >
          <Lights />
          <Camera />
          <OrbitControls target={[0, 1, 0]} />
          <Pre2 />

        </Canvas>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className=' row-span-2 text-white text-center text-5xl py-4 rounded-lg'>
        <img src={data.imagen} alt="" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-20 row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <h1 className="font-extrabold font-voces">

            {data.titulo}
          </h1>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-30 row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl font-hindi">
            {data.contenido1}
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className='bg-opacity-20 row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido2}
          </p>
        </div>
      </motion.div>

    </div>

  )
}

export default Slide4
{/* <div class="grid grid-cols-2 gap-4">
        <div className='grid grid-rows-4 gap-4'>
            <div class="row-span-2 bg-blue-300 p-4">Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ?Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ?Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? </div>
            <div class="row-span-2 bg-green-300 p-4">Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? </div>

        </div>
        <div className='grid grid-rows-2 gap-4'>
            <div class="row-span-1 bg-red-300 p-4">asas</div>
            <div class="row-span-1 bg-red-300 p-4">Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ?</div>
            <div class="row-span-1 bg-red-300 p-4">Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ?</div>
            <div class="row-span-1 bg-yellow-300 p-4">Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? 
            Hola! Soy …… Bienvenido a ……… hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante ? </div>
            
        </div> 
    </div>*/}
