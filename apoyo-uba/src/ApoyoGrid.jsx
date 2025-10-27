// src/pages/MateriasGridPage.jsx (Contiene Header Top y Grilla Completa)

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// NOTA: Se comenta la importación de Grilla, ya que el JSX está aquí y no queremos
// el error de importación si no creaste el archivo.
// import { Grilla } from "../components/Grilla"; 

// =================================================================
// ESTRUCTURA DE DATOS ACTUALIZADA PARA USAR RUTAS DE IMAGEN
// =================================================================
const cardsData = [
    // Usamos el color de la imagen original
    { title: "Matemática", color: "blue-soft", imageSrc: "./img/math_icon.png", resources: ["Guías PDF", "Video Lecciones", "Ejercicios"] },
    { title: "Inglés", color: "green-light", imageSrc: "./img/english_icon.png", resources: ["Gramática", "Vocabulario", "Test Online"] },
    { title: "Química", color: "teal-dark", imageSrc: "./img/chemistry_icon.png", resources: ["Guías PDF", "Video Lecciones", "Laboratorio"] },
    
    // Usamos el color de la imagen original
    { title: "AED", color: "orange-soft", imageSrc: "./img/aed_icon.png", resources: ["Teoría", "Clases Prácticas"] },
    { title: "TAP", color: "yellow-dark", imageSrc: "./img/tap_icon.png", resources: ["Proyectos", "Recursos", "Exámenes"] },
    { title: "AGBD", color: "purple-soft", imageSrc: "./img/agbd_icon.png", resources: ["Diseño", "SQL", "Ejercicios"] },
    
    // Nuevos colores para las filas inferiores
    { title: "Programación-Web", color: "red-soft", imageSrc: "./img/webdev_icon.png", resources: ["HTML/CSS", "JavaScript", "Frameworks"] },
    { title: "Diseño de Software", color: "cyan-soft", imageSrc: "./img/design_icon.png", resources: ["UML", "Patrones", "Ejercicios"] },
    { title: "Apoyo Materias", color: "gray-medium", imageSrc: "./img/apoyo_icon.png", resources: ["Clases Particulares", "Foro de Dudas"] },
];

export default function MateriasGridPage() { // Renombrado
    const [abiertoPrincipal, setAbiertoPrincipal] = useState(false);
    const [abiertoMaterias, setAbiertoMaterias] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const navigate = useNavigate();

    const datos = [
        "Matemática", "Inglés", "Química", "AED", "TAP", "AGBD",
        "Programación-Web", "Diseño de Software", "Apoyo Materias",
    ];

    const datosFiltrados = datos.filter((materia) =>
        materia.toLowerCase().includes(busqueda.toLowerCase())
    );

    const manejarEnter = (e) => {
        if (e.key === "Enter" && busqueda.trim() !== "") {
            if (datosFiltrados.length > 0) {
                navigate(`/materia/${datosFiltrados[0].toLowerCase()}`);
            } else {
                alert("No se encontró la materia");
            }
        }
    };

    const handleMateriaClick = (materia) => {
        navigate(`/materia/${materia.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return (
        <>
            {/* ============================================== */}
            {/* HEADER SUPERIOR (Mantiene la estructura de la imagen) */}
            {/* ============================================== */}
            <header className="header-top">
                <div className="logo-container">
                    <span className="logo-icon">🎓</span>
                    <span className="logo-text">Apoyo UBA</span>
                    <span className="logo-slogan">Por estudiantes, para estudiantes.</span>
                </div>
                <div className="user-actions">
                    <span className="username">Mateo Uls</span>
                    <button className="btn-login">Logout</button>
                </div>
            </header>


            {/* NAV BAR PRINCIPAL (Mantiene la estructura de la imagen) */}
            <nav className="main-nav">
                {/* 1. ENLACES FIJOS */}
                <Link to="/" className="nav-item">Inicio</Link> {/* <<-- Link a la página principal */}
                <Link to="/quienes-somos" className="nav-item">Quiénes somos</Link>
                {/* Nota: No hay link "Materias" fijo aquí, solo el dropdown */}

                {/* Tu barra de búsqueda */}
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Buscar materia..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        onKeyDown={manejarEnter}
                        className="search-input"
                    />
                </div>

                {/* Tus botones de navegación */}
                <div className="botones-menu">
                    {/* Botón Página principal (Sin links internos) */}
                    <div className="dropdown">
                        <button
                            onClick={() => setAbiertoPrincipal(!abiertoPrincipal)}
                            className="dropbtn nav-item"
                        >
                            Página principal ▼
                        </button>
                        {abiertoPrincipal && (
                            <div className="dropdown-content">
                                <span style={{ padding: '10px' }}>Menú Principal</span>
                            </div>
                        )}
                    </div>

                    {/* Botón Materias (Mantiene tu lógica original) */}
                    <div className="dropdown">
                        <button
                            onClick={() => setAbiertoMaterias(!abiertoMaterias)}
                            className="dropbtn nav-item"
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

                    {/* El botón de contacto */}
                    <button className="nav-item btn-contact">Contacto</button>
                </div>
            </nav>

            {/* ============================================== */}
            {/* CONTENIDO PRINCIPAL: GRILLA DE MATERIAS (JSX) */}
            {/* ============================================== */}
            <main className="main-content-grid">
                {/* GRILLA (Usa la data estática con imágenes) */}
                <section className="materia-grid-container">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`materia-card ${card.color}`}
                            onClick={() => handleMateriaClick(card.title)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-header">
                                {/* Adaptado para usar una imagen en lugar del emoji */}
                                <div className="card-icon-container">
                                    <img src={card.imageSrc} alt={`${card.title} Icono`} className="card-image-icon" />
                                </div>
                                <h3>{card.title}</h3>
                            </div>
                            <div className="card-content">
                                {card.resources.map((item, i) => (
                                    <button
                                        key={i}
                                        className="btn-resource"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/recurso/${card.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`);
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* ============================================== */}
            {/* FOOTER (Parte inferior de la imagen) */}
            {/* ============================================== */}
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="featured-resources">
                        <h4>Recursos Destacados</h4>
                        <div className="resource-previews">
                            <div className="preview-item"></div>
                            <div className="preview-item"></div>
                            <div className="preview-item"></div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <p>Comunidad UBA</p>
                        <p>Formulación</p>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2025 Apoyo UBA</p>
                        <div className="social-icons">
                            <span>f</span><span>t</span><span>in</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}