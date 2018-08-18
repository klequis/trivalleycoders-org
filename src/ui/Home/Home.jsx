import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Community from 'ui/Community'
import School from 'ui/School'
import MoreThanCoding from 'ui/MoreThanCoding'
import Events from 'ui/Events'
import Sponsors from 'ui/Sponsors'

const Home = ({ classes }) => {
  return (
    <div id='app-wrapper' className={classes.appWrapper}>
      <Community />
      <School />
      <MoreThanCoding />
      <Events />
      <Sponsors />
    </div>
  )
}

const styles = {
  appWrapper: {
    // backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
  }
}

export default withStyles(styles)(Home)