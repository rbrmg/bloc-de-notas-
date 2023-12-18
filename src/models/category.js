import getPool from "../db/getPool.js";

const getAllCategories = async () => {
  const pool = await getPool();
  const categories = await pool.query("SELECT * FROM categories");
  return categories;
};

export { getAllCategories };
