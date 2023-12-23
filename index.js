//MÓDULO PRINCIPAL DE LA APP DE NOTAS

// Importaciones de dependencias y módulos propios
import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

//Propios
import validateAuth from './middleware/validateAuth';
import errorHandler from './middleware/errorHandler';
import validateHelper from './src/helpers/validate.helper'
import router from './src/routes/index.routes.js'; // Importamos rutas
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
  } from './schemas';
  
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