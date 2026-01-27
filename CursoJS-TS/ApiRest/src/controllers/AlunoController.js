import Aluno from '../models/Aluno.js';
import Foto from '../models/Foto.js';
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC']],
        include: { model: Foto, attributes: ['filename', 'url']}
      });
      return res.json(alunos);
    } catch (e) {
      return res.json({errors: e.message} );
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id, { attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        include: { model: Foto, attributes: ['filename', 'url']}
       });
      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno não encontrado'] });
      }
      return res.json(aluno);
    } catch (e) {
      return res.json({errors: e.message} );
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, email } = novoAluno;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ error: 'Aluno não encontrado' });
      }
      const alunoAtualizado = await aluno.update(req.body);
      const { nome, email } = alunoAtualizado;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ error: 'Aluno não encontrado' });
      }
      await aluno.destroy();
      return res.json({ message: 'Aluno deletado com sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
};

export default new AlunoController();
