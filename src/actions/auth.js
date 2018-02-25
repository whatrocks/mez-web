export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_RECEIVED = "TOKEN_RECEIVED";
export const TOKEN_FAILURE = "TOKEN_FAILURE";

// export const signup = (username, password) => {
//   return dispatch => {
//     fetch(`http://127.0.0.1:7777/api/v1/users/`, {
//       accept: "application/json",
//       body: JSON.stringify( {username, password}),
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//       .then(res => res.json(), err => console.log("error"))
//       .then(res => {
//         dispatch(login(username, password))
//       });
//   };
// }

export const refreshAccessToken = token => {
  return dispatch => {
    fetch(`http://127.0.0.1:7777/api/v1/auth/token/refresh/`, {
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

// export const logout = () => {
//   console.log("I should clear the auth info and log out, also removing from local storage");
// }