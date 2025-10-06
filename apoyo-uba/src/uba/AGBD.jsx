import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Importamos los 15 apuntes de AGBD
import apunte1 from "../markdown/AGBD/apunte1.md?raw";
import apunte2 from "../markdown/AGBD/apunte2.md?raw";
import apunte3 from "../markdown/AGBD/apunte3.md?raw";
import apunte4 from "../markdown/AGBD/apunte4.md?raw";
import apunte5 from "../markdown/AGBD/apunte5.md?raw";
import apunte6 from "../markdown/AGBD/apunte6.md?raw";
import apunte7 from "../markdown/AGBD/apunte7.md?raw";
import apunte8 from "../markdown/AGBD/apunte8.md?raw";
import apunte9 from "../markdown/AGBD/apunte9.md?raw";
import apunte10 from "../markdown/AGBD/apunte10.md?raw";
import apunte11 from "../markdown/AGBD/apunte11.md?raw";
import apunte12 from "../markdown/AGBD/apunte12.md?raw";
import apunte13 from "../markdown/AGBD/apunte13.md?raw";
import apunte14 from "../markdown/AGBD/apunte14.md?raw";
import apunte15 from "../markdown/AGBD/apunte15.md?raw";

export default function AGBD() {
  const [contenido, setContenido] = useState("");

  const apuntes = [
    { nombre: "apunte 1", contenido: apunte1 },
    { nombre: "apunte 2", contenido: apunte2 },
    { nombre: "apunte 3", contenido: apunte3 },
    { nombre: "apunte 4", contenido: apunte4 },
    { nombre: "apunte 5", contenido: apunte5 },
    { nombre: "apunte 6", contenido: apunte6 },
    { nombre: "apunte 7", contenido: apunte7 },
    { nombre: "apunte 8", contenido: apunte8 },
    { nombre: "apunte 9", contenido: apunte9 },
    { nombre: "apunte 10", contenido: apunte10 },
    { nombre: "apunte 11", contenido: apunte11 },
    { nombre: "apunte 12", contenido: apunte12 },
    { nombre: "apunte 13", contenido: apunte13 },
    { nombre: "apunte 14", contenido: apunte14 },
    { nombre: "apunte 15", contenido: apunte15 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🗄️ Administración y Gestión de Base de Datos</h1>
      <p>Aquí encontrarás apuntes y recursos de AGBD.</p>

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
