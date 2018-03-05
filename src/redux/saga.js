import { all, fork } from "redux-saga/effects";

import authSagas from "./auth/sagas";
import contactSagas from "./contact/sagas";
import emailSagas from "./email/sagas";
import eventSagas from "./event/sagas";

const sagas = [
  authSagas,
  contactSagas,
  emailSagas,
  eventSagas,
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}