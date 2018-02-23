import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_EMAILS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.GET_EMAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        emails: action.emails.results
      };
    case actions.GET_EMAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        emails: []
      }
    default:
      return state;
  }
};
