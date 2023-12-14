//cuidado con el import de express (creo que esta inoperativo)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// voy a leer el puerto en .env
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  res.status(201).send({
    status: "ok",
    message: "Usuario creado",
  });
});

app.post("/login", (req, res) => {
  res.status(201).send({
    status: "ok",
    message: "Login",
    data: {
      token: "dfsgdrfgsdf",
    },
  });
});

app.get("/categories", (req, res) => {
  res.status(200).send({
    status: "ok",
    message: "Listado categorias",
    data: {
      categories: [
        { id: 1, name: "deporte" },
        { id: 2, name: "personal" },
      ],
    },
  });
});

app.get("/notes/:id", (req, res) => {
  res.status(200).send({
    status: "ok",
    message: "Detalle nota",
    data: {
      id: req.params.id,
    },
  });
});

app.post("/notes", (req, res) => {
  res.status(201).send({
    status: "ok",
    message: "Nota creada",
    data: {
      id: "1",
      title: req.body.title,
      text: req.body.text,
      categoriaId: req.body.categoriaId,
    },
  });
});

app.put("/notes", (req, res) => {
  res.status(200).send({
    status: "ok",
    message: "Nota modificada",
    data: {
      id: "1",
      title: req.body.title,
      text: req.body.text,
      categoriaId: req.body.categoriaId,
    },
  });
});

app.get("/notes", (req, res)=>{
  console.log(req.query)
  res.status(200).send({
    status:"ok",
    message:"Listado notas",
    data: []
  })})

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "NOT FOUND",
  });
});


app.listen(PORT, () => {
  console.log("Server running on port 3000: http://localhost:" + PORT);
});
