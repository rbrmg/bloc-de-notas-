import express from 'express'
import {loginController, registerController} from "../controllers/userControllers.js"

const router = express.Router()

//Endpoints de registro y login usuario
router.post("/register", loginController);
router.post("/login", registerController);

export default router
