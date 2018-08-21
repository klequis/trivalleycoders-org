import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Display2 from 'ui/ui-elements/Display2'

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
    <Display2
      align='center'
      className={classes.root}
      // style={fontColor}
    >
      {children}
    </Display2>
  )
}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  }
})
export default withStyles(
  styles,
  { withTheme: true }
)(SectionTitle)