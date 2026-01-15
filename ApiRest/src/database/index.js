import  Sequelize  from "sequelize";
import databaseConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import Users from "../models/Users.js";

const models = [Aluno, Users];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
