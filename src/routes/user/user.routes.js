//MÓDULO DE ENDPOINTS DE USUARIO

//Importamos módulos de funciones 
import express from 'express';
import { loginController,registerController } from '../../controllers/user/indexUserController.js';

const router = express.Router()

//Endpoint de los archivos (userController.js)
router.post("/register", loginController);
router.post("/login", registerController);

//Exportamos rutas (index.routes.js)
export default router
