const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/todos', controller.getAllTodos);
router.get('/todos/:id', controller.getTodoById);
router.post('/todos', controller.addTodo);
router.put('/todos/:id', controller.updateTodo);
router.delete('/todos/:id', controller.deleteTodo);

module.exports = router;