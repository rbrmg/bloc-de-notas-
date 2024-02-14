import React, { useEffect, useState } from "react";
import { editNote, getAllCategories, getNoteById } from "../services/index";
import { useUser } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function EditNote() {
  let { noteId } = useParams();
  const [categories, setCategories] = useState([]);
  const [noteData, setNoteData] = useState({
    title: "",
    detail: "",
    text: "",
    categoriaId: "",
  });
  const navigate = useNavigate();

  const [user] = useUser();

  const fetchNote = async () => {
    const noteObjet = await getNoteById(user.token, noteId);
    setNoteData(noteObjet.data);
  };

  const fetchCategories = async () => {
    const categoriesObjet = await getAllCategories(user.token);
    setCategories(categoriesObjet.data);
  };

  useEffect(() => {
    fetchNote();
    fetchCategories();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await editNote(noteData, user.token);
      console.log(response);
      if (response.status == "ok") {
        console.log("Nota creada exitosamente");
        navigate("/notes");
      } else {
        console.error("Error al crear la nota");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={noteData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Detalle:
        <input
          type="text"
          name="detail"
          value={noteData.detail}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Texto:
        <textarea name="text" value={noteData.text} onChange={handleChange} />
      </label>
      <br />
      <label>
        Categoría ID:
        <select
          value={noteData.categoriaId}
          name="categoriaId"
          onChange={handleChange}
        >
          <option value="">selecione una categoria</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Editar Nota</button>
    </form>
  );
}

export default EditNote;
