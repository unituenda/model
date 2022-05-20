// arquivo responsavel por carregar todos os models e fazer a conexao com a base dedados
import Sequelize from 'sequelize';
import User from '../app/models/users';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();hajdamodel
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection));
  }
}

export default new Database();
