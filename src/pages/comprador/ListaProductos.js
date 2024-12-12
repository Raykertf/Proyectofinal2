import React, { useContext , useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchProductos } from "../../api/apiProductos";
import Sidebar from '../../components/sidebar';
import "./DetallesVendedor.css";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/Header"; 
import { useCart } from '../../context/CartContext';

const ListaProductos = () => {
    const { addToCart, successMessage } = useCart();
    const handleAddToCart = (producto) => {
        addToCart(producto);
    };
    const { vendedorId} = useParams();
    const location = useLocation();
    const { usuario } = location.state || {};
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const data = await fetchProductos();
                setProductos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        obtenerProductos();
    }, [vendedorId]);


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
        <h1 className="title2">{usuario || "General"} </h1>
        <div className="producto-list" >
        {productos.map((producto) => (
            <div className="producto-card" key={producto.idProducto}>
                <img src="https://images.vexels.com/content/205437/preview/online-shopping-sale-stroke-icon-d2e336.png" alt="img" className="producto-image" />
                <h2>{producto.nombre}</h2> {/* Nombre del vendedor */}
                <p>Detalles: {producto.descripcion}</p> {/* Descripción del vendedor */}
                <p>Precio: {producto.precio}</p> {/* Descripción del vendedor */}
                <button onClick={() => handleAddToCart(producto)}>Agregar al Carrito</button>
                {/* Agrega más información según tu entidad Vendedor */}
            </div>
        ))}
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button onClick={() => navigate(-1)} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
                Regresar
            </button>
    </div>
  );
};

export default ListaProductos; 