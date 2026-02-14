import axios from "axios";

const api_instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api_instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api_instance;
