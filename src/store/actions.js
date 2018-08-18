import api from '../api'
//import { fetchEvents } from '../api'
// eslint-disable-next-line
import { orange } from 'logger'

export const replaceEvents = (events) => {
  // orange('replaceEvents: events', events)

  return {
    type: 'app/replaceEvents',
    payload: { events },
  }
}


export const markRequestPending = (key) => ({
  type: 'app/markRequestPending',
  meta: { key },
})

export const markRequestSuccess = (key) => {
  return ({
    type: 'app/markRequestSuccess',
    meta: { key },
  })
}
export const markRequestFailed = (reason, key) => ({
  type: 'app/markRequestFailed',
  payload: reason,
  meta: { key },
})

export const createRequestThunk = ({ request, key, start = [], success = [], failure = [] }) => {
  return (...args) => (dispatch) => {
    const requestKey = (typeof key === 'function') ? key(...args) : key
    start.forEach((actionCreator) => dispatch(actionCreator()))
    dispatch(markRequestPending(requestKey))
    return request(...args)
      .then((data) => {
        success.forEach((actionCreator) => dispatch(actionCreator(data)))
        dispatch(markRequestSuccess(requestKey))
      })
      .catch((reason) => {
        failure.forEach((actionCreator) => dispatch(actionCreator(reason)))
        dispatch(markRequestFailed(reason, requestKey))
      })
  }
}

export const requestReadEvents = createRequestThunk({
  request: api.events.readEvents,
  key: 'readEvents',
  success: [ replaceEvents ]
})
