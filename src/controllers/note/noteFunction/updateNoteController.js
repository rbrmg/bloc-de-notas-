//MÓDULO DE FUNCIONAMIENTO DE MODIFICACIÑON DE NOTAS

// Importamos las funciones del modelo de notas
import pool from '../../../db/getPool.js'; 

//NOTAS//
//Función modificamos una nota
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
  
//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default updateNote ;

 /* EJEMPLO STEFANO
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
  });*/