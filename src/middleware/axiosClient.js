import axios from 'axios';
import { API_ROOT } from "../settings";
import { state } from "../index";
import * as auth from "../redux/auth/selectors";

const client = axios.create({
  baseURL: API_ROOT,
  responseType: 'json'
});

client.defaults.headers.post['Content-Type'] = 'application/json';

client.interceptors.request.use((config) => {
  // TODO: Should do the refreshing logic if the refresh token is valid
  const authToken = auth.accessToken(state);
  if (authToken && auth.isAuthenticated(state)) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
})

export default client;