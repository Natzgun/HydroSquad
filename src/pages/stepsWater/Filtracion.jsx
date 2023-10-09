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

const Filtracion = () => {

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const informacion1 = {
    contenido2: 'El cuarto paso de este ciclo es el ALMACENAMIENTO o INFILTRACION',
    contenido3: 'Esto ocurre cuando luego de la PRECIPITACION el agua fluye por la superficie de la Tierra formando arroyos y ríos',
    titulo: 'INFILTRACIÒN',
    imagen: Medusa1
  }
  const informacion2 = {
    contenido1: 'Parte de ella se infiltra en el suelo y se almacena en acuíferos. ',
    contenido2: '',
    contenido3: 'La infiltración es crucial para la recarga de los suministros de agua subterránea utilizados para el abastecimiento de agua potable.',
    titulo: 'INFILTRACIÒN',
    imagen: Medusa2 
  }
  const informacion3 = {
    contenido1: '¿Sabias que algunas aguas subterráneas pueden tardar miles de años en llegar a la superficie? ',
    contenido2: 'De estos acuíferos hay muchos en el Perú ',
    contenido3: 'los cuales suministran agua a las ciudades y comunidades de nuestro país.',
    titulo: 'INFILTRACIÒN',
    imagen: Medusa4 
  }
  const informacion4 = {
    contenido1: 'Por ejemplo el acuífero de la cuenca del río Rímac, el cual abastece a la ciudad de Lima y su área metropolitana',
    contenido2: 'este es esencial para el suministro de agua potable y para el riego agrícola en la región. ',
    contenido3: '',
    titulo: 'INFILTRACIÒN',
    imagen: Medusa5 
  }
  const informacion5 = {
    contenido1: '',
    contenido2: 'En muchas partes de nuestro país hay acuíferos gracias a ellos nuestras ciudades y comunidades pueden abastecerse de agua.',
    contenido3: '',
    titulo: 'INFILTRACIÒN',
    imagen: Medusa6 
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
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[0]})` }}>
            <Slide4 data={informacion4} />
          </div>
        </div>
        <div className="each-slide-effect ">
          <div className='h-screen ' style={{ 'backgroundImage': `url(${images[1]})` }}>
            <Slide5 data={informacion5} />
          </div>
        </div>

      </Zoom>
    </div>
  )
}

export default Filtracion
