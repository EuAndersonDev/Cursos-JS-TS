
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }
  
};

export default new AlunoController();
