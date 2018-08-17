// Events
import React from 'react'
import { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import * as actionCreators from 'store/actions'
import * as selectors from 'store/selectors'
import EventsGrid from './EventsGrid'
import Section from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Text from 'ui/ui-elements/Text'
import A from 'ui/ui-elements/A'


class Events extends Component {
  componentWillMount() {
    this.props.requestReadEvents()
  }

  render() {

    const { readEventsRequest, events } = this.props



    switch (readEventsRequest.status) {
      case 'success':
        return (
          <Section id='events'>
            <SectionTitle>Free Events</SectionTitle>
            <EventsGrid events={events} />
          </Section>
        )

      case 'failure':
        return (
          <Section>
            <SectionTitle title='Free Events'>
              Free Events
            </SectionTitle>
            <Text>Something went wrong. Our events cannot be shown now. Please visit our group on Meetup <A href='https://www.meetup.com/trivalleycoders/'>TriValley Coders on Meetup</A></Text>
          </Section>
        )
      default:
        return (
          <Section>
            <Section title='Free Events' fontColor='green'>
              <SectionTitle>
                Free Events
              </SectionTitle>
              <Text>Loading ... </Text>
            </Section>
          </Section>
        )
    }
  }
}

// Events.propTypes = {
//   requestReadEvents: PropTypes.func.isRequired,
//   readEventsRequest: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => {
  return {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    events: selectors.getEvents(state),
  }
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