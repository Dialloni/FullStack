const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  dietaryPreference: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);