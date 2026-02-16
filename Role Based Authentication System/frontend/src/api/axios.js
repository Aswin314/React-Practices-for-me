import axios from "axios";

const api_instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api_instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  api_instance.interceptors.response.use(
    (response) => response,

    async (error) => {
      if (error.response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          console.log("Refreshing Token...");

          const newToken = "new_access_token_456";

          localStorage.setItem("token", newToken);

          error.config.headers.Authorization = `Bearer ${newToken}`;

          return axios(error.config);
        }
      }

      return Promise.reject(error);
    },
  ),
);

export default api_instance;
