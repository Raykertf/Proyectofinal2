// src/pages/Explore.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchVendedores } from "../../api/apiVendedores";
import Sidebar from '../../components/sidebar';
import "./ListaVendedores.css";
import Header from "../../components/Header"; // Importa el nuevo componente de cabecera

const ListaVendedores = () => {
    const [vendedores, setVendedores] = useState([]); // Estado para almacenar la lista de vendedores
    const [loading, setLoading] = useState(true); // Estado para controlar la carga
    const [error, setError] = useState(null); // Estado para manejar errores
  
    // Efecto para obtener la lista de vendedores al montar el componente
    useEffect(() => {
      const getVendedores = async () => {
        try {
          const data = await fetchVendedores(); // Llama a la función para obtener vendedores
          setVendedores(data); // Establece los vendedores en el estado
        } catch (error) {
          setError("Error al cargar vendedores"); // Manejo de errores
        } finally {
          setLoading(false); // Finaliza el estado de carga
        }
      };
  
      getVendedores(); // Llama a la función para obtener vendedores
    }, []);


  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  return (
    <div className="explore-container">
      <Header toggleSidebar={toggleSidebar} /> {/* Usa el componente Header */}

      {/* Barra lateral */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Contenido principal */}
        <div className="vendedor-list">
        {vendedores.map((vendedor) => (
          
          <Link to={{
            pathname: `/comprador/vendedor/${vendedor.idVendedor}`, 
            state: {usuario: vendedor.usuario}
            }} 
            key={vendedor.id} className="vendedor-card">
            <div key={vendedor.id} className="vendedor-card">
            <img src="https://imgs.search.brave.com/GzBLOrvEddmycMGv48pGO8MpqtWvIO7JMxrUKaUXdfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzIyMzM2NS9p/c29sYXRlZC9wcmV2/aWV3LzZiMmE3MDMw/MzE2YzkzNTcwMmRj/MjNiNGQzODM4MDlk/LWVkaWZpY2lvLWRl/LXRpZW5kYS1wbGFu/by5wbmc" alt="img" className="vendedor-image" />
            <h2>{vendedor.usuario}</h2> {/* Nombre del vendedor */}
            <p>Telefono: {vendedor.telefono}</p> {/* Descripción del vendedor */}
            {/* Agrega más información según tu entidad Vendedor */}
            </div>
            </Link>
        ))}
        </div>
    </div>
  );
};

export default ListaVendedores;

