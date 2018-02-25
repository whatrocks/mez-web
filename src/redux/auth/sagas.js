import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../api";

const LOGIN_PATH = "/auth/token/obtain/";

export default function* sagas() {
  yield all([takeEvery(actions.POST_LOGIN_REQUEST, getLogin)]);
}

function* getLogin(action) {
  try {
    const res = yield call(login, action.body);
    yield put({ type: actions.POST_LOGIN_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err } });
  }
}

function login(body) {
  return api.post({ path: LOGIN_PATH, body: body });
}
