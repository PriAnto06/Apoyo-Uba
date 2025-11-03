import React from "react";
import { Link } from "react-router-dom"; 

export default function QuienesSomos() {
  return (
    // 1. Contenedor principal con fondo degradado y formas abstractas
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingTop: "120px", 
        fontFamily: "'Roboto', sans-serif", 
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden" 
      }}
    >
        {/* Formas abstractas de fondo */}
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'rgba(173, 216, 230, 0.4)', filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(200, 180, 255, 0.4)', filter: 'blur(50px)' }}></div>
        <div style={{ position: 'absolute', top: '5%', right: '25%', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255, 220, 180, 0.4)', filter: 'blur(30px)' }}></div>
        <div style={{ position: 'absolute', top: '40%', left: '0%', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(180, 255, 200, 0.4)', filter: 'blur(35px)' }}></div>


      {/* 2. La tarjeta principal (Glassmorphism) */}
      <div 
        style={{
          width: "100%",
          maxWidth: "800px", 
          backgroundColor: "rgba(255, 255, 255, 0.65)", 
          padding: "50px 40px 60px 40px", 
          borderRadius: "30px", 
          backdropFilter: 'blur(10px)', 
          border: '1px solid rgba(255, 255, 255, 0.4)', 
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          position: "relative",
          marginBottom: "40px",
          zIndex: 1 
        }}
      >
        
        {/* 3. Ícono superior: AHORA EL LOGO DE LA UBA con fondo blanco */}
        <div
          style={{
            position: "absolute",
            top: "-50px", 
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            backgroundColor: "white", // CAMBIO AQUÍ: Fondo blanco
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 15px rgba(41, 98, 255, 0.3)", // Sombra para darle profundidad
            overflow: "hidden" 
          }}
        >
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2020%2F01%2FUBA_logo_University_of_Buenos_Aires.png&f=1&nofb=1&ipt=05a17c271afb2f42fb5dc6dea186700bf62ead5a2dbd742ed1002c84dcd8300b" 
            alt="Logo UBA" 
            style={{ 
              width: "80%", 
              height: "80%",
              objectFit: "contain" 
            }} 
          />
        </div>

        <h2 
          style={{ 
            color: "#333", 
            fontSize: "2.5rem", 
            marginTop: "30px", 
            marginBottom: "15px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px"
          }}
        >
          Nuestro Equipo Apoyo UBA
        </h2>
        
        {/* TEXTO DE MISIÓN Y ENFOQUE */}
        <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "10px", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto 10px auto" }}>
          Somos un proyecto estudiantil dedicado a brindar acompañamiento en "materias básicas" y "talleres".
        </p>

        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "40px", lineHeight: "1.6", maxWidth: "750px", margin: "0 auto 40px auto" }}>
            **Apoyo UBA se enfoca en los estudiantes con más dificultad para aprender y poner atención.**
            Creemos que con videos de sus profesores explicando los temas específicos y apuntes de otros 
            estudiantes o de los mismos profesores, estos tendrán las herramientas necesarias para poder 
            progresar a lo largo de su trayecto estudiantil.
        </p>
        
        {/* 5. Botón para volver a la grilla de materias */}
        <Link 
          to="/" 
          style={{
            background: "linear-gradient(45deg, #42A5F5, #2962ff)", 
            color: "white",
            padding: "12px 28px",
            borderRadius: "50px", 
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.05rem",
            transition: "all 0.3s ease",
            display: "inline-block", 
            marginTop: "20px", 
            boxShadow: "0 8px 20px rgba(41, 98, 255, 0.3)" 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(41, 98, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(41, 98, 255, 0.3)';
          }}
        >
          Volver a la Grilla de Materias
        </Link>

      </div>
        
      {/* 6. Copyright */}
      <p style={{ color: "#555", fontSize: "0.9rem", marginTop: "20px" }}>
        &copy; 2025 Apoyo UBA
      </p>

    </div>
  );
}