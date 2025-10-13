import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Importamos los archivos MD desde la carpeta de DiseñoSoftware
import apunte1 from "../markdown/DiseñoSoftware/apunte1.md?raw";
import apunte2 from "../markdown/DiseñoSoftware/apunte2.md?raw";

export default function DiseñoSoftware() {
  const [contenido, setContenido] = useState("");

  const apuntes = [
    { nombre: "apunte 1", contenido: apunte1 },
    { nombre: "apunte 2", contenido: apunte2 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>💻 Bienvenido a Diseño de Software</h1>
      <p>Aquí encontrarás apuntes y material de la materia.</p>

      <p>Seleccioná un apunte para visualizarlo:</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {apuntes.map((a, i) => (
          <button
            key={i}
            onClick={() => setContenido(a.contenido)}
            style={{
              padding: "8px 16px",
              backgroundColor: "rgba(59, 151, 151, 1)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {a.nombre}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        {contenido ? (
          <ReactMarkdown>{contenido}</ReactMarkdown>
        ) : (
          <p>📝 Elegí un apunte para leerlo.</p>
        )}
      </div>
    </div>
  );
}
