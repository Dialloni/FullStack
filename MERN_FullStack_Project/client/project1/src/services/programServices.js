import axios from 'axios';

const API_URL = 'http://localhost:5000/api/programs'; // Replace with your backend API URL

// Fetch all programs
export const getPrograms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    throw error;
  }
};

// Add a new program
export const addProgram = async (program) => {
  try {
    const response = await axios.post(API_URL, program);
    return response.data;
  } catch (error) {
    console.error('Error adding program:', error);
    throw error;
  }
};

// Update an existing program
export const updateProgram = async (id, updatedProgram) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedProgram);
    return response.data;
  } catch (error) {
    console.error('Error updating program:', error);
    throw error;
  }
};

// Delete a program
export const deleteProgram = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting program:', error);
    throw error;
  }
};