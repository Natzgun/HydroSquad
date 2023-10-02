import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg"
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg"
import EarthClouds from "../../assets/textures/8k_earth_clouds.jpg"
import EarthSpecular from "../../assets/textures/8k_earth_specular_map.jpg"
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg"
import { useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { DoubleSide, TextureLoader } from "three"
import { useRef } from "react"

const Earth = () => {
  const [colorMap, normalMap, cloudsMap, specularMap, nightMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthClouds, EarthSpecular, EarthNightMap]);

  const earthRef = useRef();
  const cloudsRef = useRef();
  useFrame(({ clock }) => {
    const elpTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elpTime / 9;
    cloudsRef.current.rotation.y = (elpTime / 6);
  })

  return <>
    <ambientLight intensity={2.5} />
    {/* <pointLight color="#ffffff" position={[2, 0, 2]} intensity={15} /> */}
    <Stars radius={300} depth={60} />
    <mesh ref={cloudsRef} scale={[2.5, 2.5, 2.5]}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial
        map={cloudsMap}
        opacity={0.4}
        depthWrite={true}
        transparent={true}
        side={DoubleSide}
      />
    </mesh>

    <mesh ref={earthRef} scale={[2.5, 2.5, 2.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial specularMap={specularMap} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
      /* metalness={0.4}
      roughness={0.7} */
      />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </mesh>
  </>
}

export default Earth
