// models/note.js

import getPool from "../db/getPool.js";

// Obtener todas las notas de un usuario por su ID
const getNotesByUserId = async (userId) => {
  const pool = await getPool();
  const notes = await pool.query(
    "SELECT id, title, isPublic FROM notas WHERE userId = ?",
    [userId]
  );
  return notes;
};

// Crear una nueva nota y retornar su ID
const createNote = async (userId, title, text, categoryId, isPublic) => {
  const pool = await getPool();
  const result = await pool.query(
    "INSERT INTO notas (title, text, userId, categoryId, isPublic) VALUES (?, ?, ?, ?, ?)",
    [title, text, userId, categoryId, isPublic]
  );
  return result.insertId;
};

// Actualizar una nota existente
const updateNote = async (noteId, title, text, categoryId, isPublic) => {
  const pool = await getPool();
  await pool.query(
    "UPDATE notas SET title = ?, text = ?, categoryId = ?, isPublic = ? WHERE id = ?",
    [title, text, categoryId, isPublic, noteId]
  );
};

// Eliminar una nota por su ID
const deleteNote = async (noteId) => {
  const pool = await getPool();
  await pool.query("DELETE FROM notas WHERE id = ?", [noteId]);
};

//Exportamos las funciones para usar en otros archivos ()
export { getNotesByUserId, createNote, updateNote, deleteNote };
