import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.INTEGER,
        description: Sequelize.STRING,
        type_transaction: Sequelize.STRING,
        installments: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
    this.belongsTo(models.Card, { foreignKey: 'card_id' });
  }
}

export default Transaction;
