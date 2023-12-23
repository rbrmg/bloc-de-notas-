//MÓDULO DE CREACIÓN  Y GESTIÓN DE JWT

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

//Función para generar un token JWT.
const generateToken = (userId) => {
  // Crear un token que expire en 24 horas
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

//Función para verificar nuevo token JWT.
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

//Exportamos las funciones a (validateAuth.js)
export { generateToken, verifyToken };