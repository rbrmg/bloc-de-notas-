const registerController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Usuario creado',
  });
};

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

export { registerController, loginController };
