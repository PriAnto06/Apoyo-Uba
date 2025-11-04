// src/uba/AuthPage.jsx (CÓDIGO MODIFICADO PARA INCLUIR GOOGLE SIGN-IN)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
// 🔑 NUEVA IMPORTACIÓN DE GOOGLE
import { GoogleLogin } from '@react-oauth/google';

const LOGO_URL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057332235578&f=1&nofb=1&ipt=100d83cc5464540b235c3849b62f5d44ac3145b6100c37cd6a289bf493fd8e22"; 
const API_URL = "http://localhost:5000"; 

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const { login } = useAuth();

    // ----------------------------------------------------
    // FUNCIÓN DE LOGIN MANUAL (Modificada para usar Flask)
    // ----------------------------------------------------
    const handleLoginManual = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || "Fallo en el login manual.");
            }

            // Usar la función de login real
            login(data.access_token, data.user); 
            navigate('/');
        } catch (err) {
            setError(err.message || 'Credenciales inválidas.');
        }
    };
    
    // ----------------------------------------------------
    // FUNCIÓN DE LOGIN CON GOOGLE (NUEVA)
    // ----------------------------------------------------
    const handleGoogleSuccess = async (response) => {
        const idToken = response.credential;
        
        try {
            // 1. Enviar el token a Flask para verificación
            const res = await fetch(`${API_URL}/google_login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: idToken }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || data.error || "Fallo la autenticación con Google.");
            }

            // 2. Loguear al usuario y redirigir
            login(data.access_token, data.user);
            navigate('/'); 

        } catch (err) {
            console.error("Error al autenticar con Flask:", err);
            setError(`Error de sesión con Google: ${err.message}.`);
        }
    };
    
    const handleGoogleFailure = () => {
        setError("Fallo al iniciar sesión con Google. Intenta de nuevo.");
    };

    // ----------------------------------------------------
    // ESTILOS DE COMPONENTE (Los mantuvimos)
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
                
                <form onSubmit={isLogin ? handleLoginManual : handleRegister}>
                    
                    {/* Campos de Email y Contraseña */}
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
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

                {/* 🔑 SEPARADOR Y BOTÓN DE GOOGLE (Solo en la vista de Login) */}
                {isLogin && (
                    <>
                        <p style={{ margin: '30px 0', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            O usa tu cuenta de Google
                        </p>
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleFailure}
                            theme="filled_blue" 
                        />
                    </>
                )}
                

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