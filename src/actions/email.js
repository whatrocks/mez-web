import { REQUEST_EMAILS, RECEIVE_EMAILS } from "../constants/actions";

export function fetchEmails() {
  return dispatch => {
    dispatch({
      type: REQUEST_EMAILS
    });
    fetch(`http://127.0.0.1:7777/emails/`, {
      accept: "application/json"
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
