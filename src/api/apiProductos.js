import axios from 'axios';

// Configura la URL base de tu API
const API_URL = 'http://localhost:3000/productos';

export const fetchProductos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error; // Vuelve a lanzar el error para que lo maneje el llamador
    }
};

export const fetchProductosByVendedorId = async (vendedorId) => {
    try {
        const response = await axios.get(`${API_URL}/vendedor/${vendedorId}`);
        return response.data; // Retorna la lista de productos
    } catch (error) {
        console.error('Error al obtener los productos del vendedor:', error);
        throw error; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

// Puedes agregar más funciones aquí para otros endpoints si es necesario
