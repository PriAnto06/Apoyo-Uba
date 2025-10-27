import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// NOTA: Se asume que el componente Grilla ya no es necesario para la vista principal.

// --- URLs de Imágenes (LOGO_URL SE MANTIENE INTACTO) ---
const LOGO_URL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057332235578&f=1&nofb=1&ipt=4eadfe1688c4c63254d8c5b204f4abf578f7478bb450378d616e5a70125f1e7bhttps://plus.unsplash.com/premium_photo-1681505555864-f9393f92e695?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870";

// --- Datos para Cursos y Profesores (SE ELIMINÓ TALLER ID) ---
const cursosConProfesores = [
  { nombre: "Matemática", profesor: "Fernando Michalski", icono: "M", color: "#64b5f6" },
  { nombre: "Química", profesor: "Marcela Gleiser", icono: "Q", color: "#81c784" },
  { nombre: "Base de Datos", profesor: "Tomas Mayorga", icono: "BD", color: "#4dd0e1" },
  { nombre: "Inglés", profesor: "Gabriel Beronda", icono: "I", color: "#ff8a65" },
  { nombre: "Programación Web", profesor: "Federico Villace", icono: "PW", color: "#ffb74d" },
  { nombre: "AED", profesor: "Mauricio Uribe", icono: "A", color: "#f8bbd0" },
  { nombre: "Diseño de Software", profesor: "Andres Navarro", icono: "DS", color: "#9575cd" },
  { nombre: "TAP", profesor: "JUlian Impelluso", icono: "T", color: "#4db6ac" },
];

// Nombres de materias limpios para la funcionalidad de búsqueda original
const nombresMateriasLimpios = cursosConProfesores.map(curso => curso.nombre);

// Función de normalización para búsqueda tolerante a errores (quita tildes y convierte a minúsculas)
const normalizarTexto = (texto) => {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quita tildes
    .replace(/\s+/g, ''); // Quita espacios para mayor tolerancia
};

export default function Apoyo() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const datos = nombresMateriasLimpios;

  // 1. Filtro con normalización para tolerancia a tildes/mayúsculas/espacios
  const datosFiltrados = datos.filter((materia) =>
    normalizarTexto(materia).includes(normalizarTexto(busqueda))
  );

  // Maneja Enter para búsqueda tolerante
  const manejarEnter = (e) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      if (datosFiltrados.length > 0) {
        // Navega al primer resultado, limpiando espacios y usando minúsculas para la URL
        const path = datosFiltrados[0].toLowerCase().replace(/\s+/g, '-');
        navigate(`/materia/${path}`);
      } else {
        alert("No se encontró la materia");
      }
    }
  };

  return (
    <div className="apoyo-container">
      {/* -------------------- BARRA DE NAVEGACIÓN (Navbar) -------------------- */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={LOGO_URL} alt="Logo Colegio" className="colegio-logo" />
            <strong>Apoyo UBA</strong>
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/quienes-somos">Quienes Somos</Link>
          <Link to="/materias">Materias</Link> 

          {/* Barra de búsqueda */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={manejarEnter}
              className="search-input"
            />
            <button className="search-button" onClick={() => manejarEnter({key: 'Enter'})}>🔍</button>
          </div>
        </div>
      </nav>

      {/* -------------------- HERO / BANNER PRINCIPAL -------------------- */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">¡Estudia y Aprueba con la Comunidad!</h1>
          <p className="hero-subtitle">
            Encuentra apuntes, guías y el apoyo necesario para triunfar en tus materias.
          </p>
          <button className="hero-button">Explorar Materias</button> 
        </div>
      </div>
      
      {/* -------------------- SECCIÓN EXPLORORA (Grilla Principal) -------------------- */}
      <div className="seccion-explorora">
        <h2 className="titulo-centrado">Materias</h2> 
        
        <div className="cursos-grilla">
          {cursosConProfesores.map((curso, index) => (
            <Link 
              key={index} 
              to={`/materia/${curso.nombre.toLowerCase().replace(/\s+/g, '-')}`} 
              className="curso-card-link"
            >
              <div className="curso-card">
                <div className="curso-icon" style={{ backgroundColor: curso.color }}>
                  {curso.icono}
                </div>
                <h3 className="curso-nombre">{curso.nombre}</h3>
                <p className="curso-profesor">
                  **{curso.profesor}**
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* -------------------- FOOTER SIMPLIFICADO -------------------- */}
      <div className="seccion-recursos">
        <div className="recursos-links">
          <Link to="#">Recursos Desteraides</Link>
          <Link to="#">Comunidad</Link>
          <Link to="#">Acerca de</Link>
          <Link to="#" className="link-derecha">Política de Privacidad / Términos / Contacto</Link>
        </div>
      </div>
    </div>
  );
}