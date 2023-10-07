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

function App() {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cycle-water" element={<Cycle />} />
        <Route path="/evaporation" element={<Evaporacion />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
