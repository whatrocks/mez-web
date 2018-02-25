export const POST_SIGNUP_REQUEST = "auth.signup.request";
export const POST_SIGNUP_SUCCESS = "auth.signup.success";
export const POST_SIGNUP_FAILURE = "auth.signup.failure";

export const POST_LOGIN_REQUEST = "auth.login.request";
export const POST_LOGIN_SUCCESS = "auth.login.success";
export const POST_LOGIN_FAILURE = "auth.login.failure";

export const POST_TOKEN_REQUEST = "auth.getToken.request";
export const POST_TOKEN_RECEIVED = "auth.getToken.received";
export const POST_TOKEN_FAILURE = "auth.getToken.failure";

export const signup = (username, password) => {
  return {
    type: POST_SIGNUP_REQUEST
  }
}

export const login = (username, password) => {
  return {
    type: POST_LOGIN_REQUEST,
    body: JSON.stringify({ username, password })
  }
}

export const refreshAccessToken = (token) => {

}

export const logout = () => {

}