//MÓDULO DE FUNCIONAMIENTO DE CONSULTA DE NOTA POR DETALLE

// Importamos las funciones del modelo de notas
import pool from '../../../db/getPool.js'; 

//CONSULTAS//
//Función para obtener nota por detalle
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

export default getNoteDetail;