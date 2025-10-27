import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grilla } from "../components/Grilla"; // Asumiendo que Grilla existe

// --- Datos Actualizados y Detallados para la Sección "Nuestros Cursos" ---
// Ahora incluye un 'icono' (carácter unicode o texto) y un 'color'
const cursosSimulados = [
  // Puedes cambiar el ícono (icono: '📝', icono: '💻', etc.) y el color
  { nombre: "Matemática", icono: "🧮", color: "#64b5f6", tipo: "(S)" }, // Azul
  { nombre: "Química", icono: "🧪", color: "#81c784", tipo: "(s)" }, // Verde
  { nombre: "Base de Datos", icono: "💾", color: "#4dd0e1", tipo: "(p)" }, // Cyan
  { nombre: "Inglés", icono: "🗣️", color: "#ff8a65", tipo: "(p)" }, // Naranja
  { nombre: "Programación Web", icono: "🌐", color: "#ffb648ff", tipo: "(S)" }, // Ámbar
  { nombre: "AED", icono: "📚", color: "#f8bbd0", tipo: "(s)" }, // Rosa
  { nombre: "Diseño de Software", icono: "📐", color: "#9575cd", tipo: "(P)" }, // Púrpura
  { nombre: "TAP", icono: "🚀", color: "#4db6ac", tipo: "(p)" }, // Teal
  { nombre: "Apoyo Materias", icono: "🔨", color: "#ffab91", tipo: "(s)" }, // Melocotón
];

export default function Apoyo() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // 1. LISTA DE MATERIAS ACTUALIZADA Y UNIFICADA PARA TU BÚSQUEDA
  const datos = [
	"Inglés(p)",
	"Química(s)",
	"Matemática(S)",
	"Base de Datos(p)",
	"AED(s)",
	"Taller ID(s)", // Contiene todo lo que es taller, lo nombro 'Taller ID'
	"TAP(p)",
	"Programación Web(S)",
	"Diseño de Software(P)",
  ];

  // Filtra las materias según la búsqueda
  const datosFiltrados = datos.filter((materia) =>
	materia.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Maneja Enter
  const manejarEnter = (e) => {
	if (e.key === "Enter" && busqueda.trim() !== "") {
  	if (datosFiltrados.length > 0) {
    	// Redirige al primer resultado (sin los sufijos como (p) o (s))
    	const materiaLimpia = datosFiltrados[0].replace(/\([spPcS]+\)$/g, '').trim();
    	navigate(`/materia/${materiaLimpia.toLowerCase()}`);
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
      	{/* Logo y Nombre Apoyo UBA */}
      	<Link to="/">
        	<span style={{ fontSize: "1.5rem", marginRight: "5px" }}>🎓</span>
        	<strong>Apoyo UBA</strong>
      	</Link>
    	</div>

    	<div className="navbar-links">
      	{/* Links de Navegación Fijos */}
      	<Link to="/">Inicio</Link>
      	<Link to="/quienes-somos">Quienes Somos</Link>
      	<Link to="/uba/grid">Materias</Link>

      	{/* Barra de búsqueda integrada, como en el diseño */}
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
    	{/*
      	NOTA: Aquí debe ir la imagen de portada con alumnos estudiando.
      	En CSS (ver la sección de estilos), se debe usar 'background-image'.
    	*/}
    	<div className="hero-content">
      	{/* 2. TÍTULO Y TEXTO EN ESPAÑOL */}
      	<h1 className="hero-title">¡Estudia y Aprueba con la Comunidad!</h1>
      	<p className="hero-subtitle">
        	Encuentra apuntes, guías y el apoyo necesario para triunfar en tus materias.
      	</p>
      	<button className="hero-button">Explorar Cursos</button>
    	</div>
  	</div>
 	 
  	{/* -------------------- SECCIÓN "NUESTROS CURSOS" -------------------- */}
  	<div className="seccion-cursos">
    	<h2>Nuestros Cursos</h2>
   	 
    	{/* Simulación de la grilla de cursos con íconos configurables */}
    	<div className="cursos-grilla">
      	{cursosSimulados.map((curso, index) => (
        	<div key={index} className="curso-card">
          	<div className="curso-icon" style={{ backgroundColor: curso.color }}>
            	{/* 5. Ícono configurable */}
            	{curso.icono}
          	</div>
          	<h3 className="curso-nombre">{curso.nombre} {curso.tipo}</h3>
          	<p className="curso-descripcion">
            	Consulta los históricos aprobados y descarga apuntes actualizados.
          	</p>
          	<div className="curso-footer">
            	<span className="curso-autor">👤 Cát. Luis Torres</span>
            	<span className="curso-likes">❤️ 💬</span>
          	</div>
        	</div>
      	))}
    	</div>
  	</div>

  	{/* -------------------- SECCIÓN EXPLORAR (para la Grilla de Búsqueda) -------------------- */}
  	<div className="seccion-explorora">
    	<h3>Explora</h3>
    	{/* Tu componente Grilla original para mostrar resultados de búsqueda */}
    	<Grilla datos={datosFiltrados} />
  	</div>
 	 
  	{/* -------------------- SECCIÓN RECURSOS DESTEURADAS (Footer Simulado) -------------------- */}
  	<div className="seccion-recursos">
    	<h3>Recursos Destacados</h3>
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
