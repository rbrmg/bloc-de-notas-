//MÓDULO PARA EL MANEJO DE ERRORES

const errorHandler = (error, req, res, next) => {
    // Si el error proviene de un jwt.verify, es un error de token no válido o expirado
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }
  
    //Otros tipos de errores
    // Si es un error 404 (ruta no encontrada)
    if (error.status === 404) {
        return res.status(404).json({
          status: 'error',
          message: 'NOT FOUND'
        });
      }
    
      // Errores no reconocidos o de otro tipo, responde genéricamente con el error 500
      return res.status(500).json({
        status: 'error',
        message: error.message || 'Ocurrió un error interno en el servidor'
      });
    };
    
  //Exportamos gestion de errores a(index.js)  
  export default errorHandler;