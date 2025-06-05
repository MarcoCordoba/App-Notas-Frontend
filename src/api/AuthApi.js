import axios from "axios";

const baseURL = "http://localhost:8000/api/auth"; // ajusta según tu backend

const authApi = axios.create({
  baseURL,
});

// Registro
export const registerUser = (userData) => {
  return authApi.post("/register/", userData);
};

// Login
export const loginUser = (credentials) => {
  return authApi.post("/login/", credentials);
};
