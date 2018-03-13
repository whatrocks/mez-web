import _ from "lodash";

export function getEvents(state) {
  return _.get(state, 'eventList.events', [])
};

export function getIsFetchingEvents(state) {
  return _.get(state, 'eventList.isFetching', false);
}