import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green } from 'logger'

/*
    color: light || dark
*/


const Headline = ({ children, className, bgColor='light', theme, align='left' }) => {
  const fontColor = {
    color: bgColor === 'light'
      ? theme.palette.common.headings.dark
      : theme.palette.common.headings.light
  }
  return (
    <Typography
      variant='headline'
      align={align}
      className={className}
      style={fontColor}
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

 // backgroundColor: 'orange',
 // wordSpacing: '-2px',
 // textAlign: 'center',


export default withStyles(
  styles,
  { withTheme: true }
)(Headline)