import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cycle from "./pages/Cycle";
import NotFoundPage from "./pages/NotFoundPage"
import NavbarMain from "./components/navbar/NavbarMain";

function App() {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cycle-water" element={<Cycle />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
