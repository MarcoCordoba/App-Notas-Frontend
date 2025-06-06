import axios from "axios";

const baseURL = "http://localhost:8000/api/auth"; // ajusta si cambia

const authApi = axios.create({
  baseURL,
});

// Interceptor para incluir el token automáticamente
authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`; // Django DRF usa "Token <token>"
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Registro de usuario
export const registerUser = async (userData) => {
  const response = await authApi.post("/register/", userData);
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

// Login de usuario
export const loginUser = async (credentials) => {
  const response = await authApi.post("/login/", credentials);
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// Endpoint protegido (ejemplo con /profile/)
export const getProfile = async () => {
  const response = await authApi.post("/profile/");
  return response.data;
};
