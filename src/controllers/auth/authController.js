//MÓDULO PARA JWT

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/authConfig');

//Registramos un nuevo usuario
exports.register = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const userId = await User.create(email, password);
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    res.status(500).send({ error: 'Error al registrar el usuario' });
  }
};

//Iniciamos sesión
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({ error: 'Credenciales incorrectas' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    res.status(500).send({ error: 'Error al iniciar sesión' });
  }
};