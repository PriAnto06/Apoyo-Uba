// src/pages/TalleresYActividades.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const talleres = [
    { nombre: "Taller de Chino Mandarín", horario: "Lunes y Miércoles (17:00 - 19:00 hs)", aula: "Aula 202", icono: "CN" },
    { nombre: "Mateclubes (Preparación CBC)", horario: "Martes (15:00 - 17:00 hs)", aula: "Aula 202", icono: "MAT" },
    { nombre: "Filosofía y Pensamiento Crítico", horario: "Viernes (10:00 - 12:00 hs)", aula: "Aula 202", icono: "FIL" },
];

export default function TalleresYActividades() {
    return (
        <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
            
            <Link to="/" style={{ display: 'inline-block', marginBottom: '30px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                ← Volver al Inicio
            </Link>

            <h1 style={{ textAlign: 'center', color: '#e91e63', borderBottom: '2px solid #e91e63', paddingBottom: '10px', marginBottom: '40px' }}>
                Agenda de Talleres y Actividades
            </h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', textAlign: 'left' }}>
                {talleres.map((taller, index) => (
                    <div key={index} style={{ padding: '25px', borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderLeft: '5px solid #673ab7' }}>
                        <h3 style={{ color: '#673ab7', margin: '0 0 15px 0', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                            {taller.nombre}
                        </h3>
                        <p style={{ margin: '8px 0', color: '#333' }}><strong>Horario:</strong> {taller.horario}</p>
                        <p style={{ margin: '8px 0', color: '#333' }}><strong>Lugar:</strong> **{taller.aula}**</p>
                    </div>
                ))}
            </div>
        </div>
    );
}