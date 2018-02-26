import * as actions from "./actions";
import { delay } from "redux-saga";
import { take, race, call, put } from "redux-saga/effects";
import jwtDecode from "jwt-decode";
import { DateTime } from "luxon";

import * as api from "../../utils/api";

const LOGIN_PATH = "/auth/token/obtain/";
// const SIGNUP_PATH = "/users/";
const REFRESH_TOKEN_PATH = "/auth/token/refresh/";

// https://github.com/redux-saga/redux-saga/issues/14

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
    console.log("i am auth loop");
    // TODO: what if refresh is expired?
    const { access: newAccessToken } = yield call(authorize, refresh);
    if (!newAccessToken) {
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
      const { payload: credentials } = yield take(actions.POST_LOGIN_REQUEST, postLogin);
      const res = yield call(postLogin, credentials);
      access = res.access;
      refresh = res.refresh;
    }

    const { signOutAction } = yield race({
      signOutAction: take(actions.POST_LOGOUT_REQUEST),
      authLoop: call(authorizeLoop, access, refresh)
    }) 
    
    if (signOutAction) {
      // yield call()
      yield console.log("i should sign out now");
    }
  }
}

function* postLogin(credentials) {
  try {
    const res = yield call(login, credentials);
    yield put({ type: actions.POST_LOGIN_SUCCESS, payload: res });
    return res;
  } catch (err) {
    yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err } });
    return err;
  }
}

function login(credentials) {
  return api.post({ path: LOGIN_PATH, body: credentials });
}