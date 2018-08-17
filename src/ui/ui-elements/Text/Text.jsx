import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import { green as greenl } from 'logger'

const left = 'left'
const center = 'center'
const right = 'right'
const dark = 'dark'
const light = 'light'
const headline = 'headline'
const green = 'green'
const body1 = 'body1'

/*
  children (node(s)): any
  variant (string): headline || green
  align (string): left || center || right
  shade (string): light || dark
*/
const classString = (classNames) => classNames.join(' ')

const Text = ({ align=left, children, classNames=[], color, shade=dark, theme, variant=headline }) => {
  // greenl('classString(classNames)', classString(classNames) === '')

  const fontColor = () => {
    let colorValue
    switch (variant) {
      case headline:
        if (color === green) {
           colorValue = theme.palette.common.headings.green
        } else if (shade === dark) {
          colorValue = theme.palette.common.headings.dark
        } else {
          theme.palette.common.headings.light
        }
        break
      default: // body1, body2
        if (color === green) {
          colorValue = theme.palette.common.text.green
        } else if (shade === dark) {
          colorValue = theme.palette.common.text.dark
        } else {
          colorValue = theme.palette.common.text.light
        }
    }
    const ret = { color: colorValue }
    // greenl('ret', ret)
    return ret
  }

  return (
    <Typography
      variant={variant}
      align={align}
      className={classString(classNames)}
      style={fontColor()}
    >
      {children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  },
})

// wordSpacing: '-2px',

export default withStyles(
  styles,
  { withTheme: true }
)(Text)