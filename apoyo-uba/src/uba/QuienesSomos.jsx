export default function QuienesSomos() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#f5f5f5",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#2c3e50" }}>¿Quiénes Somos?</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Somos <strong>Apoyo UBA</strong>, un proyecto estudiantil dedicado a 
        brindar acompañamiento en <strong>materias básicas</strong> y <strong>talleres</strong>.
      </p>
      <p style={{ fontSize: "16px", color: "#777" }}>
        Apoyo UBA se enfoca en los estudiantes con más dificultad para aprender y poner atención 
       ,creemos que con videos de sus profesores explicando los temas específicos y apuntes de otros
        estudiantes o de los mismos profesores estos tendrán las herramientas necesarias para poder progresar a lo largo de su trayecto estudiantil.
      </p>
    </div>
  );
}
