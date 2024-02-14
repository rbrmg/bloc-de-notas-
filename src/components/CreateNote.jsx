import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote, getAllCategories } from "../services/index";
import { useUser } from "../context/UserContext";

function CreateNote() {
  const [categories, setCategories] = useState([]);
  const [noteData, setNoteData] = useState({
    title: "",
    detail: "",
    text: "",
    categoriaId: "",
  });
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const categoriesObjet = await getAllCategories(user.token);
    setCategories(categoriesObjet.data);
  };

  useEffect(() => {
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
      const response = await createNote(noteData, user.token);
      console.log(response);
      if (response.status === "ok") {
        console.log("Nota creada exitosamente");
        navigate("/notes"); // Redirige a la página de notas después de crear la nota
      } else {
        console.error("Error al crear la nota");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div>
      <h2>New Note</h2>
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
          Categoría :
          <select
            value={noteData.categoriaId}
            name="categoriaId"
            onChange={handleChange}
          >
            <option value="">seleccione una categoría</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Crear Nota</button>
      </form>
    </div>
  );
}

export default CreateNote;
