export const GET_EVENTS_REQUEST = 'event.getEvents.request';
export const GET_EVENTS_SUCCESS = 'event.getEvents.success';
export const GET_EVENTS_FAILURE = 'event.getEvents.failure';

export const POST_EVENT_REQUEST = 'event.posEvent.request';
export const POST_EVENT_SUCCESS = 'event.posEvent.success';
export const POST_EVENT_FAILURE = 'event.posEvent.failure';

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