// Importamos las funciones del modelo de notas


const getCategoriesController = (req, res) => {
  // aqui tengo que leer las categorias desde DB
  res.status(200).send({
    status: "ok",
    message: "Listado categorias",
    data: []
  });
}


// Exportamos las funciones para su uso en las rutas()
export { getCategoriesController,};
