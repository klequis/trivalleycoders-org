import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green as greenl } from 'logger'

const Display5 = ({ children }) => {
  return (
    <Typography variant='display5'>
      {children}
    </Typography>
  )

}

const styles = {

}

export default withStyles(styles)(Display5)