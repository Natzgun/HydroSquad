import { Canvas } from "@react-three/fiber"
import { Suspense, lazy, useMemo, useState, useEffect } from "react"
import Preloader from "../Preloader";
import { useLoading } from "../../context/GlobalContext";
import Earth from "./Earth"
import LandingHome from "../Landing/LandingHome";

// const Earth = lazy(() => import("./Earth"));

const EarthCanvas = () => {
  // const { loading, startLoading, stopLoading } = useLoading();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);


  const cachedEarth = useMemo(() => <Earth />, []);

  return (
    <div className="h-screen w-full">
      <LandingHome />
      {loading ? <Preloader /> : <Canvas>{cachedEarth}</Canvas>}

      {/* <Canvas> */}
      {/*   {cachedEarth} */}
      {/* </Canvas> */}
    </div>
  )
}

export default EarthCanvas  
