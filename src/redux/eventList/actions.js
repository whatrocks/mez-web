export const GET_EVENTS_REQUEST = 'eventList.getEvents.request';
export const GET_EVENTS_SUCCESS = 'eventList.getEvents.success';
export const GET_EVENTS_FAILURE = 'eventList.getEvents.failure';

export const POST_EVENT_REQUEST = 'eventList.postEvent.request';
export const POST_EVENT_SUCCESS = 'eventList.postEvent.success';
export const POST_EVENT_FAILURE = 'eventList.postEvent.failure';

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