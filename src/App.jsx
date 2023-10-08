import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import LoaderPage from "./components/preloader/LoaderPage";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const Cycle = lazy(() => import("./pages/Cycle"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const Evaporacion = lazy(() => import("./pages/stepsWater/Evaporacion"));

import HomePage from "./pages/HomePage";
import Cycle from "./pages/Cycle";
import NotFoundPage from "./pages/NotFoundPage"
import Evaporacion from "./pages/stepsWater/Evaporacion";
import Precipitacion from "./pages/stepsWater/Precipitacion";
import Condensacion from "./pages/stepsWater/Condensacion";
import Filtracion from "./pages/stepsWater/Filtracion";
import Transpiracion from "./pages/stepsWater/Transpiracion";
import GoodEnding from "./pages/stepsWater/GoodEnding";

function App() {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cycle-water" element={<Cycle />} />
        <Route path="/evaporation" element={<Evaporacion />} />
        <Route path="/condensacion" element={<Condensacion />} />
        <Route path="/precipitacion" element={<Precipitacion />} />
        <Route path="/filtracion" element={<Filtracion />} />
        <Route path="/transpiracion" element={<Transpiracion />} />
        <Route path="/good-ending" element={<GoodEnding />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
