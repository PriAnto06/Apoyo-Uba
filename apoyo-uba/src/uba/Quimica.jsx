import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Importamos los archivos MD desde la carpeta de Química
import apunte1 from "../markdown/Quimica/apunte1.md?raw";
import apunte2 from "../markdown/Quimica/apunte2.md?raw";
import apunte3 from "../markdown/Quimica/apunte3.md?raw";
import apunte4 from "../markdown/Quimica/apunte4.md?raw";

export default function Quimica() {
  const [contenido, setContenido] = useState("");

  const apuntes = [
    { nombre: "Apunte 1", contenido: apunte1 },
    { nombre: "Apunte 2", contenido: apunte2 },
    { nombre: "Apunte 3", contenido: apunte3 },
    { nombre: "Apunte 4", contenido: apunte4 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧪 Bienvenido a Química</h1>
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
