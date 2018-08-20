import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green } from 'logger'

/*
    color: light || dark
*/


const SectionTitle = ({ children, classes, bgColor='light', theme }) => {

  // const fontColor = {
  //   color: bgColor === 'light'
  //     ? theme.palette.common.headings.dark
  //     : theme.palette.common.headings.light
  // }
  return (
    <Typography
      variant='display1'
      align='center'
      className={classes.root}
      // style={fontColor}
    >
      {children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  }
})
export default withStyles(
  styles,
  { withTheme: true }
)(SectionTitle)