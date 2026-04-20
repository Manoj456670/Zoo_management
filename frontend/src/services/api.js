import axios from 'axios'; // Add this line!

const API_URL = "https://zoomanagement-production.up.railway.app"; 

export const handleRegister = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};