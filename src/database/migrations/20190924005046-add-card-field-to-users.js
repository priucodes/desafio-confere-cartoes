module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'card_id', {
    type: Sequelize.INTEGER,
    references: { model: 'cards', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  }),

  down: (queryInterface) => queryInterface.removeColumn('users', 'card_id'),
};
