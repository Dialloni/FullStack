const express = require('express');
const router = express.Router();
const {getAllBooks, findBookbyId} = require("../controllers/books");

router.get("/books",getAllBooks );
router.get("/books/:id",findBookbyId);


module.exports = router;
// Compare this snippet from express-recipes/src/controllers/books.js:cd