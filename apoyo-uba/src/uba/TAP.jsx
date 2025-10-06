import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Importamos los 3 apuntes de TAP
import apunte1 from "../markdown/TAP/apunte1.md?raw";
import apunte2 from "../markdown/TAP/apunte2.md?raw";
import apunte3 from "../markdown/TAP/apunte3.md?raw";

export default function TAP() {
  const [contenido, setContenido] = useState("");

  const apuntes = [
    { nombre: "apunte 1", contenido: apunte1 },
    { nombre: "apunte 2", contenido: apunte2 },
    { nombre: "apunte 3", contenido: apunte3 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📂 Taller de Algoritmos y Programación</h1>
      <p>Aquí encontrarás apuntes y recursos de TAP.</p>

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
