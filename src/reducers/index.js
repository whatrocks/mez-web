import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import email from "./email";

export default combineReducers({
  router: routerReducer,
  email: email
});
