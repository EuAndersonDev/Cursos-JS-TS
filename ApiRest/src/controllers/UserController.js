import User from '../models/Users';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.User.id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const user = await User.findByPk(req.User.id);
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }
      const userAtualizado = await user.update(req.body);
      const { id, nome, email } = userAtualizado;
      return res.json({ id, nome, email });
    }catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'ID não informado' });
      }
      const user = await User.findByPk(req.User.id);
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }
      await user.destroy();
      return res.json({ message: 'Usuário deletado com sucesso' });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
