import { NavLink } from "react-router-dom"

const LandingHome = () => {
  return (
    <div className="absolute w-full h-full inset-x-0 top-0 flex flex-col items-center p-[20%] z-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-[80px] font-bold text-center">
          Todo comienza con Agua
        </h1>
        <span className="text-white">Auspiciado por ZhongBet</span>
        <NavLink to="/cycle-water">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-8">
            Comenzar
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default LandingHome
