// import * as ku from '../lib/ke-utils'
import { red } from 'logger'
export const getEvents = (state) => {
  const ret = state.events
  red('ret', ret)
  return ret
}


// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {}

export const getRequests = (state) =>
  state.requests

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending')
}


