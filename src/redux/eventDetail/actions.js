export const GET_EVENT_REQUEST = 'eventDetail.getEvent.request';
export const GET_EVENT_SUCCESS = 'eventDetail.getEvent.success';
export const GET_EVENT_FAILURE = 'eventDetail.getEvent.failure';

export const PUT_EVENT_REQUEST = 'eventDetail.putEvent.request';
export const PUT_EVENT_SUCCESS = 'eventDetail.putEvent.success';
export const PUT_EVENT_FAILURE = 'eventDetail.putEvent.failure';

export function requestEvent({ id }) {
  return {
    type: GET_EVENT_REQUEST,
    id: id
  }
}

export function putEvent({ id, data }) {
  return {
    type: PUT_EVENT_REQUEST,
    id: id,
    payload: data
  }
}