import _ from "lodash";

export function getEmails(state) {
  return _.get(state, 'email.emails', [])
};

export function getIsFetchingEmails(state) {
  return _.get(state, 'email.isFetchingEmails', false);
}