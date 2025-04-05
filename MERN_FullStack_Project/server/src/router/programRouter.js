const express = require('express');
const {
  getPrograms,
  addProgram,
  updateProgram,
  deleteProgram,
} = require('../controllers/programController');
const router = express.Router();

router.get('/', getPrograms); // Get all programs
router.post('/', addProgram); // Add a new program
router.put('/:id', updateProgram); // Update a program
router.delete('/:id', deleteProgram); // Delete a program

module.exports = router;