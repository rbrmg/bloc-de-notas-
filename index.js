//MÓDULO PRINCIPAL DE LA APP DE NOTAS

// Importaciones de dependencias 
import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

//Importaciones de módulos propios
import validateAuth from './src/middleware/validateAuth.js'; //Validación del JWT
import errorHandler from '../app-notas-texto/src/middleware/errorHandler.js'; //Gestión de errores
import validateHelper from './src/helpers/validate.helper.js' // Gestión de errores
import router from './src/routes/index.routes.js'; // Endpoints
import {
    newUserSchema,
    editUserPasswordSchema,
    loginuserSchema,
    newEntrySchema,
    voteEntrySchema,
    passwordRecoverSchema,
    validateUserSchema,
    imgSchema,
    errorMsg,
    errorMsgUsername,
    errorMsgPassword
  } from './schemas';//Esquemas
  
dotenv.config(); //Configuración de variables de entorno


const app = express(); //Iniciamos la aplicación con Express
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); //Permitimos CORS
app.use(express.json()); //Parseamos body de las solicitudes a JSON
app.use(validateAuth);//Validación de JWT
app.use(validateHelper);

// Rutas
app.use(router);

//Schemas
app.use(newUserSchema,
  editUserPasswordSchema,
  loginuserSchema,
  newEntrySchema,
  voteEntrySchema,
  passwordRecoverSchema,
  validateUserSchema,
  imgSchema,
  errorMsg,
  errorMsgUsername,
  errorMsgPassword);



app.use(errorHandler);//Manejo de errores (último!!)

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});