import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const dev = 'http://localhost:3000/api/weblog'
const prod = 'https://canday.site/api/weblog'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? dev : prod;
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
    return res.data; 
  },
  
  error => {
    return Promise.reject(error);
  }
);

export default axios;
