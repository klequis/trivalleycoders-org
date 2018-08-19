import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Section from 'ui/ui-elements/Section'
/* User */

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Header = ({ classes }) => {
  return (
    <Section>
      <div id='branding-desktop' className={classes.brandingDesktop}>
        <span className={classes.wordTrivalleyDesktop}>TriValley</span>
        <span className={classes.wordCodersDesktop}>coders</span>

      </div>
    </Section>
  )
}


const styles = {

  brandingDesktop: {
    alignItems: 'baseline',
    display: 'flex',
    flexFlow: 'row nowrap',
    // backgroundColor: 'yellow',
    width: '100%',
    // justifyContent: 'flex-start',
    // textAlign: 'left',
    // flexGrow: 10,
  },

  wordTrivalleyDesktop: {
    color: 'white',
    // eslint-disable-next-line
    fontFamily: "'Wallpoet', cursive",
    fontSize: '2.6em',
    marginRight: '20px',
  },
  wordCodersDesktop: {
    color: '#53EB76',
    // eslint-disable-next-line
    fontFamily: "'Ubuntu Mono', monospace",
    fontSize: '3.0em',
    fontWeight: 700,
  },

}
export default withStyles(styles)(Header)