// src/pages/MateriasGridPage.jsx (Contiene Header Top y Grilla Completa)

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// =================================================================
// ESTRUCTURA DE DATOS (Mantenida sin cambios)
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

// URL del Logo de la UBA (Definida como constante global para limpieza)
const UBA_LOGO_URL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2020%2F01%2FUBA_logo_University_of_Buenos_Aires.png&f=1&nofb=1&ipt=05a17c271afb2f42fb5dc6dea186700bf62ead5a2dbd742ed1002c84dcd8300b";

export default function MateriasGridPage() { 
    // Estados de UI
    const [abiertoMaterias, setAbiertoMaterias] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const navigate = useNavigate();
    
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
    // FUNCIÓN PARA MOSTRAR CONTACTOS (Mantenida sin cambios)
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
            {/* NAV BAR PRINCIPAL */}
            <nav className="main-nav">
                
                {/* 🎯 LOGO/NOMBRE DE APLICACIÓN CON IMAGEN UBA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    
                    <Link to="/" style={{ textDecoration: 'none', color: '#2c3e50', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                        
                        {/* IMAGEN DEL LOGO UBA */}
                        <img 
                            src={UBA_LOGO_URL} 
                            alt="Logo UBA" 
                            style={{ 
                                width: '30px', 
                                height: '30px', 
                                marginRight: '8px', 
                                objectFit: 'contain'
                            }} 
                        />
                        <span style={{ fontWeight: 'bold' }}>Apoyo UBA</span>
                    </Link>
                    
                    {/* 1. ENLACES FIJOS - MOVIDOS AL LADO DEL LOGO */}
                    <Link to="/" className="nav-item">Inicio</Link> 
                    <Link to="/quienes-somos" className="nav-item">Quiénes somos</Link>
                </div>

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

                    {/* El botón de contacto */}
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
            {/* FOOTER (Mantenido sin cambios) */}
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