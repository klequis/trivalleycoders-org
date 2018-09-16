import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
/* User */
import Section from 'ui/ui-elements/Section'
import Body1 from 'ui/ui-elements/Body1'
import A from 'ui/ui-elements/A'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Footer = ({ classes }) => {
  return (
    <Section
      id='footer'
      spacing={40}
      direction='row'
      justify='center'
      color='#161616'

    >
    <div className={classes.footer}>
      <Grid
        item
        container
        xs={12}
        justify='center'
      >
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://www.meetup.com/trivalleycoders/events/253711564/'><FontAwesomeIcon className={classes.meetup} icon={faMeetup} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://github.com/trivalleycoders-org'><FontAwesomeIcon className={classes.github} icon={faGithub} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ'><FontAwesomeIcon className={classes.slack} icon={faSlack} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://www.facebook.com/groups/free.code.camp.sanramon/'><FontAwesomeIcon className={classes.facebook} icon={faFacebook} /></A>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.bgPurple}
      >
        <Body1
          align='center'
          className={classes.body1}
        >
          &copy; 2017 TriValley Coders &trade; All rights reserved.
        </Body1>
        <Body1
          align='center'
        >
          <i>Don't code alone!</i> &trade;
        </Body1>

      </Grid>
      </div>
    </Section>
  )
}


const styles = theme => ({
  footer: {
    margin: '50px 0 50px 0',
    // width: '100%',
    maxWidth: '90%',
  },
  body1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  meetup: {
    color: '#f64060',
    fontSize: '3em',
    margin: '10px',
  },
  github: {
    color: 'white',
    fontSize: '3em',
    margin: '10px',
  },
  slack: {
    color: 'white',
    fontSize: '3em',
    margin: '10px',
  },
  facebook: {
    color: '#3e5b99',
    fontSize: '3em',
    margin: '10px',
  },
})
export default withStyles(styles)(Footer)