const express = require('express');
const tasks_controller = require('../controllers/tasks_controller');
const TasksController = require('../controllers/tasks_controller');
let router = express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.route('/tasks/:id').get(TasksController.show).put(TasksController.update);
module.exports = router;