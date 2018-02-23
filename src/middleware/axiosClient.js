import axios from 'axios';
import { API_ROOT } from "../settings";
import { state } from "../index";
import * as auth from "../reducers/auth";

const client = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

client.interceptors.request.use((config) => {
  const authToken = auth.accessToken(state);
  if (authToken && auth.isAuthenticated(state)) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
})

export default client;