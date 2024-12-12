// src/components/Sidebar.js
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null); // Referencia para el sidebar

  const handleClickOutside = (event) => {
    // Cierra el sidebar si el clic fue fuera del sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar(false);
    }
  };

  useEffect(() => {
    // Agrega el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <h2>Opciones</h2>
      {/* Contenido del sidebar */}
      <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/comprador">Listado de vendedores</Link></li>
          <li><Link to="/productos">Listado de productos</Link></li>
          <li><Link to="/settings">Categorias</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
