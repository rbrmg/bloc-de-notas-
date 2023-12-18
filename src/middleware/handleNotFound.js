//Módulo de  Middleware que se encarga de gestionar los errores 404 (not found)

const handleNotFound = (req, res) => {
  res.status(404).send({ status: 'error', message: 'Not found' });
};
//Exportamos middleware para usar en otros archivos()
module.exports = handleNotFound;
