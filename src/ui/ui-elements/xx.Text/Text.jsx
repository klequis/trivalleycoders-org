import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'

/* User */
import Display1 from './Display1'
import Display2 from './Display2'
import Display3 from './Display3'
import Display4 from './Display4'
// import Display5 from './Display5'
// import Display6 from './Display6'
/* Dev */
import { green as greenl } from 'logger'

const left = 'left'
const dark = 'dark'
const headline = 'headline'
const green = 'green'
// future ?
// const center = 'center'
// const right = 'right'
// const light = 'light'
// const body1 = 'body1'

/*
  children (node(s)): any
  variant (string): headline || green
  align (string): left || center || right
  shade (string): light || dark
*/
const classString = (classNames) => classNames.join(' ')




const Text = ({ align=left, children, classNames=[], color, shade=dark, theme, variant=headline }) => {
  // greenl('classString(classNames)', classString(classNames) === '')
  greenl('children', children)
  switch (variant) {
    case 'display1':
      greenl('case display1')
      return <Display1>{children}</Display1>
    case 'display2':
      greenl('case display2')
      return <Display2>{children}</Display2>
    case 'display3':
      greenl('case display3')
      return <Display3>{children}</Display3>
    case 'display4':
      greenl('case display4')
      return <Display4>{children}</Display4>
    default:
      greenl('case default')
      throw new Error('unknown text variant type')
  }

}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  },
  display1: {

  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 10,
  },
})

// wordSpacing: '-2px',

export default withStyles(
  styles,
  { withTheme: true }
)(Text)

// const fontColor = () => {
  //   let colorValue
  //   switch (variant) {
  //     case headline:
  //       if (color === green) {
  //          colorValue = theme.palette.common.headings.green
  //       } else if (shade === dark) {
  //         colorValue = theme.palette.common.headings.dark
  //       } else {
  //         colorValue = theme.palette.common.headings.light
  //       }
  //       break
  //     default: // body1, body2
  //       if (color === green) {
  //         colorValue = theme.palette.common.text.green
  //       } else if (shade === dark) {
  //         colorValue = theme.palette.common.text.dark
  //       } else {
  //         colorValue = theme.palette.common.text.light
  //       }
  //   }
  //   const ret = { color: colorValue }
  //   // greenl('ret', ret)
  //   return ret
  // }