import axios from 'axios';

const dev = 'http://localhost:3001/api/weblog';
const prod = 'https://canday.site:3000/api/weblog';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? dev : prod,
  timeout: 5000
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data; 
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
