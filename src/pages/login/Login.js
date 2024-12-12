import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate para redirección
import logo from "../../img/logo.png"; 
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Usamos el hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', credentials);
      const { token, role } = response.data; // Extraer token y rol del usuario
      localStorage.setItem('token', token); // Almacenar el token
      setMessage('Login exitoso');
  
      // Redirigir según el rol
      if (role === 'vendedor') {
        navigate('/dashboard-vendedor'); // Redirige al panel del vendedor
      } else if (role === 'comprador') {
        navigate('/productos'); // Redirige al panel del comprador
      } else {
        setMessage('Rol desconocido. Contacta al administrador.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handleRegisterVendedor = () => {
    navigate('/registro-vendedor'); // Redirige al registro de vendedor
  };

  const handleRegisterComprador = () => {
    navigate('/registro-comprador'); // Redirige al registro de comprador
  };

  return (
    <div className="login-container">
      <div className="figures-container">
        <div className="figure figure-1"></div>
        <div className="figure figure-2"></div>
        <div className="figure figure-3"></div>
      </div>
      <div className="login-box">
        <img className="brand-logo" src={logo} alt="Logo de la marca" />
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
        {message && <p>{message}</p>}
        <div className="register-options">
          <p>¿No tienes cuenta?</p>
          <button onClick={handleRegisterVendedor}>Regístrate como vendedor</button>
          <button onClick={handleRegisterComprador}>Regístrate como comprador</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
