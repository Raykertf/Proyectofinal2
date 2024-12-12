import axios from 'axios';

// Cambia esta URL según la configuración de tu servidor
const API_URL = 'http://localhost:3000/vendedores'; 

// Función para obtener todos los vendedores
export const fetchVendedores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retorna los datos de los vendedores
  } catch (error) {
    console.error("Error fetching vendedores:", error);
    throw error; // Propaga el error para manejarlo más tarde si es necesario
  }
};

// Función para obtener un vendedor específico por ID
export const fetchVendedorById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Retorna el vendedor encontrado
  } catch (error) {
    console.error(`Error fetching vendedor with ID ${id}:`, error);
    throw error;
  }
};

// Función para crear un nuevo vendedor
export const createVendedor = async (vendedor) => {
  try {
    const response = await axios.post(API_URL, vendedor);
    return response.data; // Retorna el nuevo vendedor creado
  } catch (error) {
    console.error("Error creating vendedor:", error);
    throw error;
  }
};

// Función para actualizar un vendedor existente
export const updateVendedor = async (id, vendedor) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, vendedor);
    return response.data; // Retorna el vendedor actualizado
  } catch (error) {
    console.error(`Error updating vendedor with ID ${id}:`, error);
    throw error;
  }
};

// Función para eliminar un vendedor
export const deleteVendedor = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting vendedor with ID ${id}:`, error);
    throw error;
  }
};

