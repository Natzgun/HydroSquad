import Cyclewater from "./Cyclewater"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import InteractivePoint from "../InteractivePoints/InteractivePoint"

const CycleWaterCanvas = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <group position={[0, -1.5, 0]}>
            <Cyclewater />
            <InteractivePoint position={[1, 2, 1]} to="/" />
            <InteractivePoint position={[2, 2, 2]} to="/evaporation" />
          </group>
        </Suspense>
      </Canvas>
    </div>

  )
}

export default CycleWaterCanvas  
