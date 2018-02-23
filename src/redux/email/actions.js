export const GET_EMAILS_REQUEST = 'email.getEmails.request';
export const GET_EMAILS_SUCCESS = 'email.getEmails.success';
export const GET_EMAILS_FAILURE = 'email.getEmails.failure';

export function requestEmails() {
  return {
    type: GET_EMAILS_REQUEST
  }
}