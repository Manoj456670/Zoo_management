import axios from "axios";

const API = axios.create({
  baseURL: "https://zoomanagement-production.up.railway.app",
});

export default API;