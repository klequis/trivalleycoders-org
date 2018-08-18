import { combineReducers } from 'redux'
import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

export const events = ( state = [], { type, payload }) => {

  switch (type) {
    case 'app/replaceEvents':
      // ku.log('eventsById.payload', payload, 'green')
      // blue('payload', payload)
      // blue('payload.data', payload.events)
      return payload.events
    default:
      return state
  }
}


export const requests = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case 'app/markRequestPending':
      return merge(state, { [meta.key]: { status: 'pending', error: null } })
    case 'app/markRequestSuccess':
      return merge(state, { [meta.key]: { status: 'success', error: null } })
    case 'app/markRequestFailed':
      return merge(state, { [meta.key]: { status: 'failure', error: payload } })
    default:
      return state
  }
}

export default combineReducers({
  events,
  requests,
})
