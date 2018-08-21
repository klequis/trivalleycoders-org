import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Community from 'ui/Community'
import Skills from 'ui/Skills'
// import MoreThanCoding from 'ui/MoreThanCoding'
import Events from 'ui/Events'
import Sponsors from 'ui/Sponsors'
import Header from 'ui/Header'
import Team from 'ui/Team'
// import AppBar from 'ui/AppBar'

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Header />
      <Community />
      <Skills />
      <Team />
      <Events />
      <Sponsors />
    </React.Fragment>
  )
}

const styles = {
  appWrapper: {
    height: '100vh',
    width: '100vw',
  }
}

export default withStyles(styles)(Home)