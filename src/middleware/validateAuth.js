//MÓDULO DE VALIDACION DEL JWT, protección de la ruta.

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const validateAuth = (req, res, next) => {
  // Extraer el token del encabezado de la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      status: 'error',
      message: 'Token no proporcionado.'
    });
  }

  try {
    // Verificar el token usando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adjuntar el payload decodificado al objeto de solicitud para uso posterior
    req.userId = decoded.userId;

    // Continuar con el siguiente middleware o controlador
    next();
  } catch (error) {
    console.error('Error al validar el token:', error.message);
    return res.status(401).send({
      status: 'error',
      message: 'Token inválido o expirado.'
    });
  }
};

/*const validateAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('Token not found');
    }

    const tokenPayload = jwt.verify(authorization, process.env.JWT_SECRET);

    req.auth = tokenPayload;
    next();
  } catch (error) {
    next(error);
  }
};*/

//Exportamos para usar en otros archivos(index.js)
export default validateAuth;
