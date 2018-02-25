import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../../api";

const path = "/emails";

export default function* sagas() {
  yield all([takeEvery(actions.GET_EMAILS_REQUEST, getEmails)]);
}

function* getEmails() {
  try {
    const res = yield call(fetchEmails);
    yield put({ type: actions.GET_EMAILS_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: actions.GET_EMAILS_FAILURE });
  }
}

function fetchEmails(){
  return api.get({ path: path })
};



// export function postEmail(token, details) {
//   return dispatch => {
//     const json = JSON.stringify(details);
//     fetch(`http://127.0.0.1:7777/api/v1/emails/`, {
//       method: "POST",
//       // headers: withAuth({
//       //   "Content-Type": "application/json"
//       // }),
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json"
//       },
//       body: json
//     })
//       .then(res => console.log("res: ", res))
//       .catch(err => console.error("err: ", err));
//   };
// }


