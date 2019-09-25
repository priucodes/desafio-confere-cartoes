import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.INTEGER,
        description: Sequelize.STRING,
        type_transaction: Sequelize.STRING,
        installments: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Transaction;
