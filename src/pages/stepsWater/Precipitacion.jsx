import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';

const Precipitacion = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const informacion3 = {
    contenido1: 'El tercer paso de este ciclo es la PRECIPITACION. ',
    contenido2: 'Este es el paso mas notorio y conocido, ya que todos lo conocemos como LLUVIA',
    contenido3: '',
    titulo: 'PRECIPITACIÓN',
    imagen: 'https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/11/el-ciclo-del-agua.jpg?fit=1200%2C750&ssl=1'
  }
  const informacion4 = {
    contenido1: 'sucede cuando las gotas de agua en las nubes se vuelven demasiado pesadas',
    contenido2: 'caen a la Tierra como gotas de agua, nieve o granizo',
    contenido3: '',
    titulo: 'PRECIPITACIÓN',
    imagen: 'https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/11/el-ciclo-del-agua.jpg?fit=1200%2C750&ssl=1'
  }
  const informacion5 = {
    contenido1: 'Muchas veces pensamos que el agua de LLUVIA es pura y hasta algunas personas la beben, sin embargo...',
    contenido2: 'Puede contener partículas de polvo, bacterias, parásitos, virus y sustancias químicas que podrían enfermarnos y llegar a ser mortales en casos extremos.',
    titulo: 'PRECIPITACIÓN',
    imagen: 'https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/11/el-ciclo-del-agua.jpg?fit=1200%2C750&ssl=1'
  }

  return (
    <div>
      <Zoom autoplay={false} scale={1.4}>
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[0]})` }}>
            <p className='text-5xl p-10 text-white absolute'>1</p>
            <Slide4 data={informacion3} />
          </div>
        </div>
        <div className="each-slide-effect ">
          <div className='h-screen ' style={{ 'backgroundImage': `url(${images[1]})` }}>
            <Slide3 data={informacion4} />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className='h-screen' style={{ 'backgroundImage': `url(${images[2]})` }}>
            <Slide6 data={informacion5} />
          </div>
        </div>
      </Zoom>
    </div>
  )
}

export default Precipitacion
