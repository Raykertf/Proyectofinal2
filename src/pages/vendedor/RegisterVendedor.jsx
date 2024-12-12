import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import axios from 'axios';
import './RegisterVendedor.css';
import logo from "../../img/logo.png"; 

const RegisterVendedor = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: '',
    correo: '',
    telefono: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Inicializamos el hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register-vendedor', formData);
      setMessage(response.data.message);

      // Si el registro es exitoso, redirigimos al login
      if (response.status === 201) {
        setTimeout(() => {
          navigate('/'); // Redirigimos al login después de 2 segundos
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setMessage('Error al registrar el vendedor. Intenta de nuevo.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registro de Vendedores</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <img className="brand-logo" src={logo} alt="Logo de la marca" />
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Correo:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RegisterVendedor;
