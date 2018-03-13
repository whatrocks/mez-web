import * as actions from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_EVENT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.GET_EVENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        event: action.payload
      };
    case actions.GET_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        event: {}
      }
    default:
      return state;
  }
};
