import _ from "lodash";

export function getContact(state) {
  return _.get(state, 'contactDetail.contact', [])
};

export function getIsFetchingContact(state) {
  return _.get(state, 'contactDetail.isFetchingContact', false);
}