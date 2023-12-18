//validacion del jsonwebtoken, proteccion de la ruta.FALTA REVISION
const jwt = require('jsonwebtoken');

const validateAuth = (req, res, next) => {
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
};

//Exportamos para usar en otros archivos()
module.exports = validateAuth;
