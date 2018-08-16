import React from 'react'
import {
  withStyles,
  Typography,
} from '@material-ui/core'
import Community from 'ui/Community'
import School from 'ui/School'
import MoreThanCoding from 'ui/MoreThanCoding'

const Home = ({ classes }) => {
  return (
    <div id='app-wrapper' className={classes.appWrapper}>
      <Community />
      <School />
      <MoreThanCoding />
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