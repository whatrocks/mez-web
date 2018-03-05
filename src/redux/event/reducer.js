import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_EVENTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        events: action.payload
      };
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        events: []
      }
    default:
      return state;
  }
};
