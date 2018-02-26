import axios from 'axios';
import { API_ROOT } from "../settings";
import { store } from "../index";
import * as auth from "../redux/auth/selectors";

const client = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

client.defaults.headers.post['Content-Type'] = 'application/json';

client.interceptors.request.use((config) => {
  const state = store.getState();
  const accessToken = auth.accessToken(state);
  if (accessToken && auth.isAuthenticated(state)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})

export default client;