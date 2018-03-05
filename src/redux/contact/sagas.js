import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../utils/api";

const path = "/contacts/";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_CONTACTS_REQUEST, getContacts),
    takeEvery(actions.POST_CONTACT_REQUEST, postContact)
  ]);
}

function* getContacts() {
  try {
    const res = yield call(fetchContacts);
    yield put({ type: actions.GET_CONTACTS_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_CONTACTS_FAILURE });
  }
}

function fetchContacts(){
  return api.get({ path: path })
};

function* postContact(action) {
  try {
    yield call(submitContact, action);
    yield put({ type: actions.POST_CONTACT_SUCCESS });
    yield put({ type: actions.GET_CONTACTS_REQUEST });
  } catch (err) {
    yield put({ type: actions.POST_CONTACT_FAILURE });
  }
}

function submitContact(action) {
  return api.post({ path: path, body: action.payload })
}