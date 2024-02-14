import React, { useState } from "react";
import { deleteNote } from "../services";

const DeleteNote = ({ noteId, onDelete }) => {
  const [loading, setLoading] = useState(false); //

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await deleteNote(noteId);
      console.log(response);
      onDelete();
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Eliminando nota...</p>
      ) : (
        <button onClick={handleDelete}>Eliminar Nota</button>
      )}
    </div>
  );
};

export default DeleteNote;
