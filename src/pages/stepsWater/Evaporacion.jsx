import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide3 from '../slides/Slide3';

import Medusa1 from "../../assets/images/medusas/1.png"
import Medusa2 from "../../assets/images/medusas/2.png"
import Medusa3 from "../../assets/images/medusas/3.png"
import Medusa4 from "../../assets/images/medusas/4.png"
import Medusa5 from "../../assets/images/medusas/5.png"

const Evaporacion = () => {
  const images = [
    "https://cdn.leonardo.ai/users/6eeee142-b1f7-458d-b8e1-0ef87491f09a/generations/b89009fa-7a59-4f1a-b982-d321b4c80bb0/Leonardo_Diffusion_Cycle_of_water_evaporation_with_oceanic_and_1.jpg",
    // "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://cdn.leonardo.ai/users/6eeee142-b1f7-458d-b8e1-0ef87491f09a/generations/ccbf7ea6-da60-4a11-901f-1bba94978796/Leonardo_Diffusion_Cycle_of_water_evaporation_with_oceanic_and_0.jpg",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://cdn.leonardo.ai/users/6eeee142-b1f7-458d-b8e1-0ef87491f09a/generations/ee9ddb4e-b360-48c2-9466-07771589044a/Leonardo_Diffusion_Cycle_of_water_evaporation_with_oceanic_and_0.jpg",
    "https://cdn.leonardo.ai/users/6eeee142-b1f7-458d-b8e1-0ef87491f09a/generations/ee9ddb4e-b360-48c2-9466-07771589044a/Leonardo_Diffusion_Cycle_of_water_evaporation_with_oceanic_and_1.jpg",
  ];

  const informacion1 = {
    contenido2: 'También entenderás la gran importancia que tiene este ciclo en nuestra vida diaria. Empecemos con el recorrido:D',
    contenido3: 'Hola! Soy Medusian Bienvenido a HYDROSQUAD hoy te explicare todo lo que necesitas saber acerca del ciclo del agua. ¿A que no es un tema divertido e interesante?',
    contenido4: 'MAscota',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa1,
  }
  const informacion2 = {
    contenido1: 'El primer paso del ciclo del agua es la EVAPORACION. ¿Te suena ese nombre?',
    contenido2: '',
    contenido3: 'Cuando pones a calentar el agua en la cocina y esta mientras se calienta empieza a expulsar VAPOR a este proceso le llamamos EVAPORACION.',
    contenido4: 'De seguro lo has visto muchas veces',
    contenido5: 'Mascota',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa2
  }
  const informacion3 = {
    contenido1: 'Nuestro planeta tierra esta conformado por mucha agua',
    contenido2: 'Alcanza casi el 70% porciento de la superficie',
    contenido3: 'Al igual que al calentar el agua en la estufa esta tambien se evapora',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa3 
  }
  const informacion4 = {
    contenido1: 'Esto sucede porque el calor del sol convierte el agua de los océanos, ríos y lagos en vapor.',
    contenido2: '',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa4
  }
  const informacion5 = {
    contenido1: 'De las diferentes fuentes de agua de nuestro planeta',
    contenido2: '¿Sabías que el 86% del agua que cae en la Tierra proviene de los océanos?',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa5 
  }
  return (
    <div>
      <Zoom autoplay={false} scale={1.4}>
        <div className="each-slide-effect">
          <div className='sm:h-screen bg-no-repeat bg-cover bg-center' style={{ 'backgroundImage': `url(${images[0]})` }}>
            <p className='text-5xl p-10 text-white absolute'>1</p>
            <Slide1 data={informacion1} />
          </div>
        </div>

        <div className="each-slide-effect">
          <div className='h-screen bg-cover bg-center' style={{ 'backgroundImage': `url(${images[4]})` }}>
            <Slide2 data={informacion2} />
          </div>
        </div>

        <div className="each-slide-effect">
          <div className='h-screen bg-cover bg-center' style={{ 'backgroundImage': `url(${images[3]})` }}>
            <Slide3 data={informacion3} />
          </div>
        </div>

        <div className="each-slide-effect ">
          <div className='h-screen bg-cover bg-center ' style={{ 'backgroundImage': `url(${images[1]})` }}>
            <Slide4 data={informacion4} />
          </div>
        </div>

        <div className="each-slide-effect">
          <div className='h-screen bg-cover bg-center' style={{ 'backgroundImage': `url(${images[2]})` }}>
            <Slide5 data={informacion5} />
          </div>
        </div>
      </Zoom>
    </div>

  )
}

export default Evaporacion

/* <div className=''>
  <Zoom autoplay={false} scale={1.4}>
    <div className="each-slide-effect">
      <div className='h-screen' style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
      }}>
        <Slide1 data={Slide1Data} />
      </div>
    </div>
    <div className='h-screen' style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
    }}>
      <Slide2 />
    </div>

  </Zoom>
</div> */

