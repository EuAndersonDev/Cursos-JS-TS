import { Router } from 'express';
const router = new Router();
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

//Não deveria existir em um sistema real, apenas para testes
router.post('/', UserController.store);
router.get('/', authMiddleware, UserController.index);


router.get('/', authMiddleware, UserController.show);
router.put('/', authMiddleware, UserController.update);
router.delete('/', authMiddleware, UserController.delete);

export default router;

/*
  index -> lista todos os registros
  store/create -> cria um novo registro
  delete -> apaga um registro
  show -> mostra um registro
  update -> atualiza um registro
*/
