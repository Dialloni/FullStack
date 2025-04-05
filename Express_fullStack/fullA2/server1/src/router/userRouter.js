const express = require('express');
const { getUsers, createUser, getUserById } = require('../controller/userController.js');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);

module.exports = router;