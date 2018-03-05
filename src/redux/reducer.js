import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "./auth/reducer";
import contact from "./contact/reducer";
import email from "./email/reducer";
import event from "./event/reducer";

export default combineReducers({
  auth: auth,
  contact: contact,
  email: email,
  event: event,
  router: routerReducer
});