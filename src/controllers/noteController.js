// Importamos las funciones del modelo de notas
import {
  getNotesByUserId,
  createNote,
  updateNote,
  deleteNote,
} from "../models/note.js";

// Obtener todas las notas de un usuario
const getNotes = async (req, res) => {
  try {
    const userId = req.user.id; // ID del usuario obtenido después de la autenticación
    const notes = await getNotesByUserId(userId);
    return res.status(200).json({ status: "ok", data: notes });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Agregar una nueva nota
const addNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, text, categoryId } = req.body;
    const noteId = await createNote(userId, title, text, categoryId);
    return res
      .status(201)
      .json({ status: "ok", message: "Nota creada", data: { id: noteId } });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Modificar una nota existente
const editNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const { title, text, categoryId, isPublic } = req.body; // Añadido: Se obtiene el valor de isPublic desde el cuerpo de la solicitud
    await updateNote(noteId, title, text, categoryId, isPublic); // Añadido: Se pasa isPublic a la función de actualización
    return res.status(200).json({ status: "ok", message: "Nota modificada" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Eliminar una nota por su ID
const removeNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    // Antes de eliminar la nota, podrías verificar si el usuario tiene permisos para eliminarla
    // (por ejemplo, asegurándote de que el usuario que realiza la solicitud sea el propietario de la nota)
    await deleteNote(noteId);
    return res.status(200).json({ status: "ok", message: "Nota eliminada" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

// Exportamos las funciones para su uso en las rutas
export { getNotes, addNote, editNote, removeNote };
