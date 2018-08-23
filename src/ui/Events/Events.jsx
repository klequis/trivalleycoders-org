// Events
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'store/actions'
import * as selectors from 'store/selectors'
import EventsGrid from './EventsGrid'
import Section, { darkGrey } from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import A from 'ui/ui-elements/A'
import { getCachedData, setCachedData } from 'lib/cacheData'
import Display1 from 'ui/ui-elements/Display1'
import { green } from 'logger'

class Events extends Component {
  state = {
    usingCashedData: false,
  }
  async componentWillMount() {
    const data = getCachedData('events')
    if (!data) {
      green('** Calling API')
      await this.props.requestReadEvents()
      setCachedData('events', this.props.events)
      this.setState({ usingCashedData: true })

    } else {
      green('** Using cached data')
      this.props.replaceEvents(data)
      this.setState({ usingCashedData: true })

    }
  }

  renderEvents = (events) => {
    return (
      <Section id='events'>
        <SectionTitle>Free Events</SectionTitle>
        <EventsGrid events={events} />
      </Section>
    )
  }

  render() {

    const { readEventsRequest, events } = this.props
    const { usingCashedData } = this.state
    if (usingCashedData) {
      return this.renderEvents(events)
    } else {
      switch (readEventsRequest.status) {
        case 'success':
          return this.renderEvents(events)
        case 'failure':
          return (
            <Section color={darkGrey} id='tmp'>
              <SectionTitle>
                Free Events
              </SectionTitle>
              <Display1>Something went wrong. Our events cannot be shown now. Please visit our group on Meetup <A href='https://www.meetup.com/trivalleycoders/'>TriValley Coders on Meetup</A></Display1>
            </Section>
          )
        default:
          return (
            <Section>
              <Section title='Free Events' fontColor='green'>
                <SectionTitle>
                  Free Events
                </SectionTitle>
                <Display1>Loading ... </Display1>
              </Section>
            </Section>
          )
      }
    }
  }
}

// Events.propTypes = {
//   requestReadEvents: PropTypes.func.isRequired,
//   readEventsRequest: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => {
  const o = {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    events: selectors.getEvents(state),
  }
  return o
}

export default connect(mapStateToProps, actionCreators)(Events)

/*
const renderEvents = this.props.events.map((e) => (
        <Event
          key={e.time}
          date={e.time}
          name={e.name}
          locationName={`${e.venue.name}`}
          locationAddress={`${e.venue.address_1}`}
          locationCity={`${e.venue.city}`}
          url={e.event_url}
          index={i++}
        />
      )
    )
*/