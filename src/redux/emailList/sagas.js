import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../utils/api";

const path = "/emails/";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_EMAILS_REQUEST, getEmails),
    takeEvery(actions.POST_EMAIL_REQUEST, postEmail)
  ]);
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
  return api.get({ path: path })
};

function* postEmail(action) {
  try {
    yield call(submitEmail, action);
    yield put({ type: actions.POST_EMAIL_SUCCESS });
    yield put({ type: actions.GET_EMAILS_REQUEST });
  } catch (err) {
    yield put({ type: actions.POST_EMAIL_FAILURE });
  }
}

function submitEmail(action) {
  return api.post({ path: path, body: action.payload })
}