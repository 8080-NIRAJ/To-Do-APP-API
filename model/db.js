const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', 'nrj8080', {
  dialect: 'mysql',
  host:"localhost"
});

module.exports = sequelize;
