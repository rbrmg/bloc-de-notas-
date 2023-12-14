//cuidado con el import de express (creo que esta inoperativo)
import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import cors from "cors";
// import errors from "./src/controllers/controladorDeUsuarios"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(process.env.UPLOADS_DIR));
app.use(fileUpload());
app.use(routes);
app.use(errorController);

app.listen(3000, () => {
  console.log("Server running on port 3000: http://localhost:8080");
});
