module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cards', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    expiry: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cvv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    holder: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('cards'),
};
