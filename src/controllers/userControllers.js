//Módulo de funcionamiento de usuario

// Importamos las funciones del usuario.

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

//exportamos funciones a rutas (user.routers.js)
export { registerController, loginController };
