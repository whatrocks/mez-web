import _ from "lodash";

export function getEmails(state) {
  return _.get(state, 'emailList.emails', [])
};

export function getIsFetchingEmails(state) {
  return _.get(state, 'emailList.isFetching', false);
}