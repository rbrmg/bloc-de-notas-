//Módulo Endpoints de notas

//Importamos módulos de funciones 
import express from 'express'
import { getCategoriesController } from '../controllers/noteController.js';

const router = express.Router()

//Endpoint de los archivos(noteController.js)
 router.post('/notes', routes);
 router.get('/notes',routes);
 router.get('/notes/:id', routes);
 router.put('/notes/:id', routes);

router.get("/categories", getCategoriesController );

//Exportamos rutas (index.routes.js)
export default router
