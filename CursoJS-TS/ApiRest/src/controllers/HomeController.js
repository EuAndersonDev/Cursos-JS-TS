import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Anderson',
      sobrenome: 'Reis',
      email: 'anderson.reis@example.com',
      idade: 30,
      peso: 80.5,
      altura: 1.75
  });
    return res.json(novoAluno);
  }
};

export default new HomeController();
