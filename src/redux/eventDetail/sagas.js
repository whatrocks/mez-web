import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../utils/api";

const path = "/events/";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_EVENT_REQUEST, getEvent),
    takeEvery(actions.PUT_EVENT_REQUEST, putEvent)
  ]);
}

function* getEvent(action) {
  console.log("action: ", action);
  try {
    const res = yield call(fetchEvent, action);
    yield put({ type: actions.GET_EVENT_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_EVENT_FAILURE });
  }
}

function fetchEvent(action) {
  const eventPath = `${path}${action.id}/`
  return api.get({ path: eventPath })
};

function* putEvent(action) {
  try {
    yield call(submitEvent, action);
    yield put({ type: actions.PUT_EVENT_SUCCESS });
    yield put({ type: actions.GET_EVENT_REQUEST });
  } catch (err) {
    yield put({ type: actions.PUT_EVENT_FAILURE });
  }
}

function submitEvent(action) {
  const eventPath = `${path}${action.id}/`
  return api.post({ path: eventPath, body: action.payload })
}