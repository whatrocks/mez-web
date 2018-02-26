import * as actions from "./actions";
import { delay } from "redux-saga";
import { take, race, call, put } from "redux-saga/effects";
import jwtDecode from "jwt-decode";
import { DateTime } from "luxon";

import * as api from "../../utils/api";

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
    // TODO: What happens if the refresh token is expired?
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
      const { login, signup } = yield race({
        login: take(actions.POST_LOGIN_REQUEST),
        signup: take(actions.POST_SIGNUP_REQUEST)
      })
      if (login) {
        const res = yield call(postLogin, login);
        access = res.access;
        refresh = res.refresh;
      } else if (signup) {
        const res = yield call(postSignup, signup);
        access = res.access;
        refresh = res.refresh;
      }
    }

    const { signOutAction } = yield race({
      signOutAction: take(actions.POST_LOGOUT_REQUEST),
      authLoop: call(authorizeLoop, access, refresh)
    }) 
    
    if (signOutAction) {
      // TODO: Handle sign out action
      yield console.log("i should sign out now");
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

function login(action) {
  return api.post({ path: LOGIN_PATH, body: action.payload });
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

function signup(action) {
  return api.post({ path: SIGNUP_PATH, body: action.payload });
}