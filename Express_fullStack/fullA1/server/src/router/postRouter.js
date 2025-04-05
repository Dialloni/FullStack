const express = require('express');
const { getPosts, createPost } = require('../controller/postController.js');

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);

module.exports = router;