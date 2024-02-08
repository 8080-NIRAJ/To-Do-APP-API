
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController.js');
const taskController = require('./controller/taskController.js');
const sequelize = require('./model/db.js');

const app = express();
app.use(bodyParser.json());

// Routes
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.post('/users/:userId/tasks', taskController.createTask);
app.get('/users/:userId/tasks', taskController.getTasksByUser);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);


(async () => {
  await sequelize.sync();
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})();