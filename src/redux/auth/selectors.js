import _ from "lodash";

export function accessToken(state) {
  return _.get(state, 'auth.access.token');
}

export function accessTokenExp(state) {
  return _.get(state, 'auth.access.exp');
}

export function refreshToken(state) {
  return _.get(state, 'auth.refresh.token');
}

export function refreshTokenExp(state) {
  return _.get(state, 'auth.refresh.exp');
}

export function isAccessTokenExpired(state) {
  const token = accessToken(state);
  const exp = accessTokenExp(state);
  if (token && exp) {
    return 1000 * exp - new Date().getTime() < 5000;
  }
  return true;
}

export function isRefreshTokenExpired(state) {
  const token = refreshToken(state);
  const exp = refreshTokenExp(state);
  if (token && exp) {
    return 1000 * exp - new Date().getTime() < 5000;
  }
  return true;
}

export function isAuthenticated(state) {
  return !isRefreshTokenExpired(state);
}

export function authErrors(state) {
  return _.get(state, 'auth.errors', {});
}