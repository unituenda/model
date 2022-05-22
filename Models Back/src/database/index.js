import Sequelize from 'sequelize';
import User from '../app/modules/users/models/users';
import News from '../app/modules/news/models/news';

import databaseConfig from '../config/database';

const models = [User, News];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
