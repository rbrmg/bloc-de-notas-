// Importamos las funciones del modelo de categorías
import {
  getCategoriesByUserId,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../models/category.js";

// Obtener todas las categorías de un usuario
const getCategories = async (req, res) => {
  try {
    const userId = req.user.id; // ID del usuario obtenido después de la autenticación
    const categories = await getCategoriesByUserId(userId);
    return res.status(200).json({ status: "ok", data: categories });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Agregar una nueva categoría
const addCategory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name } = req.body;
    const categoryId = await createCategory(userId, name);
    return res
      .status(201)
      .json({
        status: "ok",
        message: "Categoría creada",
        data: { id: categoryId },
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Modificar una categoría existente
const editCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { name } = req.body;
    await updateCategory(categoryId, name);
    return res
      .status(200)
      .json({ status: "ok", message: "Categoría modificada" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Eliminar una categoría por su ID
const removeCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    await deleteCategory(categoryId);
    return res
      .status(200)
      .json({ status: "ok", message: "Categoría eliminada" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Exportamos las funciones para su uso en las rutas
export { getCategories, addCategory, editCategory, removeCategory };
