export const GET_EMAILS_REQUEST = 'email.getEmails.request';
export const GET_EMAILS_SUCCESS = 'email.getEmails.success';
export const GET_EMAILS_FAILURE = 'email.getEmails.failure';

export const POST_EMAIL_REQUEST = 'email.postEmail.request';
export const POST_EMAIL_SUCCESS = 'email.postEmail.success';
export const POST_EMAIL_FAILURE = 'email.postEmail.failure';

export function requestEmails() {
  return {
    type: GET_EMAILS_REQUEST
  }
}

export function postEmail(data) {
  return {
    type: POST_EMAIL_REQUEST,
    payload: data
  }
}