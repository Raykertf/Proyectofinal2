// src/context/CartContext.js
import React, { createContext, useState, useEffect, useContext} from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.idProducto === product.idProducto);

        if (existingProduct) {
        // Si existe, incrementa la cantidad
        setCartItems(cartItems.map(item => 
            item.idProducto === product.idProducto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ));
        } else {
        // Si no existe, añade el nuevo producto con cantidad 1
        setCartItems([...cartItems, { ...product, cantidad: 1 }]);
        }

        setSuccessMessage(`${product.nombre} agregado al carrito.`);
            setTimeout(() => {
            setSuccessMessage('');
            }, 3000); //
    };


    // Actualización de removeFromCart para eliminar solo el producto seleccionado
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.idProducto !== productId));
    };

    const getTotal = () => {
        return cartItems.reduce((accumulator, item) => {
          return accumulator + parseFloat(item.precio) * item.cantidad; // Multiplica por la cantidad
        }, 0);
      };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal, successMessage }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

