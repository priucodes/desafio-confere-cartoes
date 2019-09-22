module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'desafio-confere',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
