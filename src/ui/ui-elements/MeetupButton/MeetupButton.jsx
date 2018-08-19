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
    <a href='https://www.meetup.com/trivalleycoders/events'>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        <FontAwesomeIcon className={classes.leftIcon} icon={faMeetup} /> Join Us via Meetup!
      </Button>
    </a>
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 40,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

export default withStyles(styles)(MeetupButton)