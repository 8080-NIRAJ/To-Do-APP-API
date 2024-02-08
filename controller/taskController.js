const Task = require('../model/task.js');

exports.createTask = async (req, res) => {
  try {
    const { description, status, dueDate, userId } = req.body;
    const task = await Task.create({ description, status, dueDate, userId });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const tasks = await Task.findAll({ where: { userId } });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, status, dueDate } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    await task.update({ description, status, dueDate });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};