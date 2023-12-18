import getPool from "../db/getPool.js";

const getUserByEmail = async (email) => {
  const pool = await getPool();
  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return user[0];
};

const createUser = async (username, password, email) => {
  const pool = await getPool();
  const result = await pool.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, password, email]
  );
  return result.insertId;
};

export { getUserByEmail, createUser };
