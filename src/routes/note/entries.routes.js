//MÓDULO DE ENDPOINTS DE NOTAS 

//Importamos módulos de funciones 
import express from 'express';
import { getCategoriesController } from '../../controllers/category/indexCategoriesController.js';
import { createNote, updateNote, deleteNoteForUser, getNoteDetail, getUserNotes } from '../../controllers/note/indexNoteController.js';

const router = express.Router()

//Endpoint de los archivos(noteController.js, queryCategoriesController.js y )
router.get('/categories', getCategoriesController);                                                           //Obtener listado categorias
router.post('/notes', createNote);                                                                            //Crear nota
router.put('/notes/:id', updateNote);                                                                         //Modificar nota
router.delete('/notes/:id', deleteNoteForUser);                                                               //Eliminar nota

router.get('/notes/:id', getNoteDetail);                                                                      //Obterner nota por detalle
//falta en POSTMAN
router.get('/notes/:title', getUserNotes)                                                                     //Obtener notas por título

//Exportamos rutas (index.routes.js)
export default router
