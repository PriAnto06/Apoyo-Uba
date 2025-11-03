// src/pages/CalendarioCompleto.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const novedades = [
    { fecha: "05 Nov", titulo: "Cierre de Inscripciones de Verano", detalle: "Última semana para asegurar tu cupo en las materias de la cursada intensiva." },
    { fecha: "10 Nov", titulo: "Nueva Guía de Matemática (CBC) - Unidad 3", detalle: "Los ejercicios y soluciones de la Unidad 3 de Álgebra y Análisis ya están disponibles." },
    { fecha: "15 Nov", titulo: "Charla: Orientación Vocacional (18hs)", detalle: "Evento presencial para estudiantes de primer año con dudas sobre su carrera." },
];

export default function CalendarioCompleto() {
    return (
        <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8' }}>
            
            <Link to="/" style={{ display: 'inline-block', marginBottom: '30px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                ← Volver al Inicio
            </Link>

            <h1 style={{ textAlign: 'center', color: '#1e88e5', borderBottom: '2px solid #1e88e5', paddingBottom: '10px', marginBottom: '40px' }}>
                Novedades y Avisos Importantes
            </h1>
            
            <div style={{ padding: '0 20px' }}>
                {novedades.map((novedad, index) => (
                    <div key={index} style={{ 
                        display: 'flex', 
                        marginBottom: '25px',
                        padding: '20px', 
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        borderLeft: '5px solid #007bff'
                    }}>
                        <div style={{ flexShrink: 0, marginRight: '20px', textAlign: 'center', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px' }}>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1e88e5', margin: 0 }}>{novedad.fecha.split(' ')[0]}</p>
                            <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>{novedad.fecha.split(' ')[1]}</p>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h3 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '1.4rem' }}>{novedad.titulo}</h3>
                            <p style={{ margin: 0, color: '#666' }}>{novedad.detalle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}