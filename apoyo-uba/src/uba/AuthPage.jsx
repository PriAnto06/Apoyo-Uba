// src/uba/AuthPage.jsx (CÓDIGO COMPLETO CON IMPORTACIÓN CORREGIDA)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 🔑 IMPORTAR EL HOOK DEL CONTEXTO
// RUTA CORREGIDA: Apunta a la misma carpeta (src/uba/)
import { useAuth } from './AuthContext'; 

const LOGO_URL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057332235578&f=1&nofb=1&ipt=100d83cc5464540b235c3849b62f5d44ac3145b6100c37cd6a289bf493fd8e22"; 

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // 🔑 Usar el hook de autenticación
    const { login } = useAuth();

    // ----------------------------------------------------
    // FUNCIÓN DE LOGIN
    // ----------------------------------------------------
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Obtener credenciales guardadas
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');
        const registeredName = localStorage.getItem('registeredName');

        // Validación
        if (email === registeredEmail && password === registeredPassword) {
            
            // Llamar a la función de login del contexto
            login({ name: registeredName, email: registeredEmail });
            
            // Redirigir a la página principal
            navigate('/');
        } else {
            setError('Credenciales inválidas o usuario no registrado.');
        }
    };

    // ----------------------------------------------------
    // FUNCIÓN DE REGISTRO
    // ----------------------------------------------------
    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        
        // Simulación: Redirigir a la página de registro real
        navigate('/registro');
    };

    // ----------------------------------------------------
    // ESTILOS DE COMPONENTE
    // ----------------------------------------------------
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9ecef',
    };

    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        margin: '20px 0 10px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        backgroundColor: isLogin ? '#007bff' : '#28a745',
        color: 'white',
        transition: 'background-color 0.3s',
    };

    const switchButtonStyle = {
        background: 'none',
        border: 'none',
        color: '#007bff',
        cursor: 'pointer',
        marginTop: '15px',
    };

    const errorStyle = {
        color: '#dc3545',
        marginBottom: '10px',
        fontWeight: 'bold',
    };

    const logoStyle = {
        height: "50px", 
        marginBottom: "20px", 
        borderRadius: '50%'
    };

    // ----------------------------------------------------
    // RENDERIZADO
    // ----------------------------------------------------
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <img 
                    src={LOGO_URL} 
                    alt="Logo UBA" 
                    style={logoStyle} 
                />
                
                <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
                
                <form onSubmit={isLogin ? handleLogin : handleRegister}>
                    
                    {/* Campo de Email */}
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    {/* Campo de Contraseña */}
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    {error && <p style={errorStyle}>{error}</p>}
                    
                    <button type="submit" style={buttonStyle}>
                        {isLogin ? 'Ingresar' : 'Ir a Registro'}
                    </button>
                    
                </form>

                <button 
                    onClick={() => setIsLogin(!isLogin)} 
                    style={switchButtonStyle}
                >
                    {isLogin 
                        ? '¿No tienes cuenta? Registrarme' 
                        : '¿Ya tienes cuenta? Iniciar Sesión'
                    }
                </button>
                
            </div>
        </div>
    );
}