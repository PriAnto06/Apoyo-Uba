import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Apoyo from "./uba/apoyo";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Matematica from "./uba/Matematica";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Apoyo />} />

        {/* Página de Matemática */}
        <Route path="/materia/matemática" element={<Matematica />} />
        <Route path="/apuntes/matemática" element={<Matematica />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
