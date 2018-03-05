import _ from "lodash";

export function getContacts(state) {
  return _.get(state, 'contact.contacts', [])
};

export function getIsFetchingContacts(state) {
  return _.get(state, 'contact.isFetchingContacts', false);
}