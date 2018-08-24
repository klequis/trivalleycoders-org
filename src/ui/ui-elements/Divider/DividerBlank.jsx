import React from 'react'
import {
  withStyles,
} from '@material-ui/core'


import Section from 'ui/ui-elements/Section'

// eslint-disable-next-line
import { green } from 'logger'


export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

const Divider = ({ classes }) => {

  return (

    <Section
      id='DividerBlank'
      color='transparent'
      className={classes.divider}
    >

    </Section>
  )
}

const styles = theme => ({
  divider: {
    margin: '50px 0 40px 0'
  }
})

export default withStyles(styles)(Divider)
