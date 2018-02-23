import axios from 'axios';
import { API_ROOT } from "../settings";

const client = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

client.interceptors.request.use((config) => {
  const authToken = "blah";
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
})

export default client;