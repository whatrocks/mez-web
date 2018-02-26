// import { all, takeEvery, call, put } from "redux-saga/effects";
// import * as actions from "./actions";
// import * as api from "../../utils/api";

// const LOGIN_PATH = "/auth/token/obtain/";
// const SIGNUP_PATH = "/users/";
// const REFRESH_TOKEN_PATH = "/auth/token/refresh/";

// export default function* sagas() {
//   yield all([
//     takeEvery(actions.POST_LOGIN_REQUEST, postLogin),

//   ]);
//   yield all([takeEvery(actions.POST_SIGNUP_REQUEST, postSignup)]);
//   yield all([takeEvery(actions.POST_TOKEN_REQUEST, postToken)]);
// }

// function* postLogin(action) {
//   try {
//     const res = yield call(login, action);
//     yield put({ type: actions.POST_LOGIN_SUCCESS, payload: res });
//   } catch (err) {
//     yield put({ type: actions.POST_LOGIN_FAILURE, payload: { response: err } });
//   }
// }

// function login(action) {
//   return api.post({ path: LOGIN_PATH, body: action.payload });
// }

// function* postSignup(action) {
//   try {
//     const res = yield call(signup, action);
//     yield put({ type: actions.POST_SIGNUP_SUCCESS, payload: res });
//     try {
//       const loginRes = yield call(login, action);
//       yield put({ type: actions.POST_LOGIN_SUCCESS, payload: loginRes });
//     } catch (err) {
//       yield put({
//         type: actions.POST_LOGIN_FAILURE,
//         payload: { response: err }
//       });
//     }
//   } catch (err) {
//     yield put({
//       type: actions.POST_SIGNUP_FAILURE,
//       payload: { response: err }
//     });
//   }
// }

// function signup(action) {
//   return api.post({ path: SIGNUP_PATH, body: action.payload });
// }

// function* postToken(action) {
//   try {
//     const res = yield call(refresh, action);
//     yield put({ type: actions.POST_TOKEN_RECEIVED, payload: res });
//   } catch (err) {
//     yield put({ type: actions.POST_TOKEN_FAILURE, payload: { response: err } });
//   }
// }

// function refresh(action) {
//   return api.post({ path: REFRESH_TOKEN_PATH, body: action.payload });
// }
