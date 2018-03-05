export const GET_EVENTS_REQUEST = 'event.getEvents.request';
export const GET_EVENTS_SUCCESS = 'event.getEvents.success';
export const GET_EVENTS_FAILURE = 'event.getEvents.failure';

export const POST_EVENT_REQUEST = 'event.postEvent.request';
export const POST_EVENT_SUCCESS = 'event.postEvent.success';
export const POST_EVENT_FAILURE = 'event.postEvent.failure';

export function requestEvents() {
  return {
    type: GET_EVENTS_REQUEST
  }
}

export function postEvent(data) {
  return {
    type: POST_EVENT_REQUEST,
    payload: data
  }
}