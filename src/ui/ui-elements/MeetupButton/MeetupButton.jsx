import React from 'react'
import {
  Button,
  withStyles,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeetup } from '@fortawesome/free-brands-svg-icons'
/* User */
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const MeetupButton = ({ classes }) => {
  return (
    <a href='https://www.meetup.com/trivalleycoders/'>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        <FontAwesomeIcon icon={faMeetup} /> Join Us via Meetup!
      </Button>
    </a>
  )
}

const styles = {}
export default withStyles(styles)(MeetupButton)