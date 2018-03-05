export const GET_CONTACTS_REQUEST = 'contact.getContacts.request';
export const GET_CONTACTS_SUCCESS = 'contact.getContacts.success';
export const GET_CONTACTS_FAILURE = 'contact.getContacts.failure';

export const POST_CONTACT_REQUEST = 'contact.postContact.request';
export const POST_CONTACT_SUCCESS = 'contact.postContact.success';
export const POST_CONTACT_FAILURE = 'contact.postContact.failure';

export function requestContacts() {
  return {
    type: GET_CONTACTS_REQUEST
  }
}

export function postContact(data) {
  return {
    type: POST_CONTACT_REQUEST,
    payload: data
  }
}