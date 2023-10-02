import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Earth from "./Earth"

const EarthCanvas = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default EarthCanvas  
