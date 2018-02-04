import { REQUEST_EMAILS, RECEIVE_EMAILS } from "../constants/actions";

const initialState = {
  isFetching: false,
  emails: [],
  lastUpdated: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EMAILS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_EMAILS:
      return {
        ...state,
        isFetching: false,
        emails: action.emails.results
      };
    default:
      return state;
  }
};
