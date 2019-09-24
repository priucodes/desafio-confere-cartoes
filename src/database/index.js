import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Card from '../app/models/Card';

// Create an array with the models
const models = [User, Card];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Connecting to the DB
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
