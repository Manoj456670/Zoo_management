// In Register.jsx or your API config file
const API_URL = "https://zoomanagement-production.up.railway.app"; // Replace with your actual Railway link

const handleRegister = async (userData) => {
  try {
    // Ensure the path matches your @RequestMapping in Spring Boot
    const response = await axios.post(`${API_URL}/users/register`, userData);
    console.log(response.data);
  } catch (error) {
    console.error("Registration error:", error);
  }
};