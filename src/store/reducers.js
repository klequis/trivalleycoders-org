import { combineReducers } from 'redux'
import { merge } from 'ramda'
import { blue } from 'logger'

export const events = ( state = [], { type, payload }) => {

  switch (type) {
    case 'app/replaceEvents':
      // ku.log('eventsById.payload', payload, 'green')
      blue('payload', payload)
      blue('payload.data', payload.data)
      return payload.data
    default:
      return state
  }
}

// export const eventsIds = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'app/replaceEvents':
//       // ku.log('eventsIds.payload', payload, 'green')
//       return payload.ids
//     default:
//       return state
//   }
// }


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
