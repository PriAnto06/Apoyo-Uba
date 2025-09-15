import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Apoyo() {
  const [abiertoPrincipal, setAbiertoPrincipal] = useState(false);
  const [abiertoMaterias, setAbiertoMaterias] = useState(false);
  const [abiertoApuntes, setAbiertoApuntes] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const datos = [
    "Matemática",
    "Inglés",
    "Lengua",
    "Química",
    "Apoyo Taller",
    "Programación Web",
    "AGBD",
    "AED",
    "TAP",
    "Diseño de Software",
  ];

  return (
    <>
      <div className="nose">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_de_la_Universidad_de_Buenos_Aires.jpg/960px-Logo_de_la_Universidad_de_Buenos_Aires.jpg"
          alt="UBA"
          className="logo"
        />

        <input
          type="text"
          placeholder="Matemática..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="botones-menu">
          {/* Botón Página principal */}
          <div className="dropdown">
            <button
              onClick={() => setAbiertoPrincipal(!abiertoPrincipal)}
              className="dropbtn"
            >
              Página principal ▼
            </button>
            {abiertoPrincipal && (
              <div className="dropdown-content">
                <Link to="/quienes-somos">Quiénes somos</Link>
              </div>
            )}
          </div>

          {/* Botón Materias */}
          <div className="dropdown">
            <button
              onClick={() => setAbiertoMaterias(!abiertoMaterias)}
              className="dropbtn"
            >
              Materias ▼
            </button>
            {abiertoMaterias && (
              <div className="dropdown-content">
                {datos.map((materia, i) => (
                  <Link key={i} to={`/materia/${materia.toLowerCase()}`}>
                    {materia}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Botón Apuntes */}
          <div className="dropdown">
            <button
              onClick={() => setAbiertoApuntes(!abiertoApuntes)}
              className="dropbtn"
            >
              Apuntes ▼
            </button>
            {abiertoApuntes && (
              <div className="dropdown-content">
                {datos.map((materia, i) => (
                  <Link key={i} to={`/apuntes/${materia.toLowerCase()}`}>
                    {materia}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <h4>
        Encuentra los materiales y herramientas de la mano de otros estudiantes
      </h4>
      <h4>para mejorar tus habilidades de estudio.</h4>
    </>
  );
}
