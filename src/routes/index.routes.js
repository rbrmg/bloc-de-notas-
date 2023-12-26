//MÓDULO PRINCIPAL DE LOS ENDPOINTS 

//Importamos módulos de Rutas
import express from 'express';
import userRoutes from './user/user.routes.js';
import entriesRoutes from './note/entries.routes.js';


const router = express.Router();

//Endpoints que vienen al principal de los archivos (entries.routes.js y user.routes.js ) 
router.use(userRoutes);
router.use(entriesRoutes);
router.use(router);

//Exportamos rutas (index.js)
export default router;


