import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import Home from 'ui/Home'
import withRoot from './withRoot'
import Breakpoints from 'ui/ui-elements/Breakpoints'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Breakpoints/>
          <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

export default withRoot(App)
