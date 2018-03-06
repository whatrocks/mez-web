import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_CONTACTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contacts: action.payload.results
      };
    case actions.GET_CONTACTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        contacts: []
      }
    default:
      return state;
  }
};
