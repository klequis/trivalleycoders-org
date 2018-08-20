import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green as greenl } from 'logger'

const Display6 = ({ children, theme }) => {
  greenl('Display6: theme', theme)
  return (
    <Typography variant='display6'>
      {children}
    </Typography>
  )
}

const styles = {

}

export default withStyles(styles, { withTheme: true })(Display6)