import { all, takeEvery, put } from "redux-saga/effects";
import * as actions from "./actions";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_EMAILS_REQUEST, getEmails)
  ])
}

function* getEmails() {
  yield console.log("I requested some emails plz");
}