import axios from 'axios';

const API_URL = 'http://localhost:8080/api';
const AUTH_URL = 'http://localhost:8080/auth';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const authApi = axios.create({
    baseURL: AUTH_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const estudianteService = {
    getAll: () => api.get('/estudiantes'),
    getById: (id) => api.get(`/estudiantes/${id}`),
    create: (data) => api.post('/estudiantes', data),
    update: (id, data) => api.put(`/estudiantes/${id}`, data),
    delete: (id) => api.delete(`/estudiantes/${id}`),
};

export const authService = {
    login: (credentials) => authApi.post('/login', credentials),
    register: (userData) => authApi.post('/register', userData),
    checkAuth: () => authApi.get('/check'),
    getUsersByRole: (role) => authApi.get(`/users/${role}`),
};

export const contactoService = {
    enviarMensaje: (data) => api.post('/contacto', data),
    getAll: () => api.get('/contacto'),
    getById: (id) => api.get(`/contacto/${id}`),
    delete: (id) => api.delete(`/contacto/${id}`),
};

export default api; 