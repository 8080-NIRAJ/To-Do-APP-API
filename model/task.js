const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const Task = sequelize.define('Task', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Task;