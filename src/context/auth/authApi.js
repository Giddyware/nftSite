// authApi.js
import axios from "axios";

const BASE_URL = "http://31.220.31.111:3000/api/v1"; // Replace with your actual backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, userData);
   console.log(response,'respo');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other API calls as needed (e.g., logout)
