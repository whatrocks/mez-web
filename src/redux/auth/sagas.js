import { delay } from "redux-saga";
import { take, race, call, put, fork, cancel } from "redux-saga/effects";
import jwtDecode from "jwt-decode";
import { DateTime } from "luxon";
import storage from "redux-persist/lib/storage";

import * as api from "../../utils/api";
import * as actions from "./actions";

const LOGIN_PATH = "/auth/token/obtain/";
const REFRESH_TOKEN_PATH = "/auth/token/refresh/";
const SIGNUP_PATH = "/users/";

// NOTE: Reference can be found here: https://github.com/redux-saga/redux-saga/issues/14
function* authorize(refreshToken) {
  try {
    const res = yield call(refresh, refreshToken);
    yield put({ type: actions.POST_TOKEN_RECEIVED, payload: res });
    return res;
  } catch (err) {
    yield put({ type: actions.POST_TOKEN_FAILURE, payload: { response: err } });
    return null;
  }
}

function refresh(token) {
  return api.post({ path: REFRESH_TOKEN_PATH, body: { refresh: token } });
}

function* authorizeLoop(access, refresh) {
  while (true) {
    const { access: newAccessToken } = yield call(authorize, refresh);
    if (!newAccessToken) {
      storage.removeItem('persist:mez');
      return;
    }
    const accessDetails = jwtDecode(newAccessToken);
    const now = DateTime.utc();
    const expiration = DateTime.fromMillis(accessDetails.exp * 1000).toUTC();
    const diff = expiration - now;
    yield call(delay, diff)
  }
}

export default function* authFlowSaga() {
  let access;
  let refresh;
  const { payload } = yield take("persist/REHYDRATE");
  if (payload) {
    const { auth } = payload;
    if (auth ) {
      const { access: accessStore, refresh: refreshStore } = auth;
      if (accessStore && refreshStore) {
        access = accessStore.token;
        refresh = refreshStore.token;
      }
    }
  }

  while (true) {
    if (!access && !refresh) {
      console.log("nothing, gotta auth")
      const { login, signup } = yield race({
        login: take(actions.POST_LOGIN_REQUEST),
        signup: take(actions.POST_SIGNUP_REQUEST)
      })
      if (login) {
        const res = yield call(postLogin, login);
        access = res.access;
        refresh = res.refresh;
      } else if (signup) {
        console.log("signup");
        const res = yield call(postSignup, signup);
        access = res.access;
        refresh = res.refresh;
      }
    }

    // If there's a signin/login error
    if (!access && !refresh) {
      continue;
    }

    const task = yield fork(authorizeLoop, access, refresh);
    const logout = yield take(actions.POST_LOGOUT_REQUEST);
    if (logout) {
      yield cancel(task);
      storage.removeItem('persist:mez');
      access = undefined;
      refresh = undefined;
    }
  }
}

function* postLogin(action) {
  try {
    const res = yield call(login, action);
    yield put({ type: actions.POST_LOGIN_SUCCESS, payload: res });
    return res;
  } catch (err) {
    yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err } });
    return err;
  }
}

async function login(action) {
  return await api.post({ path: LOGIN_PATH, body: action.payload });
}

function* postSignup(action) {
  try {
    const res = yield call(signup, action);
    yield put({ type: actions.POST_SIGNUP_SUCCESS, payload: res });
    try {
      const loginRes = yield call(login, action);
      yield put({ type: actions.POST_LOGIN_SUCCESS, payload: loginRes });
      return loginRes;
    } catch (err) {
      yield put({
        type: actions.POST_LOGIN_FAILURE,
        payload: { response: err }
      });
    }
  } catch (err) {
    yield put({
      type: actions.POST_SIGNUP_FAILURE,
      payload: { response: err }
    });
  }
}

async function signup(action) {
  return await api.post({ path: SIGNUP_PATH, body: action.payload });
}