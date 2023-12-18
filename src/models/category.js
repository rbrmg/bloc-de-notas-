import getPool from "../db/getPool.js";

//función para obtener todas las categorias
const getAllCategories = async () => {
  const pool = await getPool();
  const categories = await pool.query("SELECT * FROM categories");
  return categories;
};

//Exportamos la funcion para usar en otros archivos ()
export { getAllCategories };
