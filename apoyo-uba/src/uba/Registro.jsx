// src/uba/Registro.jsx (CÓDIGO COMPLETO Y FINAL)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Registro() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistro = (e) => {
        e.preventDefault();
        
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // 🔑 PASO CLAVE: GUARDAR CREDENCIALES EN LOCAL STORAGE
        // Esto permite que AuthPage use esta misma cuenta
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);
        localStorage.setItem('registeredName', nombre); 

        console.log('Registro exitoso simulado. Cuenta guardada:', email);

        alert(`¡Registro completado, ${nombre}! Ahora debes iniciar sesión con tu nueva cuenta.`);
        
        // Redirige al usuario a la página de Iniciar Sesión
        navigate("/auth"); 
    };

    return (
        <div style={registerContainerStyle}>
            <div style={registerCardStyle}>
                <h1 style={{ color: '#28a745', marginBottom: '30px', fontSize: '2rem' }}>
                    Registro de Nuevo Estudiante
                </h1>
                
                <form onSubmit={handleRegistro}>
                    <input 
                        type="text" 
                        placeholder="Nombre Completo" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <input 
                        type="email" 
                        placeholder="Correo Electrónico UBA" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <input 
                        type="password" 
                        placeholder="Crear Contraseña (mín. 6)" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirmar Contraseña" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>
                        Crear Cuenta y Continuar
                    </button>
                </form>
                
                <p style={{ marginTop: '20px', color: '#666' }}>
                    ¿Ya tienes cuenta? <Link to="/auth" style={{ color: '#00bcd4', textDecoration: 'none', fontWeight: 'bold' }}>Iniciar Sesión</Link>
                </p>
                <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #eee' }} />
                <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Volver a la Página Principal
                </Link>
            </div>
        </div>
    );
}

// Estilos...
const registerContainerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#e8f5e9', fontFamily: 'Arial, sans-serif' };
const registerCardStyle = { width: '400px', padding: '40px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', textAlign: 'center' };
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', fontSize: '1rem' };
const buttonStyle = { width: '100%', padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', transition: 'background-color 0.3s' };