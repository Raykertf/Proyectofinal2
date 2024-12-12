// src/pages/CartPage.js
import React, { useContext, useState } from 'react';
import { useCart } from '../../context/CartContext';
import Sidebar from '../../components/sidebar';
import Header from "../../components/Header"; 
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = (isOpen) => {
      setSidebarOpen(isOpen);
    };

    return (
        <div className="cart-page-container">
            <Header toggleSidebar={toggleSidebar} /> {/* Usa el componente Header */}
            {/* Barra lateral */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.idProducto}>
                            <div className="cart-item-info">
                                <span className="cart-item-name">{item.nombre}</span>
                                <span className="cart-item-price">${parseFloat(item.precio).toFixed(2)}</span>
                                <span className="cart-item-quantity">Cantidad: {item.cantidad}</span> {/* Muestra la cantidad */}
                            </div>
                            <button onClick={() => removeFromCart(item.idProducto)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <h3>Total: ${getTotal()}</h3>
            </div>
            <button onClick={() => navigate(-1)} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
                Regresar
            </button>
        </div>
    );
};

export default CartPage;
