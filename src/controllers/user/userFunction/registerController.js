//Módulo de funcionamiento de usuario

// Importamos las funciones del usuario.
import pool from '../db/getPool.js'; 

//Función regristramos el usuario
const registerController = (req, res) => {
  // Extraemos datos del cuerpo de la solicitud
  const { email, password, userName } = req.body;

  // Validamos que proporciono los campos necesarios
  if (!email || !password || !userName) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password, userName) son requeridos.'
    });
  }

  // Insertamos el nuevo usuario en la bd
  pool.query(
    'INSERT INTO users (email, password, userName) VALUES (?, ?, ?)',
    [email, password, userName],
    (error, results) => {
      if (error) {
        console.error('Error al crear el usuario:', error);
        return res.status(500).send({
          status: 'error',
          message: 'Error interno del servidor al crear el usuario.'
        });
      }

      // Devolvemos respuesta exitosa
      res.status(201).send({
        status: 'ok',
        message: 'Usuario creado exitosamente.',
        userId: results.insertId  // ID del usuario recién creado
      });
    }
  );
};
/*const registerController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Usuario creado',
  });
};*/

//exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export { registerController };
