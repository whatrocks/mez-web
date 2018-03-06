export const POST_SIGNUP_REQUEST = "auth.signup.request";
export const POST_SIGNUP_SUCCESS = "auth.signup.success";
export const POST_SIGNUP_FAILURE = "auth.signup.failure";

export const POST_LOGIN_REQUEST = "auth.login.request";
export const POST_LOGIN_SUCCESS = "auth.login.success";
export const POST_LOGIN_FAILURE = "auth.login.failure";

export const POST_TOKEN_REQUEST = "auth.getToken.request";
export const POST_TOKEN_RECEIVED = "auth.getToken.received";
export const POST_TOKEN_FAILURE = "auth.getToken.failure";

export const POST_LOGOUT_REQUEST = "auth.logout.request";

export const signup = ({ email, password }) => {
  return {
    type: POST_SIGNUP_REQUEST,
    payload: { username: email, email, password }
  }
}

export const login = ({ email, password }) => {
  return {
    type: POST_LOGIN_REQUEST,
    payload: { username: email, email, password }
  }
}

export const logout = () => {
  return {
    type: POST_LOGOUT_REQUEST
  }
}