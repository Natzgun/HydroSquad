import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Slide4 from '../slides/Slide4';
import Medusa1 from "../../assets/images/medusas/1.png"
const GoodEnding = () => {

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const informacion4 = {
    contenido1: '¡QUE EMOCION! Hemos llegado al final del recorrido de este maravilloso ciclo',
    contenido2: 'Todo lo que vimos es muy importante para la vida de nuestra especie y de las demás criaturas de nuestro planeta ya que gracias al agua los cultivos crecen y hacen posible la vida de todos los seres vivos',
    titulo: 'EVAPORACIÓN',
    imagen: Medusa1
  }
  return (

    <div>
      <div className="each-slide-effect">
        <div className='h-screen' style={{ 'backgroundImage': `url(${images[0]})` }}>
          <Slide4 data={informacion4} />
        </div>
      </div>
    </div>
  )
}

export default GoodEnding
