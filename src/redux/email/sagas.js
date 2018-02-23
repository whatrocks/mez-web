import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../api";

export default function* sagas() {
  yield all([takeEvery(actions.GET_EMAILS_REQUEST, getEmails)]);
}

function* getEmails() {
  try {
    const res = yield call(fetchEmails);
    yield put({ type: actions.GET_EMAILS_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_EMAILS_FAILURE });
  }
}

function fetchEmails(){
  return api.get("/emails")
};



