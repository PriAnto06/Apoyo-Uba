// src/App.jsx (CÓDIGO COMPLETO Y CORREGIDO)

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Apoyo from "./uba/apoyo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
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

// --- IMPORTACIONES DE AUTENTICACIÓN Y NAVEGACIÓN ---
import AuthPage from './uba/AuthPage'; 
import Registro from './uba/Registro'; 
import TalleresYActividades from './uba/TalleresYActividades'; 
import CalendarioCompleto from './uba/CalendarioCompleto'; 

// 🔑 IMPORTACIÓN CORREGIDA 1: AuthProvider ahora apunta a './uba/AuthContext'
import { AuthProvider } from './uba/AuthContext'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    // 🔑 AuthProvider ENVUELVE EL ROUTER
    <AuthProvider> 
      <>
        <Router>
          <Routes>
            {/* -------------------- RUTAS DE AUTENTICACIÓN -------------------- */}
            <Route path="/auth" element={<AuthPage />} /> 
            <Route path="/registro" element={<Registro />} /> 
            
            {/* -------------------- PÁGINAS GENERALES -------------------- */}
            <Route path="/" element={<Apoyo />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/uba/grid" element={<ApoyoGrid/>} />
            
            <Route path="/talleres" element={<TalleresYActividades />} />
            <Route path="/calendario-completo" element={<CalendarioCompleto />} /> 

            {/* -------------------- RUTAS DE MATERIAS -------------------- */}
            <Route path="/materia/matemática" element={<Matematica />} />
            <Route path="/apuntes/matemática" element={<Matematica />} />

            <Route path="/materia/inglés" element={<Ingles />} />
            <Route path="/apuntes/inglés" element={<Ingles />} />

            <Route path="/materia/química" element={<Quimica />} />
            <Route path="/apuntes/química" element={<Quimica />} />

            <Route path="/materia/ApoyoMaterias" element={<ApoyoMaterias />} />
            <Route path="/apuntes/ApoyoMaterias" element={<ApoyoMaterias />} />

            <Route path="/materia/programacionweb" element={<ProgramacionWeb />} />
            <Route path="/apuntes/programacionweb" element={<ProgramacionWeb />} />

            <Route path="/materia/AGBD" element={<AGBD />} />
            <Route path="/apuntes/AGBD" element={<AGBD />} />

            <Route path="/materia/AED" element={<AED />} />
            <Route path="/apuntes/AED" element={<AED />} />

            <Route path="/materia/TAP" element={<TAP />} />
            <Route path="/apuntes/TAP" element={<TAP />} />

            <Route path="/materia/DiseñoSoftware" element={<DisenoSoftware />} />
            <Route path="/apuntes/DiseñoSoftware" element={<DisenoSoftware />} />

            {/* Ruta dinámica para apuntes en Markdown */}
            <Route path="/apuntes/:materia" element={<ApunteView />} />

          </Routes>
        </Router>
      </>
    </AuthProvider>
  );
}

export default App;