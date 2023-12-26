//MÓDULO DE FUNCIONAMIENTO DE CREACIÓN DE NOTAS

// Importamos las funciones del modelo de notas
import pool from '../../../db/getPool.js'; 

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


//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default createNote ;


/* EJEMPLO STEFANO
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
});*/