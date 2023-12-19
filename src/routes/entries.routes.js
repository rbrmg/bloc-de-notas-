import express from 'express'
import { getCategoriesController } from '../controllers/noteController.js';

const router = express.Router()



router.get("/categories", getCategoriesController );

router.get("/notes/:id", (req, res) => {
  // aqui me connecto al DB
  res.status(200).send({
    status: "ok",
    message: "Detalle nota",
    data: {
      id: req.params.id,
    },
  });
});

router.post("/notes", (req, res) => {
  // aqui me connecto al DB
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

router.put("/notes", (req, res) => {
  // aqui me connecto al DB
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

router.get("/notes", (req, res) => {
  // aqui me connecto al DB
  console.log(req.query);
  res.status(200).send({
    status: "ok",
    message: "Listado notas",
    data: [],
  });
});

export default router
