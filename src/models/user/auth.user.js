//MÓDULO DE MODEL Y OPERACIONES CON USUARIOS DE LA BD
/*
const pool = require('./dbConfig');
const bcrypt = require('bcryptjs');

const User = {};

// Creamos un nuevo usuario
User.create = (email, password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], (err, results) => {
      if (err) return reject(err);
      resolve(results.insertId);
    });
  });
};

// Buscamos usuario por email
User.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

// Exportar el modelo de usuario
module.exports = User;*/