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
import Divider1 from 'ui/ui-elements/Divider/Divider1'
import Divider2 from 'ui/ui-elements/Divider/Divider2'
import Divider3 from 'ui/ui-elements/Divider/Divider3'
import DividerBlank from 'ui/ui-elements/Divider/DividerBlank'
import Breakpoints from 'ui/ui-elements/Breakpoints'

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Header />
      <Breakpoints />
      <Community />
      <Divider1 />
      <Skills />
      <Divider2 />
      <Team />
      <Divider3 />
      <Events />
      <Divider1 />
      <Sponsors />
      <DividerBlank />

      <Footer />
    </React.Fragment>
  )
}

const styles = {
}

export default withStyles(styles)(Home)