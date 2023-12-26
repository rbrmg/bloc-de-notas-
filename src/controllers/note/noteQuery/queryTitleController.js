//MÓDULO DE FINCIONAMIENTO DE CONSULTA DE NOTA POR TÍTULO

// Importamos las funciones del modelo de notas
import pool from '../../../db/getPool.js'; 

//CONSULTAS//
//Función para obtener nota por título
const getUserNotes = async (req, res) => {
    const userId = req.user.id; // FALTA middleware de autenticación que establece el usuario en el objeto de solicitud (req.user)
  
    try {
      // Consultamos bd para obtener las notas del usuario
      const notes = await pool.query(
        'SELECT id, title FROM notas WHERE userId = ?',
        [userId]
      );
  
      // Verificamos si el usuario tiene notas
      if (notes.length === 0) {
        return res.status(404).send({
          status: 'error',
          message: 'No se encontraron notas para este usuario.'
        });
      }
  
      // Enviamos respuesta con las notas del usuario
      res.status(200).send({
        status: 'ok',
        data: notes
      });
  
    } catch (error) {
      console.error('Error al obtener las notas del usuario:', error);
      res.status(500).send({
        status: 'error',
        message: 'Error interno del servidor al obtener las notas del usuario.'
      });
    }
  };
  
  export default getUserNotes ;