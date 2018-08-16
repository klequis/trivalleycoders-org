import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green } from 'logger'

const left = 'left'
const center = 'center'
const right = 'right'
const dark = 'dark'
const light = 'light'
const headline = 'headline'

/*
  children (node(s)): any
  variant (string): headline
  align (string): left || center || right
  shade (string): light || dark
*/
const classString = (classNames) => classNames.join(' ')

const Text = ({ align=left, children, classNames=[], shade=dark, theme, variant=headline }) => {
  // green('classes', classes.length)
  const fontColor = {
    color: shade === dark
      ? theme.palette.common.headings.dark
      : theme.palette.common.headings.light
  }
  return (
    <Typography
      variant={variant}
      align={align}
      className={classString(classNames)}
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

// wordSpacing: '-2px',

export default withStyles(
  styles,
  { withTheme: true }
)(Text)