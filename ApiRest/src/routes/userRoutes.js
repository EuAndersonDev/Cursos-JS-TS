import { Router } from 'express';
const router = new Router();
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', UserController.store);
router.get('/', authMiddleware, UserController.index);
router.get('/:id', authMiddleware, UserController.show);
router.put('/:id', authMiddleware, UserController.update);
router.delete('/:id', authMiddleware, UserController.delete);

export default router;

/*
  index -> lista todos os registros
  store/create -> cria um novo registro
  delete -> apaga um registro
  show -> mostra um registro
  update -> atualiza um registro
*/
