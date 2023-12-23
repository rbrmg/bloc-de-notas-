//Módulo de funcionamiento logueo de usuario

// Importamos las funciones del usuario.
import pool from '../db/getPool.js'; 
//import validateAuth from '../middleware/validateAuth.js';
import jwt from 'jsonwebtoken';

//Función logueamos el usuario
const jwt = require('jsonwebtoken'); 

const loginController = (req, res) => {
  // Extraemos datos del cuerpo de la solicitud
  const { email, password } = req.body;

  // Validamos que proporciono los campos necesarios
  if (!email || !password) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password) son requeridos.'
    });
  }

  // Verificamos las credenciales contra la bd
  pool.query(
    'SELECT * FROM users WHERE email = ? AND password = ?', // ¡CUIDADO GESTIONAR GUARDADO CONTRASEÑAS!
    [email, password],
    (error, results) => {
      if (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).send({
          status: 'error',
          message: 'Error interno del servidor al iniciar sesión.'
        });
      }

      if (results && results.length > 0) {
        // Generamos token de autenticación 
        const token = jwt.sign({ userId: results[0].id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

        // Devolvemos token y detalles del usuario
        res.status(200).send({
          status: 'ok',
          message: 'Inicio de sesión exitoso.',
          token: token,
          userId: results[0].id,
          userName: results[0].userName
        });
      } else {
        res.status(401).send({
          status: 'error',
          message: 'Credenciales incorrectas.'
        });
      }
    }
  );
};
/*const loginController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Login',
    data: {
      token: 'dfsgdrfgsdf',
    },
  });
};*/

//exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export { loginController };