import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Community from 'ui/Community'
import Skills from 'ui/Skills'
import Events from 'ui/Events'
import Sponsors from 'ui/Sponsors'
import Header from 'ui/Header'
import Team from 'ui/Team'
import Footer from 'ui/Footer'
import Divider from 'ui/ui-elements/Divider'

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Header />
      <Community />
      <Divider />
      <Skills />
      <Team />
      <Events />
      <Sponsors />
      <Footer />
    </React.Fragment>
  )
}

const styles = {
}

export default withStyles(styles)(Home)