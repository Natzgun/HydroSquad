import Cyclewater from "./Cyclewater"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { motion } from "framer-motion"
import InteractivePoint from "../InteractivePoints/InteractivePoint"
import { NavLink } from "react-router-dom"

import fondoMarino from "../../assets/images/fondo-marino.jpg"

const CycleWaterCanvas = () => {
  return (
    <div className="h-screen w-full bg-slate-100 bg-cover bg-center" style={{
      backgroundImage: `url(${fondoMarino})`,
    }}>
      <div className="absolute z-10 p-28 top-0  right-0">
        <NavLink to="/evaporation">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: '#3498db', color: '#000000' }}
            whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-8" type="button">
            Iniciar recorrido del agua
          </motion.button>
        </NavLink>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <group position={[0, -1.5, 0]}>
            <Cyclewater />
            <InteractivePoint position={[0, 0.7, 2.4]} to="/evaporation" />
            <InteractivePoint position={[-0.5, 3, -0.9]} to="/condensacion" />
            <InteractivePoint position={[-0.5, 2, 0]} to="/precipitacion" />
            <InteractivePoint position={[0, 1.5, -2]} to="/filtracion" />
            <InteractivePoint position={[0, 1, -0.4]} to="/transpiracion" />
          </group>
        </Suspense>
      </Canvas>
    </div>

  )
}

export default CycleWaterCanvas  
