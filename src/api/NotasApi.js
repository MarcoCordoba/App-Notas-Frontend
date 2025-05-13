import axios from "axios";

const notasApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
})

export const getNotas = () => {
    return notasApi.get('/')
}

export const crearNota = (tarea) => {
    return notasApi.post('/', tarea)
}

export const eliminarNota = (id) => notasApi.delete(`${id}/`);

export const actualizarNota = (id,tarea) => notasApi.put(`${id}/`, tarea);

export const obtenerNota = (id) => notasApi.get(`${id}/`);