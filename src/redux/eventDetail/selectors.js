import _ from "lodash";

export function getEvent(state) {
  return _.get(state, 'eventDetail.event', [])
};

export function getIsFetchingEvent(state) {
  return _.get(state, 'eventDetail.isFetching', false);
}