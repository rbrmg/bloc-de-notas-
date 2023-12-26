//MÓDULO PRINCIPAL DEL PROYECTO


//Import de dependencias y módulos propios
import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';


//Propios
import validateAuth from '../app_bloc_de_notas/src/middleware/validateAuth.js';
import errorHandler from '../app_bloc_de_notas/src/middleware/errorHandler.js';
import validateHelperMiddleware from '../app_bloc_de_notas/src/helpers/validate.helper.js'
import router from '../app_bloc_de_notas/src/routes/index.routes.js'; // Importamos rutas
/*import {
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
  } from '../app_bloc_de_notas/src/schemas/indexSchemas.js';*/

dotenv.config() //Configuración de variables de entorno (.env)
const {PORT} = process.env 
const app = express(); //Iniciamos la aplicación con Express

// Middlewares
app.use(cors()); //Permitimos CORS
app.use(express.json()); //Parseamos body de las solicitudes a JSON
app.use(validateAuth);//Validación de JWT
app.use(validateHelperMiddleware);

// Rutas
app.use(router);

/*//Schemas
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
  errorMsgPassword); */



app.use(errorHandler);//Manejo de errores (último!!)

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });