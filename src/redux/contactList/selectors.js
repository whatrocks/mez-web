import _ from "lodash";

export function getContacts(state) {
  return _.get(state, 'contactList.contacts', [])
};

export function getIsFetchingContacts(state) {
  return _.get(state, 'contactList.isFetching', false);
}