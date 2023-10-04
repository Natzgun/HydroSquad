import Cyclewater from "./Cyclewater"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const CycleWaterCanvas = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Cyclewater />
        </Suspense>
      </Canvas>
    </div>

  )
}

export default CycleWaterCanvas  
