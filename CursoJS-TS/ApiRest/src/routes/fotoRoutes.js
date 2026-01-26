import { Router } from 'express';
import FotoController from '../controllers/FotoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = new Router();

router.post('/', authMiddleware, FotoController.store);

export default router;
