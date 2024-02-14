import React from "react";

const Note = ({ note, onEdit, onRemove }) => {
  return (
    <div
      className="note"
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "5px",
      }}
    >
      <p>{note.content}</p>
      <div>
        <button onClick={() => onEdit(note.id)}>Editar</button>
        <button onClick={() => onRemove(note.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Note;
