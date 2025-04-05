const Program = require('../models/ProgramAdd');

// Get all programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new program
exports.addProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const program = new Program({ name, description });
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a program
exports.updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const program = await Program.findById(id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    program.name = name || program.name;
    program.description = description || program.description;

    const updatedProgram = await program.save();
    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a program
exports.deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;

    const program = await Program.findById(id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    await program.remove();
    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};