//Módulo Endpoints de usuario

//Importamos módulos de funciones 
import express from 'express'
import {loginController, registerController} from "../controllers/userControllers.js"

const router = express.Router()

//Endpoint de los archivos (userControllers.js)
router.post("/register", loginController);
router.post("/login", registerController);

//Exportamos rutas (index.routes.js)
export default router
