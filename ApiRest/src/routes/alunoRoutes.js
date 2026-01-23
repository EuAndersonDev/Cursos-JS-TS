import { Router } from 'express';
const router = new Router();
import AlunoController from '../controllers/AlunoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);
router.post('/', authMiddleware, AlunoController.store);
router.put('/:id', authMiddleware, AlunoController.update);
router.delete('/:id', authMiddleware, AlunoController.delete);

export default router;
