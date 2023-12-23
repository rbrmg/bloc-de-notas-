//MÓDULO DE VALIDACION DEL JWT, protección de la ruta.

import jwt from 'jsonwebtoken';
import { generateToken, verifyToken } from './jwt.js';

const validateAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('Token not found');
    }

    let tokenPayload;

    try {
      // Primero intentamos usar jwt.verify
      tokenPayload = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (jwtError) {
      // Si jwt.verify falla, intentamos con verifyToken
      tokenPayload = verifyToken(authorization, process.env.JWT_SECRET);
    }

    req.auth = tokenPayload;
    next();
  } catch (error) {
    next(error);
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
