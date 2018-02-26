import jwtDecode from "jwt-decode";
import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.POST_LOGIN_SUCCESS:
      return {
        access:  {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        },
        refresh: {
          token: action.payload.refresh,
          ...jwtDecode(action.payload.refresh)
        },
        errors: {}
      };
    case actions.POST_TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        }
      };
    case actions.POST_LOGIN_FAILURE:
    case actions.POST_TOKEN_FAILURE:
      return {
        access: undefined,
        refresh: undefined,
        errors: action.payload.response.message
      };
    default:
      return state;
  }
};