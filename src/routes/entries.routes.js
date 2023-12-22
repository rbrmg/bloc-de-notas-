import express from 'express'
import { getCategoriesController } from '../controllers/noteController.js';

const router = express.Router()

 app.post('/notes', routes);
 app.get('/notes',routes);
 app.get('/notes/:id', routes);
 app.put('/notes/:id', routes);

router.get("/categories", getCategoriesController );
//End points
// app.get('/categories',getCategoriesController);

export default router
