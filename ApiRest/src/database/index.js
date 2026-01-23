import  Sequelize  from "sequelize";
import databaseConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import Users from "../models/Users.js";
import Foto from "../models/Foto.js";

const models = [Aluno, Users, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
