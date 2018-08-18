import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
// eslint-disable-next-line
import { yellow } from 'logger'
// const events = new Schema('events', { idAttribute: 'time' })

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
  .then((res) => res.json())
)


export const fetchEvents = (url) => {
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
          return json.data
        })

    },
  },

}
