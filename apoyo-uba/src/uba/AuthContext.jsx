// src/context/AuthContext.jsx (CÓDIGO COMPLETO Y FINAL)

import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el Contexto
export const AuthContext = createContext();

// 2. Crear el Proveedor (Provider)
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Efecto para verificar el estado de login al cargar la app
    useEffect(() => {
        const storedName = localStorage.getItem('userFullName');
        const storedEmail = localStorage.getItem('registeredEmail');
        if (storedName && storedEmail) {
            // Si hay datos guardados, el usuario está logueado
            setIsLoggedIn(true);
            setUser({ name: storedName, email: storedEmail });
        }
    }, []);

    // Función para manejar el Login
    const login = (userData) => {
        // Guardamos el nombre y email en localStorage
        localStorage.setItem('userFullName', userData.name);
        localStorage.setItem('registeredEmail', userData.email); 
        
        setIsLoggedIn(true);
        setUser(userData);
    };

    // Función para manejar el Logout
    const logout = () => {
        // Limpiamos todos los datos de sesión y credenciales
        localStorage.removeItem('userFullName');
        localStorage.removeItem('registeredEmail');
        localStorage.removeItem('registeredPassword'); 
        localStorage.removeItem('registeredName'); 
        
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);