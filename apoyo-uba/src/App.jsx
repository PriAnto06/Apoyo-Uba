import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Apoyo from "./uba/apoyo";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Matematica from "./uba/Matematica";
import QuienesSomos from "./uba/QuienesSomos";
import Ingles from "./uba/Ingles";
import Quimica from "./uba/Quimica";
import ApoyoMaterias from "./uba/Apoyo Materias";
import ProgramacionWeb from "./uba/Programacion Web ";
import AGBD from "./uba/AGBD";
import AED from "./uba/AED";
import TAP from "./uba/TAP";
import DisenoSoftware from "./uba/DiseñoSoftware";
import { Grilla } from "./components/Grilla";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Apoyo />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        {/* Página de Matemática */}
        <Route path="/materia/matemática" element={<Matematica />} />
        <Route path="/apuntes/matemática" element={<Matematica />} />
        {/* Pagina de ingles*/}
       <Route path="/materia/inglés" element={<Ingles />} />
       <Route path="/apuntes/inglés" element={<Ingles />} />

        {/* Pagina de quimica*/}
       <Route path="/materia/química" element={<Quimica />} />
       <Route path="/apuntes/química" element={<Quimica />} />

        {/* Pagina de apoyo materia*/}
       <Route path="/materia/Apoyo Materias" element={<ApoyoMaterias />} />
       <Route path="/apuntes/Apoyo Materias" element={<ApoyoMaterias />} />

         {/* Pagina de programacion web*/}
       <Route path="/materia/Programación Web" element={<ProgramacionWeb />} />
       <Route path="/apuntes/Programación Web" element={<ProgramacionWeb />} />

       {/* Pagina de AGBD*/}
       <Route path="/materia/AGBD" element={<AGBD />} />
       <Route path="/apuntes/AGBD" element={<AGBD />} />
      
        {/* Pagina de AED*/}
       <Route path="/materia/AED" element={<AED />} />
       <Route path="/apuntes/AED" element={<AED />} />

          {/* Pagina de TAP*/}
       <Route path="/materia/TAP" element={<TAP />} />
       <Route path="/apuntes/TAP" element={<TAP />} />

        {/* Pagina de DiseñoSoftware */}
       <Route path="/materia/DiseñoSoftware" element={< DisenoSoftware/>} />
       <Route path="/apuntes/DiseñoSoftware" element={<DisenoSoftware />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
