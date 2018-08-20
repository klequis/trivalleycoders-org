import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green as greenl } from 'logger'

const Display4 = ({ children }) => {
  return (
    <Typography variant='display4'>
      {children}
    </Typography>
  )

}

const styles = {

}

export default withStyles(styles)(Display4)