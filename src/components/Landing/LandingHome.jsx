import { NavLink } from 'react-router-dom';
import MeduseMotion from './MeduseMotion';
import Medusa from "../../assets/images/medusas/1.png"
const LandingHome = () => {
  return (
    <div className='absolute w-full h-full inset-x-0 top-0 flex flex-col items-center p-[20%] z-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white text-[80px] font-extrabold text-center'>
          Todo comienza con Agua
        </h1>
        <NavLink to='/cycle-water'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-8'>
            Comenzar
          </button>
        </NavLink>
        {/* <MeduseMotion /> */}
      </div>
    </div>
  );
};

export default LandingHome;
