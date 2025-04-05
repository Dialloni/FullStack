const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = new Post({ content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'firstName lastName');
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};