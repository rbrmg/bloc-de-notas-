//Módulo de unificacion de archivos Control y consulta de notas

//Importamos los módulos de notas
import createNote from './noteFunction/createNoteController.js';
import updateNote from './noteFunction/updateNoteController.js';
import deleteNoteForUser from './noteFunction/updateNoteController.js';

import getNoteDetail from './noteQuery/queryDetailController.js';
import getUserNotes from './noteQuery/queryTitleController.js';

//exportamos funciones a rutas (entries.routers.js)
export {createNote, updateNote, deleteNoteForUser, getNoteDetail, getUserNotes};