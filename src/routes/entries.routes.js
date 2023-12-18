import express from 'express'

import {
  authUser,
  userExists,
  newEntry,
  entryExists,
  canEdit,
  addPhoto,
  deletePhoto,
  voteEntry
} from '../middlewares/index.middleware.js'

const router = express.Router()

//Ruta para nueva publicacion
router.post('/entries', authUser, userExists, newEntry)

//Ruta para agregar foto
router.post(
  '/entries/:entryId/photos',
  authUser,
  userExists,
  entryExists,
  canEdit,
  addPhoto
)

//Ruta para eliminar una foto
router.delete(
  '/entries/:entryId/photos/:photoId',
  authUser,
  userExists,
  entryExists,
  canEdit,
  deletePhoto
)

//Ruta para dar Like
router.post(
  '/entries/:entryId/votes',
  authUser,
  userExists,
  entryExists,
  voteEntry
)

//Ruta para obtener listado de publiciones AUTHENTCADO!!! No necesario validar usuario existente

//Ruta para obtener una publicacion AUTENTICADO!!! Y validar que la entrada exista, No necesario validar usuario existente

export default router
