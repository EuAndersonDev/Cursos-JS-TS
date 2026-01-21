import { Router } from 'express';
const router = new Router();
import AlunoController from '../controllers/AlunoController.js';

router.get('/', AlunoController.index);

export default router;
