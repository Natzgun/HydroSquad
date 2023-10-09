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

const Transpiracion = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const informacion1 = {
    contenido2: 'El quinto paso de este ciclo es la TRANSPIRACIÓN por la cual las plantas absorben agua del suelo a través de sus raíces',
    contenido3: 'la liberan al aire a través de pequeños poros en sus hojas, en un proceso llamado transpiración. ',
    titulo: 'TRANSPIRACIÒN',
    imagen: Medusa1 
  }
  const informacion2 = {
    contenido1: 'Gracias a este proceso, aproximadamente el 10% del agua absorbida por las raíces de las plantas ',
    contenido2: 'se libera a la atmósfera a través de la transpiración.',
    contenido3: 'La combinación de este proceso mas la evaporación de las fuentes de agua se conoce como evapotranspiración.',
    titulo: 'TRANSPIRACIÒN',
    imagen: Medusa4 
  }
  const informacion3 = {
    contenido1: '¡Los arboles son seres vivos maravillosos! ',
    contenido2: 'Un árbol puede liberar hasta 100 galones de agua en un día a través de la transpiración',
    contenido3: 'lo cual hace que el ciclo del agua se repita y comencemos de nuevo con la EVAPORACION',
    titulo: 'TRANSPIRACIÒN',
    imagen: Medusa3
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
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[2]})` }}>
            <Slide3 data={informacion3} />
          </div>
        </div>


      </Zoom>
    </div>
  )
}

export default Transpiracion
