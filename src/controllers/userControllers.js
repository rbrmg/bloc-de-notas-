// Importamos las funciones del usuario.

//Función regristramos el usuario
const registerController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Usuario creado',
  });
};

//Función logueamos el usuario
const loginController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Login',
    data: {
      token: 'dfsgdrfgsdf',
    },
  });
};

//exportamos funciones a (user.routers)
export { registerController, loginController };
