import axios from 'axios';

const apiUrl = import.meta.env.API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // add here any headers you need to add to the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status == 403) {
        console.error('Error de CORS: No tienes permiso para acceder a este recurso.');
      }
    }
    return Promise.reject(error);
  }
);

export const handleRequestError = (error) => {
  if(typeof error === 'string'){
    throw error;
  }
  if(typeof error.response === 'string'){
    throw error.response;
  }
  if(typeof error.response.data === 'string'){
    throw error.response.data;
  }
  if(typeof error.response.data.Message === 'string'){
    throw error.response.data.Message;
  }
  throw 'Ha ocurrido un error al intentar ejecutar la accion solicitada, favor intentar nuevamente o revisar los datos ingresados.';
};

export default axiosInstance;