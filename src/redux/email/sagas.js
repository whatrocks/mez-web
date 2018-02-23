import { all, takeEvery, call } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../api";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_EMAILS_REQUEST, getEmails)
  ])
}

function* getEmails() {
  const emails = yield call(api.get("/emails"));
  console.log("emails are: ", emails);
  // fetch(`http://127.0.0.1:7777/api/v1/emails/`, {
  //     accept: "application/json",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(res => res.json(), err => console.log("error"))
  //     .then(res => dispatch(receiveEmails(res)));
}