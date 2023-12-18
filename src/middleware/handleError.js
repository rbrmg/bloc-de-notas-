//Módulo de  Middleware que gestiona todos los errores.

const handleError = (error, req, res, next) => {
  console.error(error);

  // Ante el error que se llama "ValidationError" (error tirado por Joi), le ponemos un statusCode 400
  if (error.name === 'ValidationError') {
    error.statusCode = 400;
  }

  // Enviamos una respuesta con el statusCode que venga en el error, pero si este no existe, mandamos el status 500
  res
    .status(error.statusCode || 500)
    .send({ status: 'error', message: error.message });
};

//Exportamos middleware para usar en otros archivos()
module.exports = handleError;
