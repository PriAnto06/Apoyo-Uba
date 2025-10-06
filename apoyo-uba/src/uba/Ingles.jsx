import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Importamos los archivos MD desde la carpeta profunda
import apunte1 from "../markdown/Ingles/REVISION EXERCISES/YEAR 3/GOING TO AND WILL FUTURE SIMPLE/apunte1.md?raw";
import apunte2 from "../markdown/Ingles/REVISION EXERCISES/YEAR 3/GOING TO AND WILL FUTURE SIMPLE/apunte2.md?raw";
import apunte4 from "../markdown/Ingles/REVISION EXERCISES/YEAR 3/GOING TO AND WILL FUTURE SIMPLE/apunte4.md?raw";
import apunte5 from "../markdown/Ingles/REVISION EXERCISES/YEAR 3/GOING TO AND WILL FUTURE SIMPLE/apunte5.md?raw";

export default function Ingles() {
  const [contenido, setContenido] = useState("");

  const apuntes = [
    { nombre: "Apunte 1", contenido: apunte1 },
    { nombre: "Apunte 2", contenido: apunte2 },
    { nombre: "Apunte 4", contenido: apunte4 },
    { nombre: "Apunte 5", contenido: apunte5 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Tu bienvenida original */}
      <h1>🇬🇧 Bienvenido a Inglés</h1>
      <p>Aquí encontrarás apuntes y material de la materia.</p>

      <p>Seleccioná un apunte para visualizarlo:</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {apuntes.map((a, i) => (
          <button
            key={i}
            onClick={() => setContenido(a.contenido)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
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
