import getPool from "../db/getPool.js";

//Funcion para tener el usuario por su email
const getUserByEmail = async (email) => {
  const pool = await getPool();
  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return user[0];
};

//Funcion para crear un usuario
const createUser = async (username, password, email) => {
  const pool = await getPool();
  const result = await pool.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, password, email]
  );
  return result.insertId;
};
//Exportamos las funciones para usar en otros archivos ()
export { getUserByEmail, createUser };
