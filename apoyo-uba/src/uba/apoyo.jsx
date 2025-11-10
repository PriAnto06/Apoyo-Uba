// src/uba/apoyo.jsx (CÓDIGO COMPLETO Y FINAL CON RUTA CORREGIDA)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// 🔑 IMPORTACIÓN CLAVE CORREGIDA: Apunta a la misma carpeta (./)
import { useAuth } from './AuthContext'; 


const LOGO_URL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057332235578&f=1&nofb=1&ipt=100d83cc5464540b235c3849b62f5d44ac3145b6100c37cd6a289bf493fd8e22"; 

const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const cardsData = [
    { id: 1, title: "Matemática", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F05%2F22%2F17%2F53%2Fmathematics-112720_1280.jpg&f=1&nofb=1&ipt=0b8d0e3dabbe2a89cf4c01c084ec5915579401805d4852f49ea8729920c9085c", description: "Álgebra y Análisis Matemático. Guías y exámenes históricos.", category: "Ciencias Exactas", color: "#2196f3" }, 
    { id: 2, title: "Base de Datos", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Ficonos-visualizacion-datos-verdes-3d-informes-sostenibilidad-practicas-ecologicas-dibujos-animados_980716-185077.jpg&f=1&nofb=1&ipt=94aae9fc9899f613f33fe27868a81e5f48b0e51674c42381caff3d1e9406f543", description: "Diseño, SQL y modelado relacional.", category: "Informática", color: "#00bcd4" }, 
    { id: 3, title: "AED", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finformatecdigital.com%2Fwp-content%2Fuploads%2F2023%2F10%2FAlgoritmo-convencional-ejemplos-1536x878.png&f=1&nofb=1&ipt=c3bb7aad3d6b5218d55addf1937812325c88088f031ff758e4098fcf361e73ea", description: "Algoritmos y Estructuras de Datos. Clases de práctica.", category: "Informática", color: "#e91e63" }, 
    { id: 4, title: "TAP", imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzI5ODd8MHwxfHx3cml0aW5nJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzAzNTg3NTc1fDA&lib=rb-4.0.3&q=80&w=1080", description: "Taller de Análisis y Producción de textos.", category: "Humanidades", color: "#009688" }, 
    { id: 5, title: "Programación Web", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.aU9jqFo0X6QiTqszD9rL_QHaE8%3Fcb%3Ducfimgc2%26pid%3DApi&f=1&ipt=5474f57e22c24363d1c354aec8dc00c57d33cea236ebf8ce5d65ed5d84438cc9", description: "Frontend y Backend: HTML, CSS, JavaScript y frameworks.", category: "Informática", color: "#ff9800" }, 
    { id: 6, title: "Diseño de Software", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F1037238%2F12722%2Fv%2F950%2Fdepositphotos_127229284-stock-illustration-software-development-cycle-infographic.jpg&f=1&nofb=1&ipt=900bf9db447c36089348822d3bd1e5c54a8593b9f7fdd27a5229b5c7128485a2", description: "Patrones de diseño (MVC, DAO) y arquitecturas.", category: "Informática", color: "#673ab7" }, 
    { id: 7, title: "Apoyo General ", imageSrc: "https://images.unsplash.com/photo-1552581234-26160f608093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzI5ODd8MHwxfHxtZWV0aW5nfGVufDB8fHx8MTcwMzU4Nzc1Mnww&lib=rb-4.0.3&q=80&w=1080", description: "Apoyo para el primer año, tutorías y adaptación universitaria.", category: "Introducción", color: "#ffc107" }, 
    { id: 8, title: "Inglés", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F07%2F10%2F07%2Fenglish-2724442_1280.jpg&f=1&nofb=1&ipt=00d7da576150c0e6f51e9d179855345fd332a41728886de9a70b2513b16db376", description: "Cursos de nivelación y lectura técnica para trabajos.", category: "Idiomas", color: "#ff5722" }, 
    { id: 9, title: "Química", imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2024%2F06%2F01%2F10%2F46%2Fai-generated-8801993_1280.jpg&f=1&nofb=1&ipt=43296f8aea0f8b9f842548d99f8b18d87de70ab019079588e985b1979a8a9f93", description: "Apuntes y guías de ejercicios para la parte del CBC.", category: "Ciencias Exactas", color: "#4caf50" }, 
];

// --- Componente: Botones de Novedades y Talleres (Estilizado) ---
const EventosCallToAction = ({ navigateWithTransition }) => {
    // ... (El código de EventosCallToAction es el mismo, omitido por brevedad)
    return (
        <div style={{ 
            maxWidth: '1200px', 
            margin: '80px auto', 
            padding: '20px 40px', 
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#4a148c', 
                marginBottom: '50px', 
                fontSize: '2.8rem',
                fontWeight: 'bold' 
            }}>
                Novedades y Actividades
            </h2>

            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                gap: '40px', 
                flexWrap: 'wrap' 
            }}>
                
                {/* Tarjeta 1: Novedades y Calendario */}
                <button 
                    onClick={() => navigateWithTransition("/calendario-completo")}
                    style={{ 
                        all: 'unset', 
                        cursor: 'pointer',
                        flex: '1 1 45%', 
                        minWidth: '320px',
                        padding: '40px 30px', 
                        backgroundColor: '#ffffff', 
                        borderRadius: '15px', 
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        borderBottom: '8px solid #007bff', 
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                        color: '#333',
                        textAlign: 'left',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{ marginBottom: '20px', fontSize: '3rem', color: '#007bff' }}>
                        {/*  */}
                    </div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.6rem', color: '#007bff', fontWeight: 'bold' }}>
                        Novedades y Eventos
                    </h3>
                    <p style={{ margin: '0 0 30px 0', color: '#555', fontSize: '1.1rem' }}>
                        Consulta fechas clave, cierres de inscripción, y anuncios oficiales al instante.
                    </p>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: '#007bff', 
                        borderBottom: '2px solid #007bff', 
                        display: 'inline-block' 
                    }}>
                        Ver Novedades →
                    </div>
                </button>

                {/* Tarjeta 2: Talleres y Actividades */}
                <button 
                    onClick={() => navigateWithTransition("/talleres")}
                    style={{ 
                        all: 'unset', 
                        cursor: 'pointer',
                        flex: '1 1 45%', 
                        minWidth: '320px',
                        padding: '40px 30px', 
                        backgroundColor: '#ffffff', 
                        borderRadius: '15px', 
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        borderBottom: '8px solid #e91e63', 
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                        color: '#333',
                        textAlign: 'left',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{ marginBottom: '20px', fontSize: '3rem', color: '#e91e63' }}>
                        {/*  */}
                    </div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.6rem', color: '#e91e63', fontWeight: 'bold' }}>
                        Talleres y Actividades
                    </h3>
                    <p style={{ margin: '0 0 30px 0', color: '#555', fontSize: '1.1rem' }}>
                        Clases de apoyo, idiomas, deportes y actividades para potenciar tu currículum.
                    </p>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: '#e91e63', 
                        borderBottom: '2px solid #e91e63', 
                        display: 'inline-block' 
                    }}>
                        Explorar Talleres →
                    </div>
                </button>
            </div>
        </div>
    );
};


export default function Apoyo() {
  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false); 
  const [perfilAbierto, setPerfilAbierto] = useState(false); 
  const [transicion, setTransicion] = useState(false); 
  const navigate = useNavigate();
  
  // 🔑 HOOK DE AUTENTICACIÓN
  // La ruta de importación de useAuth ya está manejada por el contexto
  const { isLoggedIn, user, logout } = useAuth(); 
    
  const navigateWithTransition = (path) => {
    setTransicion(true); 
    setTimeout(() => {
      navigate(path);
    }, 150); 
  };

  const datosFiltrados = cardsData.filter((card) =>
    normalizeText(card.title).includes(normalizeText(busqueda))
  );

  const manejarEnter = (e) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      if (datosFiltrados.length > 0) {
        navigateWithTransition(`/materia/${datosFiltrados[0].title.toLowerCase().replace(/\s+/g, '-')}`);
      } else {
        alert("No se encontró la materia. Intenta con otra palabra clave.");
      }
    }
  };

  const handleCardClick = (title) => {
    navigateWithTransition(`/materia/${title.title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
    
  const closeMenu = () => {
    setMenuAbierto(false);
  };
    
  // Función para manejar el logout
  const handleLogout = () => {
      logout();
      setPerfilAbierto(false);
      navigateWithTransition('/'); 
  }

  // Estilo del ícono del usuario (Imagen por defecto)
  const defaultUserIconStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#007bff', 
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      cursor: 'pointer',
      border: '2px solid white',
      boxShadow: '0 0 5px rgba(0,0,0,0.2)'
  }


  return (
    <div className="apoyo-container" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#333', position: 'relative' }}>
        
        {/* --- CAPA DE TRANSICIÓN A BLANCO --- */}
        {transicion && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                zIndex: 9999, 
                opacity: 1,
                transition: 'opacity 0.1s ease-in', 
            }} />
        )}

        {/* -------------------- BARRA DE NAVEGACIÓN (Navbar) -------------------- */}
        <nav className="navbar" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 40px', 
            backgroundColor: '#ffffff', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 10 
        }}>
            {/* Lado Izquierdo: Logo y Links de Navegación */}
            <div className="navbar-left" style={{ display: 'flex', alignItems: 'center' }}>
                {/* Logo */}
                <button onClick={() => navigateWithTransition("/")} style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#333', marginRight: '40px' }}>
                    <img 
                        src={LOGO_URL} 
                        alt="Logo Apoyo UBA" 
                        style={{ height: "30px", marginRight: "10px" }} 
                    />
                    <strong style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Apoyo UBA</strong>
                </button>
                
                {/* Menú Desplegable: PAGINA PRINCIPAL | NOVEDADES | TALLERES */}
                <div style={{ position: 'relative' }}>
                    <button 
                        onClick={toggleMenu}
                        style={{ 
                            padding: '10px 15px', 
                            backgroundColor: 'transparent', 
                            border: '1px solid #ccc', 
                            borderRadius: '5px', 
                            cursor: 'pointer', 
                            fontWeight: '500',
                            fontSize: '1rem',
                            marginRight: '10px'
                        }}
                    >
                        Explorar
                        <span style={{ marginLeft: '5px' }}>{menuAbierto ? '▲' : '▼'}</span>
                    </button>
                    
                    {/* Contenido del Desplegable */}
                    {menuAbierto && (
                        <div style={dropdownContentStyle}>
                            <button onClick={() => { closeMenu(); navigateWithTransition("/"); }} style={dropdownItemStyle}>Página Principal</button>
                            <div style={dividerStyle} />
                            <button onClick={() => { closeMenu(); navigateWithTransition("/calendario-completo"); }} style={dropdownItemStyle}>Novedades y Avisos</button>
                            <button onClick={() => { closeMenu(); navigateWithTransition("/talleres"); }} style={dropdownItemStyle}>Actividades / Talleres</button>
                        </div>
                    )}
                </div>
                
                <button onClick={() => navigateWithTransition("/uba/grid")} style={navButtonStyle}>Materias</button>
                <button onClick={() => navigateWithTransition("/quienes-somos")} style={navButtonStyle}>Quiénes Somos</button>
            </div>

            {/* Lado Derecho: Búsqueda e Iniciar Sesión/Icono de Cuenta */}
            <div className="navbar-right" style={{ display: 'flex', alignItems: 'center' }}>
                
                {/* Barra de búsqueda con ícono */}
                <div className="search-box" style={{ marginRight: '20px', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Buscar materia..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        onKeyDown={manejarEnter}
                        className="search-input"
                        style={{ 
                            padding: '10px 40px 10px 15px', 
                            borderRadius: '25px', 
                            border: '1px solid #ccc', 
                            width: '220px', 
                            fontSize: '0.95rem',
                            outline: 'none' 
                        }}
                    />
                    <button 
                        className="search-button" 
                        onClick={() => manejarEnter({key: 'Enter'})} 
                        style={{ 
                            position: 'absolute',
                            right: '5px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'transparent', 
                            border: 'none', 
                            cursor: 'pointer', 
                            color: '#007bff', 
                            padding: '5px'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
                
                {/* 🔑 LÓGICA CLAVE: Mostrar el botón o el perfil */}
                {isLoggedIn ? (
                    // 1. SI ESTÁ LOGUEADO: Mostrar Ícono de Cuenta
                    <div style={{ position: 'relative', marginLeft: '20px' }}>
                        <div 
                            style={defaultUserIconStyle} 
                            onClick={() => setPerfilAbierto(!perfilAbierto)}
                        >
                            {/* Mostrar la inicial del nombre del usuario */}
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        
                        {/* Menú Desplegable de Perfil (Mi Info) */}
                        {perfilAbierto && (
                            <div style={perfilDropdownStyle}>
                                <div style={perfilHeaderStyle}>
                                    <p style={perfilNameStyle}>{user?.name || 'Mi Cuenta'}</p>
                                    <p style={perfilEmailStyle}>{user?.email || 'email@example.com'}</p>
                                </div>
                                <div style={dividerStyle} />
                                <button onClick={() => { setPerfilAbierto(false); navigateWithTransition('/perfil'); }} style={perfilMenuItemStyle}>Mi Perfil</button>
                                <button onClick={() => { setPerfilAbierto(false); navigateWithTransition('/configuracion'); }} style={perfilMenuItemStyle}>Configuración</button>
                                <div style={dividerStyle} />
                                <button onClick={handleLogout} style={perfilLogoutStyle}>Cerrar Sesión</button>
                            </div>
                        )}
                    </div>
                ) : (
                    // 2. SI NO ESTÁ LOGUEADO: Mostrar Botón de Iniciar Sesión
                    <button 
                        onClick={() => navigateWithTransition("/auth")}
                        className="btn-iniciar-sesion"
                        style={{ 
                            backgroundColor: '#007bff', 
                            color: 'white', 
                            padding: '10px 20px', 
                            borderRadius: '25px', 
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        Iniciar Sesión
                    </button>
                )}
            </div>
        </nav>

        {/* -------------------- HERO / BANNER PRINCIPAL -------------------- */}
        <div className="hero-banner" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '450px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            color: 'white',
            position: 'relative',
            paddingLeft: '100px' 
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
                <h1 className="hero-title" style={{ fontSize: '3rem', margin: '0 0 15px 0', lineHeight: '1.2' }}>
                    ¡Estudia y Aprueba con la Comunidad!
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '1.2rem', margin: '0 0 30px 0' }}>
                    Encuentra apuntes, guías y el apoyo necesario para triunfar en tus materias.
                </p>
                {/* BOTÓN PRINCIPAL DE LA PORTADA */}
                <button onClick={() => navigateWithTransition("/uba/grid")} className="hero-button" style={{ 
                    all: 'unset',
                    cursor: 'pointer',
                    padding: '12px 30px', 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s ease'
                }}>
                    Explorar Materias
                </button>
            </div>
        </div>
        
        {/* -------------------- SECCIÓN DE NOVEDADES Y TALLERES (Call to Action) -------------------- */}
        <EventosCallToAction navigateWithTransition={navigateWithTransition} />

        {/* -------------------- SECCIÓN DE MATERIAS (Grilla 3x3) -------------------- */}
        <div className="seccion-materias" style={{ padding: '60px 40px', maxWidth: '1200px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '40px' }}>
                Explora Nuestras Materias
            </h2>
            
            <div className="materias-grilla" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '30px', 
            }}>
                {cardsData.map((card) => (
                    <div 
                        key={card.id} 
                        className="materia-card" 
                        onClick={() => handleCardClick(card.title)}
                        style={{ 
                            backgroundColor: '#ffffff', 
                            border: `1px solid ${card.color}`, 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            overflow: 'hidden', 
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <img 
                            src={card.imageSrc} 
                            alt={card.title} 
                            style={{ 
                                width: '100%', 
                                height: '180px', 
                                objectFit: 'cover', 
                                borderBottom: `3px solid ${card.color}` 
                            }} 
                        />
                        <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>{card.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', flexGrow: 1, marginBottom: '15px' }}>{card.description}</p>
                            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: '#999' }}>{card.category}</span>
                                <button onClick={() => handleCardClick(card.title)} style={{ 
                                    all: 'unset',
                                    cursor: 'pointer',
                                    color: '#007bff', 
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem'
                                }}>
                                    Ver Curso
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* -------------------- FOOTER -------------------- */}
        <footer style={{ backgroundColor: '#343a40', color: '#f8f9fa', padding: '40px 20px', textAlign: 'center', marginTop: '50px' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ marginBottom: '20px', width: 'calc(33% - 20px)', minWidth: '250px', textAlign: 'left' }}>
                    <h4 style={{ color: 'white', marginBottom: '15px' }}>Apoyo UBA</h4>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Tu comunidad para el éxito académico. Encuentra recursos y apoyo.</p>
                </div>
                <div style={{ marginBottom: '20px', width: 'calc(33% - 20px)', minWidth: '150px', textAlign: 'left' }}>
                    <h4 style={{ color: 'white', marginBottom: '15px' }}>Enlaces Rápidos</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><button onClick={() => navigateWithTransition("/")} style={footerButtonStyle}>Inicio</button></li>
                        <li style={{ marginBottom: '10px' }}><button onClick={() => navigateWithTransition("/uba/grid")} style={footerButtonStyle}>Materias</button></li>
                        <li style={{ marginBottom: '10px' }}><button onClick={() => navigateWithTransition("/quienes-somos")} style={footerButtonStyle}>Quiénes Somos</button></li>
                    </ul>
                </div>
                <div style={{ marginBottom: '20px', width: 'calc(33% - 20px)', minWidth: '250px', textAlign: 'left' }}>
                    <h4 style={{ color: 'white', marginBottom: '15px' }}>Contacto & Social</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Email: info@apoyouba.com</p>
                    <div className="social-icons" style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                        <a href="#" style={{ color: '#adb5bd', fontSize: '1.2rem', textDecoration: 'none' }}>F</a> 
                        <a href="#" style={{ color: '#adb5bd', fontSize: '1.2rem', textDecoration: 'none' }}>T</a> 
                        <a href="#" style={{ color: '#adb5bd', fontSize: '1.2rem', textDecoration: 'none' }}>In</a>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #495057', paddingTop: '20px', marginTop: '30px', fontSize: '0.85rem', color: '#adb5bd' }}>
                <p>&copy; 2025 Apoyo UBA. Todos los derechos reservados. | <button onClick={() => navigateWithTransition("/privacidad")} style={footerButtonStyle}>Política de Privacidad</button> | <button onClick={() => navigateWithTransition("/terminos")} style={footerButtonStyle}>Términos de Servicio</button></p>
            </div>
        </footer>
    </div>
  );
}

// ----------------------------------------------------
// ESTILOS ADICIONALES (Para el nuevo menú de perfil)
// ----------------------------------------------------

const perfilDropdownStyle = {
    position: 'absolute', 
    top: '100%', 
    right: 0, 
    marginTop: '10px', 
    backgroundColor: 'white', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
    borderRadius: '8px',
    minWidth: '220px',
    padding: '10px 0',
    zIndex: 30
};

const perfilHeaderStyle = {
    padding: '10px 15px',
    borderBottom: '1px solid #eee',
    marginBottom: '5px'
};

const perfilNameStyle = {
    margin: 0,
    fontWeight: 'bold',
    color: '#333'
};

const perfilEmailStyle = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#666'
};

const perfilMenuItemStyle = {
    all: 'unset', 
    cursor: 'pointer',
    display: 'block', 
    width: '100%',
    textAlign: 'left',
    padding: '10px 15px', 
    color: '#555',
    transition: 'background-color 0.1s',
    ':hover': {
        backgroundColor: '#f4f4f4'
    }
};

const perfilLogoutStyle = {
    all: 'unset', 
    cursor: 'pointer',
    display: 'block', 
    width: '100%',
    textAlign: 'left',
    padding: '10px 15px', 
    color: '#e91e63', 
    fontWeight: 'bold',
    transition: 'background-color 0.1s',
    ':hover': {
        backgroundColor: '#fee'
    }
};

const navButtonStyle = {
    all: 'unset',
    cursor: 'pointer',
    color: '#555', 
    margin: '0 15px', 
    fontWeight: '500',
    padding: '5px 0'
};

const footerButtonStyle = {
    all: 'unset',
    cursor: 'pointer',
    color: '#adb5bd', 
    textDecoration: 'none',
    display: 'block'
};

const dropdownContentStyle = {
    position: 'absolute', 
    top: '100%', 
    left: 0, 
    marginTop: '5px', 
    backgroundColor: 'white', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
    borderRadius: '5px',
    minWidth: '200px',
    padding: '10px',
    zIndex: 20
};

const dropdownItemStyle = {
    all: 'unset', 
    cursor: 'pointer',
    display: 'block', 
    width: '100%',
    textAlign: 'left',
    padding: '8px 15px', 
    textDecoration: 'none', 
    color: '#333',
    backgroundColor: 'white',
};
const dividerStyle = {
    height: '1px',
    backgroundColor: '#eee',
    margin: '5px 0'
};