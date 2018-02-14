// import { withAuth } from "../reducers";

export const REQUEST_EMAILS = "REQUEST_EMAILS";
export const RECEIVE_EMAILS = "RECEIVE_EMAILS";

export function fetchEmails(token) {
  return dispatch => {
    dispatch({
      type: REQUEST_EMAILS
    });
    fetch(`http://127.0.0.1:7777/api/v1/emails/`, {
      accept: "application/json",
      // headers: withAuth({ "Content-Type": "application/json" })
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json(), err => console.log("error"))
      .then(res => dispatch(receiveEmails(res)));
  };
}

function receiveEmails(emails) {
  return {
    type: RECEIVE_EMAILS,
    emails: emails
  };
}

export function postEmail(token, details) {
  return dispatch => {
    const json = JSON.stringify(details);
    fetch(`http://127.0.0.1:7777/api/v1/emails/`, {
      method: "POST",
      // headers: withAuth({
      //   "Content-Type": "application/json"
      // }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: json
    })
      .then(res => console.log("res: ", res))
      .catch(err => console.error("err: ", err));
  };
}
