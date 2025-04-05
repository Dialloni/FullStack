const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/books', controller.getAllBooks);
router.get('/books/:id', controller.getBookById);
router.post('/books', controller.addBook);
router.put('/books/:id', controller.updateBook);
router.delete('/books/:id', controller.deleteBook);

module.exports = router;