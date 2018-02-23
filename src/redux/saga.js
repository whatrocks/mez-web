import { all, fork } from "redux-saga/effects";

import emailSagas from "./email/sagas";

const sagas = [
  emailSagas
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}