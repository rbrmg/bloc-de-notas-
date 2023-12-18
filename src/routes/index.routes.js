import express from 'express';
import userRoutes from './user.routes.js';
import entriesRoutes from './entries.routes.js';

const router = express.Router();
router.use(userRoutes);
router.use(entriesRoutes);

export default router;