import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Apoyo from "./uba/apoyo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 👈 sin BrowserRouter repetido
import Matematica from "./uba/Matematica";
import QuienesSomos from "./uba/QuienesSomos";
import Ingles from "./uba/Ingles";
import Quimica from "./uba/Quimica";
import ApoyoMaterias from "./uba/Apoyo Materias";
import AGBD from "./uba/AGBD";
import AED from "./uba/AED";
import TAP from "./uba/TAP";
import DisenoSoftware from "./uba/DiseñoSoftware";
import { Grilla } from "./components/Grilla";
import ApunteView from "./Pagina/ApuntesView";
import ProgramacionWeb from "./uba/ProgramacionWeb ";
import ApoyoGrid from "./uba/ApoyoGrid";


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

          {/* Página de Inglés */}
          <Route path="/materia/inglés" element={<Ingles />} />
          <Route path="/apuntes/inglés" element={<Ingles />} />

          {/* Página de Química */}
          <Route path="/materia/química" element={<Quimica />} />
          <Route path="/apuntes/química" element={<Quimica />} />

          {/* Página de Apoyo Materias */}
          <Route path="/materia/ApoyoMaterias" element={<ApoyoMaterias />} />
          <Route path="/apuntes/ApoyoMaterias" element={<ApoyoMaterias />} />

          {/* Página de Programación Web */}
          <Route path="/materia/programacionweb" element={<ProgramacionWeb />} />
          <Route path="/apuntes/programacionweb" element={<ProgramacionWeb />} />

          {/* Página de AGBD */}
          <Route path="/materia/AGBD" element={<AGBD />} />
          <Route path="/apuntes/AGBD" element={<AGBD />} />

          {/* Página de AED */}
          <Route path="/materia/AED" element={<AED />} />
          <Route path="/apuntes/AED" element={<AED />} />

          {/* Página de TAP */}
          <Route path="/materia/TAP" element={<TAP />} />
          <Route path="/apuntes/TAP" element={<TAP />} />

          {/* Página de Diseño de Software */}
          <Route path="/materia/DiseñoSoftware" element={<DisenoSoftware />} />
          <Route path="/apuntes/DiseñoSoftware" element={<DisenoSoftware />} />

          {/* ✅ Nueva ruta dinámica para apuntes en Markdown */}
          <Route path="/apuntes/:materia" element={<ApunteView />} />
         <Route path="/uba/grid" element={<ApoyoGrid/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;