
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


function Slide4({ data }) {

  return (

    <div className='h-screen p-16 grid grid-cols-3 grid-rows-2 gap-6 break-words'>
      <div className='row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        3d
      </div>
      <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        <img src={data.imagen} alt="" />
      </div>
      <div className='row-span-1 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>{data.titulo}</div>
      <div className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>{data.contenido1}</div>
      <div className='row-span-1 bg-blue-500 text-white text-center text-3xl py-4 rounded-lg'>{data.contenido2}</div>

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
