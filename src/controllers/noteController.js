//Módulo de funcionamiento de notas y busquedas

// Importamos las funciones del modelo de notas

//BUSQUEDA CATEGORIAS//
//Función obtenemos listado de gategorias
const getCategoriesController = async (req, res) => {
  try {
    // Consultamos para obtener categorías 
    const categories = await pool.query('SELECT name FROM categorias');
    
    // Verificarmos si se encontraron categorías en la bd
    if (categories && categories.length > 0) {
      // Extraemos solo los nombres de las categorías de los resultados
      const categoryNames = categories.map(category => category.name);
      
      // Enviamos respuesta con el listado de categorías
      res.status(200).send({
        status: "ok",
        message: "Listado categorías",
        data: categoryNames//Revisarlo
      });
    } else {
      // Si no se encontraron, enviarmos error 
      res.status(404).send({
        status: "error",
        message: "No se encontraron categorías"
      });
    }
  } catch (error) {
    // Manejamos error que ocurra 
    console.error("Error al obtener categorías:", error);
    
    // Enviamos un error 500 en caso de error interno del servidor
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al obtener categorías"
    });
  }
}
/*router.get("/notes", (req, res) => {
  // aqui me connecto al DB
  console.log(req.query);
  res.status(200).send({
    status: "ok",
    message: "Listado notas",
    data: [],
  });
});*/

//NOTAS//
//Función creamos la nota
const createNote = (req, res) => {
  // Extraemos los datos de la solicitud
  const { title, text, categoriaId, userId } = req.body;

  // Validamos que nos proporciono todos los campos necesarios
  if (!title || !text || !categoriaId || !userId) {
    return res.status(400).send({
      status: "error",
      message: "Todos los campos (title, text, categoriaId, userId) son requeridos."
    });
  }

  // Creamos una nueva nota en la base de datos
  pool.query(
    'INSERT INTO notas (title, text, categoriaId, userId) VALUES (?, ?, ?, ?)',
    [title, text, categoriaId, userId],
    (error, results) => {
      if (error) {
        console.error("Error al crear la nota:", error);
        return res.status(500).send({
          status: "error",
          message: "Error interno del servidor al crear la nota."
        });
      }

      // Devolvemos la respuesta con los datos de la nota creada
      res.status(201).send({
        status: "ok",
        message: "Nota creada exitosamente.",
        data: {
          id: results.insertId,  // ID generado automáticamente por la bd
          title,
          text,
          categoriaId,
          userId
        }
      });
    }
  );
};
/*router.post("/notes", (req, res) => {
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
});*/

//Función modificamos la nota
const updateNote = (req, res) => {
  // Extraemos los datos de la solicitud
  const { id } = req.params;  // Suponiendo que el ID de la nota está en los parámetros de la ruta
  const { title, text, categoriaId } = req.body;

  // Validar que se proporcionen todos los campos necesarios
  if (!id || !title || !text || !categoriaId) {
    return res.status(400).send({
      status: "error",
      message: "Todos los campos (id, title, text, categoriaId) son requeridos."
    });
  }

  // Modificar la nota en la base de datos
  pool.query(
    'UPDATE notas SET title=?, text=?, categoriaId=? WHERE id=?',
    [title, text, categoriaId, id],
    (error, results) => {
      if (error) {
        console.error("Error al modificar la nota:", error);
        return res.status(500).send({
          status: "error",
          message: "Error interno del servidor al modificar la nota."
        });
      }

      // Devolver la respuesta con los datos de la nota modificada
      res.status(200).send({
        status: "ok",
        message: "Nota modificada exitosamente.",
        data: {
          id,
          title,
          text,
          categoriaId
        }
      });
    }
  );
};
/*router.put("/notes", (req, res) => {
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
});*/

//CONSULTAS//
const getNoteDetail = (req, res) => {
  // Extraemos el ID de la nota de los parámetros de la ruta
  const { id } = req.params;

  // Validamos que se proporcione un ID válido
  if (!id) {
    return res.status(400).send({
      status: "error",
      message: "El parámetro 'id' es requerido."
    });
  }

  // Consultamos la bd para obtener el detalle de la nota
  pool.query(
    'SELECT notas.*, categorias.name AS categoriaName, users.userName AS userName FROM notas INNER JOIN categorias ON notas.categoriaId = categorias.id INNER JOIN users ON notas.userId = users.id WHERE notas.id = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error("Error al obtener el detalle de la nota:", error);
        return res.status(500).send({
          status: "error",
          message: "Error interno del servidor al obtener el detalle de la nota."
        });
      }

      // Verificamos si se encontró la nota
      if (results && results.length > 0) {
        const noteDetail = results[0];
        res.status(200).send({
          status: "ok",
          message: "Detalle de la nota obtenido exitosamente.",
          data: noteDetail
        });
      } else {
        res.status(404).send({
          status: "error",
          message: "No se encontró la nota con el ID proporcionado."
        });
      }
    }
  );
};
//Función detalle de nota
/*router.get("/notes/:id", (req, res) => {
  // aqui me connecto al DB
  res.status(200).send({
    status: "ok",
    message: "Detalle nota",
    data: {
      id: req.params.id,
    },
  });
});*/

//exportamos funciones a rutas (entries.routes.js)
export { getCategoriesController,};
