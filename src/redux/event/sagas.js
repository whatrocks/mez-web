import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../utils/api";

const path = "/events/";

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_EVENTS_REQUEST, getEvents),
    takeEvery(actions.POST_EVENT_REQUEST, postEvent)
  ]);
}

function* getEvents() {
  try {
    const res = yield call(fetchEvents);
    yield put({ type: actions.GET_EVENTS_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_EVENTS_FAILURE });
  }
}

function fetchEvents(){
  return api.get({ path: path })
};

function* postEvent(action) {
  try {
    yield call(submitEvent, action);
    yield put({ type: actions.POST_EVENT_SUCCESS });
    yield put({ type: actions.GET_EVENTS_REQUEST });
  } catch (err) {
    yield put({ type: actions.POST_EVENT_FAILURE });
  }
}

function submitEvent(action) {
  return api.post({ path: path, body: action.payload })
}