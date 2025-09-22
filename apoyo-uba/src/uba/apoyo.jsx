import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grilla } from "../components/Grilla";

export default function Apoyo() {
  const [abiertoPrincipal, setAbiertoPrincipal] = useState(false);
  const [abiertoMaterias, setAbiertoMaterias] = useState(false);
  const [abiertoApuntes, setAbiertoApuntes] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate(); // Necesario para redirigir

  const datos = [
    "Matemática",
    "Inglés",
    "Química",
    "Apoyo Materias",
    "Programación Web",
    "AGBD",
    "AED",
    "TAP",
    "DiseñoSoftware",
  ];

  // Filtra las materias según la búsqueda
  const datosFiltrados = datos.filter((materia) =>
    materia.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Maneja Enter
  const manejarEnter = (e) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      if (datosFiltrados.length > 0) {
        navigate(`/materia/${datosFiltrados[0].toLowerCase()}`);
      } else {
        alert("No se encontró la materia");
      }
    }
  };

  return (
    <>
      <div className="nose">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_de_la_Universidad_de_Buenos_Aires.jpg/960px-Logo_de_la_Universidad_de_Buenos_Aires.jpg"
          alt="UBA"
          className="logo"
        />

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar materia..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={manejarEnter} // Captura Enter
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
                {datosFiltrados.length > 0 ? (
                  datosFiltrados.map((materia, i) => (
                    <Link key={i} to={`/materia/${materia.toLowerCase()}`}>
                      {materia}
                    </Link>
                  ))
                ) : (
                  <span>No se encontraron materias</span>
                )}
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
                {datosFiltrados.length > 0 ? (
                  datosFiltrados.map((materia, i) => (
                    <Link key={i} to={`/apuntes/${materia.toLowerCase()}`}>
                      {materia}
                    </Link>
                  ))
                ) : (
                  <span>No se encontraron apuntes</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <h4>
        Encuentra los materiales y herramientas de la mano de otros estudiantes
      </h4>
      <h4>para mejorar tus habilidades de estudio.</h4>

      {/* Grilla con resultados filtrados */}
      <Grilla datos={datosFiltrados} />
    </>
  );
}
