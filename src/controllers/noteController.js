// Importamos las funciones del modelo de notas

//Función obtenemos listado de gategorias
const getCategoriesController = (req, res) => {
  // aqui tengo que leer las categorias desde DB
  res.status(200).send({
    status: "ok",
    message: "Listado categorias",
    data: []
  });
}

//Función detalle de nota
router.get("/notes/:id", (req, res) => {
  // aqui me connecto al DB
  res.status(200).send({
    status: "ok",
    message: "Detalle nota",
    data: {
      id: req.params.id,
    },
  });
});

//Función creamos la nota
router.post("/notes", (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: "ok",
    message: "Nota creada",
    data: {
      id: "1",
      title: req.body.title,
      text: req.body.text,
      categoriaId: req.body.categoriaId,
    },
  });
});

//Función modificamos la nota
router.put("/notes", (req, res) => {
  // aqui me connecto al DB
  res.status(200).send({
    status: "ok",
    message: "Nota modificada",
    data: {
      id: "1",
      title: req.body.title,
      text: req.body.text,
      categoriaId: req.body.categoriaId,
    },
  });
});


router.get("/notes", (req, res) => {
  // aqui me connecto al DB
  console.log(req.query);
  res.status(200).send({
    status: "ok",
    message: "Listado notas",
    data: [],
  });
});



// Exportamos las funciones para su uso en las rutas()
export { getCategoriesController,};
