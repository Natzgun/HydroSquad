import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import TextJump from "./TextJump";
const LandingHome = () => {

  return (
    <div className="absolute w-full h-full inset-x-0 top-0 flex flex-col items-center p-[15%] z-10">
      <div
        className="flex flex-col items-center justify-center"
      >
        <TextJump/>
        <NavLink to="/cycle-water">
          <motion.button
            whileHover={{ scale: 1.1, color: '#000000', backgroundColor: '#90ee90',fontWeight:700 }}
          
           className="bg-green-700 text-white font-bold py-4 px-8 rounded mt-8">
            Comenzar
          </motion.button>
        </NavLink>
      </div>
    </div>
  )
}

export default LandingHome
