import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "./auth/reducer";
import email from "./email/reducer";

export default combineReducers({
  auth: auth,
  email: email,
  router: routerReducer
});