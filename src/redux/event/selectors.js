import _ from "lodash";

export function getEvents(state) {
  return _.get(state, 'event.events', [])
};

export function getIsFetchingEvents(state) {
  return _.get(state, 'event.isFetchingEvents', false);
}