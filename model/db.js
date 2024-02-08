const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', 'nrj', {
  dialect: 'mysql',
  host:"localhost"
});

module.exports = sequelize;