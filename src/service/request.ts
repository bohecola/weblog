import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res; 
  },
  
  error => {
    return Promise.reject(error);
  }
);

export default axios;
