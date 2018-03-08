import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_CONTACT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.GET_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contact: action.payload
      };
    case actions.GET_CONTACT_FAILURE:
      return {
        ...state,
        isFetching: false,
        contact: {}
      }
    default:
      return state;
  }
};
