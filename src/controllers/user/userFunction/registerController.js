//MÓDULO DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importamos las funciones del usuario.
import bcrypt from 'bcrypt'
import pool from '../../../db/getPool.js'; 

// Función para registrar un nuevo usuario.
const registerController = (req, res) => {
  // Extraemos datos del cuerpo de la solicitud.
  const { email, password, userName } = req.body;

  // Validamos que se proporcionen todos los campos necesarios.
  if (!email || !password || !userName) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password, userName) son requeridos.'
    });
  }

  // Hasheamos la contraseña antes de almacenarla.
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error al hashear la contraseña:', err);
      return res.status(500).send({
        status: 'error',
        message: 'Error interno del servidor al hashear la contraseña.'
      });
    }

    // Insertamos el nuevo usuario en la base de datos.
    pool.query(
      'INSERT INTO users (email, password, userName) VALUES (?, ?, ?)',
      [email, hash, userName],
      (error, results) => {
        if (error) {
          console.error('Error al crear el usuario:', error);
          return res.status(500).send({
            status: 'error',
            message: 'Error interno del servidor al crear el usuario.'
          });
        }

        // Devolvemos una respuesta exitosa.
        res.status(201).send({
          status: 'ok',
          message: 'Usuario creado exitosamente.',
          userId: results.insertId  // ID del usuario recién creado
        });
      }
    );
  });
};

//Exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export default registerController ;


/* EJEMPLO STEFANO
const registerController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Usuario creado',
  });
};*/