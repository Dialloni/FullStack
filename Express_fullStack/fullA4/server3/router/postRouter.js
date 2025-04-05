const express = require('express');
const { createPost, getPosts } = require('../controllers/postController.js');
const authMiddleware = require('../middleWare/authMiddleWare.js');
const router = express.Router();

router.post('/posts', authMiddleware, createPost);
router.get('/posts', authMiddleware, getPosts);

module.exports = router;