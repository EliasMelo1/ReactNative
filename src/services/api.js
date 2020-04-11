import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.15.9',
  // baseURL: '192.168.15.9' || "http://192.168.15.9:3333"
});

export default api;