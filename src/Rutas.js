import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";


export default function Rutas() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Acerca" element={<About />} />
          <Route exact path="/Proyectos" element={<Portfolio />} />
          <Route exact path="/Contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}