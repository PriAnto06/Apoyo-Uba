// src/pages/MateriasGridPage.jsx (Contiene Header Top y Grilla Completa)

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// =================================================================
// ESTRUCTURA DE DATOS
// =================================================================
const cardsData = [
    { title: "Matemática", color: "blue-soft", resources: ["Guías PDF", "Video Lecciones", "Ejercicios"], professor: "Laura Carrizo" },
    { title: "Inglés", color: "green-light", resources: ["Gramática", "Vocabulario", "Test Online"], professor: "Gabriel Beronda" },
    { title: "Química", color: "teal-dark", resources: ["Guías PDF", "Video Lecciones", "Laboratorio"], professor: "Marcela Gleiser" },
    { title: "AED", color: "orange-soft", resources: ["Profesor: Mauricio Uribe y Julian Impelluso", "Clases Prácticas"], professor: "Mauricio Uribe y Julian Impelluso" },
    { title: "TAP", color: "yellow-dark", resources: ["Proyectos", "Recursos", "Exámenes"], professor: "Andres Navarro y Julian Impelluso" },
    { title: "AGBD", color: "purple-soft", resources: ["Diseño", "SQL", "Ejercicios"], professor: "Tomas Mayorga" },
    { title: "ProgramacionWeb", color: "blue-soft", resources: ["HTML/CSS", "JavaScript", "Frameworks"], professor: "Federico Villace" },
    { title: "DiseñoSoftware", color: "green-light", resources: ["UML", "Patrones", "Ejercicios"], professor: "Andres Navarro" },
    { title: "ApoyoMaterias", color: "teal-dark", resources: ["Clases Particulares", "Foro de Dudas"], professor: "Ivan Cicchini" },
];

// Ya no recibe props de autenticación, usa estado interno
export default function MateriasGridPage() { 
    // 🚀 ESTADO LOCAL PARA SIMULAR AUTENTICACIÓN
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    
    // Estados de UI
    const [abiertoPrincipal, setAbiertoPrincipal] = useState(false);
    const [abiertoMaterias, setAbiertoMaterias] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const navigate = useNavigate();

    // 🚀 FUNCIONES DE AUTENTICACIÓN LOCALES
    const handleLogin = () => {
        setIsLoggedIn(true);
        // Puedes agregar un alert si lo deseas, pero el cambio visual es la clave.
        // alert("Sesión iniciada correctamente (simulación).");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // alert("Sesión cerrada (simulación).");
    };

    const datos = [
        "Matemática", "Inglés", "Química", "AED", "TAP", "AGBD",
        "ProgramaciónWeb", "DiseñoSoftware", "Apoyo Materias",
    ];

    const datosFiltrados = datos.filter((materia) =>
        materia.toLowerCase().includes(busqueda.toLowerCase())
    );

    const manejarEnter = (e) => {
        if (e.key === "Enter" && busqueda.trim() !== "") {
            if (datosFiltrados.length > 0) {
                navigate(`/materia/${datosFiltrados[0].toLowerCase().replace(/\s+/g, '-')}`);
            } else {
                alert("No se encontró la materia");
            }
        }
    };

    const handleMateriaClick = (materia) => {
        navigate(`/materia/${materia.toLowerCase().replace(/\s+/g, '-')}`);
    };

    // ==============================================
    // FUNCIÓN PARA MOSTRAR CONTACTOS
    // ==============================================
    const mostrarContacto = () => {
        const mensaje = 
            "Cualquier duda, consulta o inquietud, contáctanos por acá:\n\n" +
            "Nombre: Priscila Della Torre\n" + 
            "Email: priscilaantonella.d.07@gmail.com\n\n" +
            "Nombre: Sol Perez\n" + 
            "Email: axelweath@gmail.com\n\n" +
            "Nombre: Briseida Camacho\n" + 
            "Email: evabri2008cue@gmail.com";
             
        alert(mensaje);
    };

    return (
        <>
            {/* ============================================== */}
            {/* HEADER SUPERIOR */}
            {/* ============================================== */}
            <header className="header-top">
                <div className="logo-container">
                    <span className="logo-icon">🎓</span>
                    <span className="logo-text">Apoyo UBA</span>
                    <span className="logo-slogan">Por estudiantes, para estudiantes.</span>
                </div>
                {/* 🚀 LÓGICA DE AUTENTICACIÓN CONDICIONAL LOCAL */}
                <div className="user-actions">
                    {isLoggedIn ? (
                        <>
                            {/* Estado logueado: Muestra perfil y Logout */}
                            <span className="profile-icon" style={{marginRight: '5px'}}>👤</span> 
                            <span className="username">Mateo Uls</span>
                            <button className="btn-login" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        // Estado no logueado: Muestra Iniciar Sesión
                        <button className="btn-login" onClick={handleLogin}>Iniciar Sesión</button>
                    )}
                </div>
            </header>

            <hr/>

            {/* NAV BAR PRINCIPAL (Mantiene la estructura de la imagen) */}
            <nav className="main-nav">
                {/* 1. ENLACES FIJOS */}
                <Link to="/" className="nav-item">Inicio</Link> 
                <Link to="/quienes-somos" className="nav-item">Quiénes somos</Link>
                {/* ... */}

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
                                        <Link key={i} to={`/materia/${materia.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {materia}
                                        </Link>
                                    ))
                                ) : (
                                    <span>No se encontraron materias</span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* El botón de contacto, ahora con la función mostrarContacto */}
                    <button className="nav-item btn-contact" onClick={mostrarContacto}>Contacto</button>
                </div>
            </nav>

            <hr/>

            {/* ============================================== */}
            {/* CONTENIDO PRINCIPAL: GRILLA DE MATERIAS (JSX) */}
            {/* ============================================== */}
            <main className="main-content-grid">
                {/* GRILLA (Usa la data estática) */}
                <section className="materia-grid-container">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`materia-card ${card.color}`}
                            onClick={() => handleMateriaClick(card.title)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-header">
                                <div className="card-icon-container">
                                    {/* ... */}
                                </div>
                                
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>{card.title}</h3> 
                            </div>
                            
                            <div className="card-content">
                                <span className="card-professor-label" style={{ fontWeight: 'normal', fontSize: '1.2rem' }}>
                                    Profesor:<br/>
                                </span>
                                
                                <span className="card-professor-name" style={{ display: 'block', fontSize: '1.2rem', marginTop: '2px', fontWeight: 'normal' }}>
                                    {card.professor}
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            <hr/>

            {/* ============================================== */}
            {/* FOOTER */}
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