import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../utils/api";

const path = "/contacts/";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_CONTACT_REQUEST, getContact),
    takeEvery(actions.PUT_CONTACT_REQUEST, putContact)
  ]);
}

// TODD: If there's a successful contact fetch,
// Then we should fetch the upcoming occurrences for the birthday

function* getContact(action) {
  try {
    const res = yield call(fetchContact, action);
    yield put({ type: actions.GET_CONTACT_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_CONTACT_FAILURE });
  }
}

function fetchContact(action){
  const contactPath = `${path}${action.id}/`;
  return api.get({ path: contactPath })
};

function* putContact(action) {
  try {
    yield call(submitContact, action);
    yield put({ type: actions.PUT_CONTACT_SUCCESS });
  } catch (err) {
    yield put({ type: actions.PUT_CONTACT_FAILURE });
  }
}

function submitContact(action) {
  const contactPath = `${path}${action.id}`;
  return api.post({ path: contactPath, body: action.payload })
}