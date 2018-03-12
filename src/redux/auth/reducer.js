import jwtDecode from "jwt-decode";
import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.POST_LOGIN_SUCCESS:
      const accessDecoded = jwtDecode(action.payload.access);
      const refreshDecoded = jwtDecode(action.payload.refresh);
      return {
        access:  {
          token: action.payload.access,
          ...accessDecoded
        },
        refresh: {
          token: action.payload.refresh,
          ...refreshDecoded
        },
        errors: {},
        userId: accessDecoded.user_id
      };
    case actions.POST_TOKEN_RECEIVED:
      const decoded = jwtDecode(action.payload.access);
      return {
        ...state,
        access: {
          token: action.payload.access,
          ...decoded
        },
        userId: decoded.user_id
      };
    case actions.POST_LOGIN_FAILURE:
    case actions.POST_TOKEN_FAILURE:
    case actions.POST_SIGNUP_FAILURE:
      return {
        access: undefined,
        refresh: undefined,
        errors: action.payload.response.data,
        userId: undefined
      };
    case actions.POST_LOGOUT_REQUEST:
      return {
        access: undefined,
        refresh: undefined,
        errors: {},
        userId: undefined
      }
    default:
      return state;
  }
};