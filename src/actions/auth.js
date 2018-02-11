export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_RECEIVED = "TOKEN_RECEIVED";
export const TOKEN_FAILURE = "TOKEN_FAILURE";

export const login = (username, password) => {
  return dispatch => {
    fetch(`http://127.0.0.1:7777/api/auth/token/obtain/`, {
      accept: "application/json",
      body: JSON.stringify( {username, password}),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json(), err => console.log("error"))
      .then(res => dispatch(loginSuccess(res)));
  };
};

function loginSuccess(res) {
  return {
    type: LOGIN_SUCCESS,
    payload: res
  };
}

export const refreshAccessToken = token => {
  return dispatch => {
    fetch(`http://127.0.0.1:7777/api/auth/token/refresh/`, {
      accept: "application/json",
      body: JSON.stringify( {refresh: token}),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json(), err => console.log("error"))
      .then(res => dispatch(tokenRefreshed(res)));
  };
};

function tokenRefreshed(res) {
  return {
    type: TOKEN_RECEIVED,
    payload: res
  }
}