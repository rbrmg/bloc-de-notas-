'use strict';

import dotenv from "dotenv";
dotenv.config();

//cuidado con el import de express (creo que esta inoperativo)
import express from "express";
import cors from "cors";
import routes from './src/routes/index.routes.js';


//Import de los endpoint
import {
  loginController,
  registerController,
} from './src/controllers/userControllers.js';

import{ 
  getCategoriesController
} from './src/controllers/noteController.js';


// voy a leer el puerto en .env
const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//End points
app.post('/login', loginController);
app.post('/register', registerController);

app.get('/categories',getCategoriesController);

app.post('/notes', routes);
app.get('/notes/:id', routes);
app.put('/notes', routes);

app.get('/notes',routes);

//Errores
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "NOT FOUND",
  });
});

app.use((error, req, res, next)=>{
  res.status(500).send({
    status:"error",
    message: error.message
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port 3000: http://localhost:${PORT}`);
});


//pasos import de los endoints
/*
  1) USUARIOS: login y register ✅
  2) CATEGORIAS: obtener todas ✅
  3) BUSQUEDA NOTAS:(4) ?
  4) NOTA: crearla ✅
  5) NOTA: obtener detalle ✅
  6) NOTA: modificarla ✅
*/