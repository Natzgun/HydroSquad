import { NavLink } from "react-router-dom"
import { BsFillCloudSunFill, BsFillDropletFill } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const NavbarMain = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  }

  return (
    <nav className=" backdrop-blur-sm flex w-full justify-between items-center h-14 px-4 absolute z-20 text-white bg-black/30">
      <div>
        <NavLink to="/">
          <h1 className="font-bold text-xl p-3">HydroSquad</h1>
        </NavLink>
      </div>
      <ul className="hidden md:flex justify-center items-center gap-10">
        <li className="hover:text-blue-400 hover:underline duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:underline duration-200">
          <NavLink to="/cycle-water">Ciclo</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:underline duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:underline duration-200">
          <NavLink to="/cycle-water">Ciclo</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:underline duration-200">
          <NavLink to="/acerca-de-hydrosquad">Acerca de</NavLink>
        </li>
      </ul>
      <div className="hidden md:flex gap-10">
        <NavLink to="cycle-water">
          <BsFillCloudSunFill className="hover:text-blue-400 duration-200 cursor-pointer" size={20} />

        </NavLink>
        <NavLink to="good-ending">
          <BsFillDropletFill className="hover:text-blue-400 duration-200 cursor-pointer" size={20} />

        </NavLink>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        {nav ? (<AiOutlineClose color="white" size={25} />) : (<AiOutlineMenu size={25} />)
        }
      </div>
      {/* Menu dropdown */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "duration-500 absolute left-[-100%]"
        }
      >
        <ul>
          <h1 className="text-2xl font-bold mb-5">MidoTravel</h1>
          <li className="mb-6 hover:text-blue-400 hover:underline duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-6 hover:text-blue-400 hover:underline duration-200">
            <NavLink to="/cycle-water">Ciclo</NavLink>
          </li>
          <li className="mb-6 hover:text-blue-400 hover:underline duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-6 hover:text-blue-400 hover:underline duration-200">
            <NavLink to="/cycle-water">Ciclo</NavLink>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center gap-5">
          <BsFillDropletFill
            className="hover:text-blue-400 duration-200 cursor-pointer text-black"
            size={20}
          />
          <BsFillCloudSunFill
            className="hover:text-blue-400 duration-200 cursor-pointer text-black"
            size={20}
          />
        </div>
      </div>

    </nav>
  )
}

export default NavbarMain
