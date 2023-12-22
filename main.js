//Módulo principal del proyecto

//Importamos módulos (externos para funcionamiento y propios)
import express from "express";
import cors from "cors";
import routes from './src/routes/index.routes.js';
import dotenv from "dotenv";

dotenv.config();
// voy a leer el puerto en .env
const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

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

//Aviso de server funcionando y su puerto
app.listen(PORT, () => {
  console.log(`Server running on port 3000: http://localhost:${PORT}`);
});


