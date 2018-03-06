import { all, fork } from "redux-saga/effects";

import authSagas from "./auth/sagas";
import contactListSagas from "./contactList/sagas";
import emailListSagas from "./emailList/sagas";
import eventListSagas from "./eventList/sagas";

const sagas = [
  authSagas,
  contactListSagas,
  emailListSagas,
  eventListSagas,
];

export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}