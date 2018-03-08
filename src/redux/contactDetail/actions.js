export const GET_CONTACT_REQUEST = 'contactDetail.getContact.request';
export const GET_CONTACT_SUCCESS = 'contactDetail.getContact.success';
export const GET_CONTACT_FAILURE = 'contactDetail.getContact.failure';

export const PUT_CONTACT_REQUEST = 'contactDetail.postContact.request';
export const PUT_CONTACT_SUCCESS = 'contactDetail.postContact.success';
export const PUT_CONTACT_FAILURE = 'contactDetail.postContact.failure';

export function requestContact({ id }) {
  return {
    type: GET_CONTACT_REQUEST,
    id: id
  }
}

export function putContact({ id, data }) {
  return {
    type: PUT_CONTACT_REQUEST,
    id: id,
    payload: data
  }
}