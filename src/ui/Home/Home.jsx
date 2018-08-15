import React from 'react'
import {
  withStyles,
  Typography,
} from '@material-ui/core'
import Section, { grey, darkGrey, white } from 'ui/ui-elements/Section'
import Community from 'ui/Community'
import School from 'ui/School'

const Home = ({ classes }) => {
  return (
    <div id='app-wrapper' className={classes.appWrapper}>
      <Section id='community' color={white}>
        <Community />
      </Section>
      <Section id='school' color={darkGrey}>
        <School />
      </Section>
      <Section id='school' color={grey}>
        <Typography variant='display1'>
          More then Coding
        </Typography>
      </Section>
    </div>
  )
}

const styles = {
  appWrapper: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
  },



  sectionInnerGrey: {
    backgroundColor: 'white',
    width: '80vw',
    minHeight: '100px',
    border: '1px green solid',
    margin: '0 auto',
  },
}

export default withStyles(styles)(Home)