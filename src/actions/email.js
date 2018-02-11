import { REQUEST_EMAILS, RECEIVE_EMAILS } from "../constants/actions";
import { withAuth } from "../reducers";

export function fetchEmails() {
  return dispatch => {
    dispatch({
      type: REQUEST_EMAILS
    });
    fetch(`http://127.0.0.1:7777/emails/`, {
      accept: "application/json",
      headers: withAuth({ "Content-Type": "application/json" })
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

export function postEmail(details) {
  return dispatch => {
    const json = JSON.stringify(details);
    fetch(`http://127.0.0.1:7777/emails/`, {
      method: "POST",
      headers: withAuth({
        "Content-Type": "application/json"
      }),
      body: json
    })
      .then(res => console.log("res: ", res))
      .catch(err => console.error("err: ", err));
  };
}
