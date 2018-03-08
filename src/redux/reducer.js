import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "./auth/reducer";
import contactDetail from "./contactDetail/reducer";
import contactList from "./contactList/reducer";
import emailList from "./emailList/reducer";
import eventList from "./eventList/reducer";

export default combineReducers({
  auth,
  contactDetail,
  contactList,
  emailList,
  eventList,
  router: routerReducer
});