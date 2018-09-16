import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Display2 from 'ui/ui-elements/Display2'
// eslint-disable-next-line
import { green } from 'logger'

/*
    color: light || dark
*/


const SectionTitle = ({ children, classes, bgColor='light', theme }) => {

  return (
    <Display2
      align='center'
      className={classes.root}
    >
      {children}
    </Display2>
  )
}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
    color: 'rgba(255, 255, 255, 1)',
  }
})
export default withStyles(
  styles,
  { withTheme: true }
)(SectionTitle)