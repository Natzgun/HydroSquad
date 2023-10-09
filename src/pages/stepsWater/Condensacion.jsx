import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide5 from '../slides/Slide5';
import Slide4 from '../slides/Slide4';
import Slide3 from '../slides/Slide3';


import Medusa1 from "../../assets/images/medusas/1.png"
import Medusa2 from "../../assets/images/medusas/2.png"
import Medusa3 from "../../assets/images/medusas/3.png"
import Medusa4 from "../../assets/images/medusas/4.png"
import Medusa5 from "../../assets/images/medusas/5.png"
import Medusa6 from "../../assets/images/medusas/5.png"

const Condensacion = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const informacion1 = {
    contenido2: 'El segundo paso de este ciclo es la CONDENSACION. ',
    contenido3: 'Puede que este nombre no te suene mucho, pero de seguro has visto muchas veces como ocurre este proceso. ',
    contenido4: 'Imagen',
    titulo: 'CONDENSACIÓN',
    imagen: Medusa1 
  }
  const informacion2 = {
    contenido1: '¿Alguna vez cuando viajabas en un automovil o bus a casa y llovia se formaban gotitas de agua en la ventana a pesar que estaba cerrada ?',
    contenido2: '',
    contenido3: 'Estas gotitas son un ejemplo claro de condensación. ',

    titulo: 'CONDENSACIÓN',
    imagen: Medusa6
  }
  const informacion3 = {
    contenido1: 'El vehiculo posee en su interior aire caliente y humedo',
    contenido2: 'Dicho aire se enfria, porque pierde el calor por la ventana fria',
    contenido3: 'Luego se convierte en gotitas de agua visibles en la ventana',
    titulo: 'CONDENSACIÓN',
    imagen: Medusa3 
  }
  const informacion4 = {
    contenido1: 'Al igual que sucede en los automóviles o buses, el vapor de agua sube hasta el cielo ',
    contenido2: 'Se enfría en las capas altas de la atmósfera, convirtiéndose en gotas de agua',
    titulo: 'CONDENSACIÓN',
    imagen: Medusa2 
  }
  const informacion5 = {
    contenido1: 'A todo ese proceso se le llama CONDENSACIÓN',
    contenido2: ' Un dato curioso de esto es que las nubes pueden contener millones de gotas de agua, pero son tan pequeñas que pueden flotar en el aire.',
    titulo: 'CONDENSACIÓN',
    imagen: Medusa5 
  }

  return (

    <div>
      <Zoom autoplay={false} scale={1}>
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[0]})` }}>
            <Slide1 data={informacion1} />
          </div>
        </div>
        <div className="each-slide-effect ">
          <div className='h-screen ' style={{ 'backgroundImage': `url(${images[1]})` }}>
            <Slide2 data={informacion2} />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[0]})` }}>
            <Slide3 data={informacion3} />
          </div>
        </div>
        <div className="each-slide-effect ">
          <div className='h-screen ' style={{ 'backgroundImage': `url(${images[1]})` }}>
            <Slide4 data={informacion4} />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[2]})` }}>
            <Slide5 data={informacion5} />
          </div>
        </div>
      </Zoom>
    </div>
  )
}

export default Condensacion
