import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

// Programs API

// Fetch all programs
export const getPrograms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/programs`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

// Add a new program
export const addProgram = async (program) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/programs`, program);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

// Update a program
export const updateProgram = async (id, program) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/programs/${id}`, program);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

// Delete a program
export const deleteProgram = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/programs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};