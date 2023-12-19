// cambios a ver si funciona p
//cuidado con el import de express (creo que esta inoperativo)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from './src/routes/index.routes.js';

dotenv.config();

// voy a leer el puerto en .env
const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);



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
