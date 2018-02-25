import { all, fork } from "redux-saga/effects";

import authSagas from "./auth/sagas";
import emailSagas from "./email/sagas";

const sagas = [
  authSagas,
  emailSagas
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}