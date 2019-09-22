import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

// Create an array with the models
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Connecting to the DB
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
