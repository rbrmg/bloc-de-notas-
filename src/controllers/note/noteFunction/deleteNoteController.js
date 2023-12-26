//MÓDULO DE FUNCIONAMIENTO DE BORRADO DE NOTAS

// Importamos las funciones del modelo de notas
import pool from '../../../db/getPool.js'; 


//NOTAS//
//Función borrarmos una nota  
const deleteNoteForUser = (req, res) => {
    // Extraemos el ID  y el ID del usuario desde el cuerpo de la solicitud
    const { id } = req.params;
    const userId = req.body.userId; // Asume que el usuario ha iniciado sesión y envía su ID en el cuerpo
  
    // Verificamos que se proporcionó un ID de nota y un ID de usuario válidos
    if (!id || !userId) {
      return res.status(400).send({
        status: "error",
        message: "Los parámetros 'id' y 'userId' son requeridos."
      });
    }
  
    
    // Eliminamos en la bd, aseguramos que el usuario tenga permiso para eliminar la nota
    pool.query(
      'DELETE FROM notas WHERE id = ? AND userId = ?',
      [id, userId],
      (error, results) => {
        if (error) {
          console.error("Error al eliminar la nota:", error);
          return res.status(500).send({
            status: "error",
            message: "Error interno del servidor al eliminar la nota."
          });
        }
  
        // Verificamos si se eliminó la nota
        if (results.affectedRows > 0) {
          res.status(200).send({
            status: "ok",
            message: "Nota eliminada exitosamente."
          });
        } else {
          res.status(403).send({  // 403 Forbidden: el usuario no tiene permiso para borrar la nota
            status: "error",
            message: "No tienes permiso para eliminar esta nota o la nota no existe."
          });
        }
      }
    );
  };
  
//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export  default deleteNoteForUser ;