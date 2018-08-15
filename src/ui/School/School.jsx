import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import TechIcons from './TechIcons'
import GridList from './GridList'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <React.Fragment>
      <Typography variant='display1'>
        A Place to Learn
      </Typography>
      <TechIcons />
    </React.Fragment>
  )
}

const styles = {
}
export default withStyles(styles)(School)