import axios from "axios";

// Creamos una instancia de axios
const notasApi = axios.create({
  baseURL: "http://localhost:8000/tareas/api/v1/tareas/",
});

// Interceptor para agregar el token a cada request automáticamente
notasApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // obtenemos el token guardado
  if (token) {
    config.headers.Authorization = `Token ${token}`; // agregamos el header
  }
  return config;
});

export const getNotas = () => {
  return notasApi.get("/");
};

export const crearNota = (tarea) => {
  return notasApi.post("/", tarea);
};

export const eliminarNota = (id) => {
  return notasApi.delete(`${id}/`);
};

export const actualizarNota = (id, tarea) => {
  return notasApi.put(`${id}/`, tarea);
};

export const obtenerNota = (id) => {
  return notasApi.get(`${id}/`);
};
