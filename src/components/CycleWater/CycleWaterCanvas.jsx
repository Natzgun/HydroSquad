import Cyclewater from "./Cyclewater"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const CycleWaterCanvas = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <group position={[0, -1.5, 0]}>

            <Cyclewater />
          </group>
        </Suspense>
      </Canvas>
    </div>

  )
}

export default CycleWaterCanvas  
