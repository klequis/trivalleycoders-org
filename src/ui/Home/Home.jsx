import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Community from 'ui/Community'
// import School from 'ui/School'
// import MoreThanCoding from 'ui/MoreThanCoding'
// import Events from 'ui/Events'
// import Sponsors from 'ui/Sponsors'
// import Header from 'ui/Header'
// import AppBar from 'ui/AppBar'

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Community />

    </React.Fragment>
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

/*
    <School />
      <MoreThanCoding />
      <Events />
      <Sponsors />
*/