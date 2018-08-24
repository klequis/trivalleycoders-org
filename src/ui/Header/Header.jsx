import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import Section from 'ui/ui-elements/Section'
import Headline from 'ui/ui-elements/Headline'
/* User */

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Header = ({ classes }) => {
  return (
    <Section id='header'>
      <Grid
        item
        xs={12}
        // justify='center'
        className={classes.wordWrap}
      >
        <div id='tvc' className={classes.tvc}>
          <span className={classes.wordTrivalleyDesktop}>TriValley</span>
          <span className={classes.wordCodersDesktop}>coders</span>
        </div>
        <Headline
          align='center'
        >
          Don't code alone!
        </Headline>
      </Grid>
    </Section>
  )
}

const styles = theme => ({
  wordWrap: {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
    },
  },
  tvc: {
    textAlign: 'center',
    lineHeight: '2.6rem',

    marginBottom: '0.5rem',
  },
  wordTrivalleyDesktop: {
    color: 'white',
    // eslint-disable-next-line
    fontFamily: "'Wallpoet', cursive",
    fontSize: '2.6rem',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.34rem'
    },
  },
  wordCodersDesktop: {
    color: '#53EB76',
    // eslint-disable-next-line
    fontFamily: "'Ubuntu Mono', monospace",
    fontSize: '3.0rem',
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.7rem'
    },
  },

})
export default withStyles(styles)(Header)