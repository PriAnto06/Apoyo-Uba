import React, { useState } from "react";

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
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_de_la_Universidad_de_Buenos_Aires.jpg/960px-Logo_de_la_Universidad_de_Buenos_Aires.jpg"
          alt="UBA"
          className="logo"
        />

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Matemática..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {/* Contenedor para los botones */}
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
                <a href="/quienes-somos">¿Quiénes Somos?</a>
                <a href="/contacto">Contacto</a>
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
                  <a key={i} href={`/materia/${materia.toLowerCase()}`}>
                    {materia}
                  </a>
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
                  <a key={i} href={`/apuntes/${materia.toLowerCase()}`}>
                    {materia}
                  </a>
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
