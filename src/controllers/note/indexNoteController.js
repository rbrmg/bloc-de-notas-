//Módulo de unificacion de archivos Control y consulta de notas

//Importamos los módulos de notas
import createNote from './createNoteController.js';
import updateNote from './updateNoteController.js';
import deleteNoteForUser from './deleteNoteController.js'

import getNoteDetail from './queryDetailController.js'
import getUserNotes from './noteQuery/queryTitleController.js'

//exportamos funciones a rutas (entries.routers.js)
export {createNote, updateNote, deleteNoteForUser, getNoteDetail, getUserNotes};