import  Sequelize ,{Model}  from "sequelize";
export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            notEmpty: { msg: 'Nome não pode ser vazio' },
          }
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            notEmpty: { msg: 'Sobrenome não pode ser vazio' },
          }
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade inválida',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso inválido',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura inválida',
          },
        },
      }
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models){
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
