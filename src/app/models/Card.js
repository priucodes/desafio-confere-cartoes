import Sequelize, { Model } from 'sequelize';

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        expiry: Sequelize.DATE,
        cvv: Sequelize.INTEGER,
        holder: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Card;
