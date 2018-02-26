import { all, fork } from "redux-saga/effects";

import authSagas from "./auth/saga2";
import emailSagas from "./email/sagas";

const sagas = [
  authSagas,
  emailSagas
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}