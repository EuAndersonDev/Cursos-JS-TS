import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'O nome original deve ter entre 3 e 255 caracteres',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'O nome do arquivo deve ter entre 3 e 255 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}

