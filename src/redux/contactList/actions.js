export const GET_CONTACTS_REQUEST = 'contactList.getContacts.request';
export const GET_CONTACTS_SUCCESS = 'contactList.getContacts.success';
export const GET_CONTACTS_FAILURE = 'contactList.getContacts.failure';

export const POST_CONTACT_REQUEST = 'contactList.postContact.request';
export const POST_CONTACT_SUCCESS = 'contactList.postContact.success';
export const POST_CONTACT_FAILURE = 'contactList.postContact.failure';

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