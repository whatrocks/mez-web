import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../api";

const LOGIN_PATH = "/auth/token/obtain/";
const SIGNUP_PATH = "/users/";
const REFRESH_TOKEN_PATH = "/auth/token/refresh/";

export default function* sagas() {
  yield all([takeEvery(actions.POST_LOGIN_REQUEST, postLogin)]);
  yield all([takeEvery(actions.POST_SIGNUP_REQUEST, postSignup)])
}

function* postLogin(action) {
  try {
    const res = yield call(login, action);
    yield put({ type: actions.POST_LOGIN_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err } });
  }
}

function login(action) {
  const body = JSON.stringify(action.payload);
  return api.post({ path: LOGIN_PATH, body: body });
}

function* postSignup(action) {
  try {
    const res = yield call(signup, action);
    yield put({ type: actions.POST_SIGNUP_SUCCESS, payload: res });
    try {
      const loginRes = yield call(login, action);
      yield put({ type: actions.POST_LOGIN_SUCCESS, payload: loginRes });
    } catch (err) {
      yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err }});
    }
  } catch (err) {
    yield put({ type: actions.POST_SIGNUP_FAILURE, payload: { response: err } });
  }
}

function signup(action) {
  const body = JSON.stringify(action.payload);
  return api.post({ path: SIGNUP_PATH, body: body })
}