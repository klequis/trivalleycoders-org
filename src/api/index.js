import { normalize, Schema, arrayOf } from 'normalizr'
// import fetchJsonp from '../../../node_modules/fetch-jsonp/build/fetch-jsonp.js'
import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
const events = new Schema('events', { idAttribute: 'time' })
// import * as ku from '../lib/ke-utils'

// Meetup Api
// const urlEvents = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=trivalleycoders&photo-host=secure&page=5&fields=&order=time&desc=false&status=upcoming&sig_id=186737513&sig=5fb3751fa7a6004ce0e74889648a52cb58cdca08'

const urlEvents = 'https://api.meetup.com/trivalleycoders/events?photo-host=public&page=20&sig_id=190749806&fields=featured_photo&sig=0bddee672e7dd047d4fc2cc13267ab403a8d4f3e'


export const rejectErrors = (res) => {

  const { status } = res
  if (status >= 200 && status < 300) {
    return res
  }
  return Promise.reject({ message: res.statusText })
}

export const fetchJson = (url, options = {}) => (

  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then(rejectErrors)
  .then((res) => res.json())//I bet this .json does not need to be here
)


export const fetchEvents = (url) => {
  console.log('fetchEvents')
  return fetchJsonp(url)
    .then((response) => {
      return response.json()
    })
}

export default {

  events: {
    readEvents() {
      return fetchJsonp(urlEvents).then(res => {
        return res.json()
      }).then(json => {
        console.log(json)
        return json
      })
    },
    readList() {
      return (urlEvents)
        .then((data) => {
          const normalized = normalize(data.results, arrayOf(events))
          const o = {
            events: normalized.entities.events || {},
            ids: normalized.result,
          }
          return o
        })
    },
    readListNew() {
      return fetchJson(urlEvents)
        .then((data) => {
          console.log('data', data)
          const normalized = normalize(data.results, arrayOf(events))
          const o = {
            events: normalized.entities.events || {},
            ids: normalized.result,
          }

          return o
        })
    },
  },

}
