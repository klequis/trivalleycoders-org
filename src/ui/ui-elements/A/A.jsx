import React from 'react'
import { withStyles } from '@material-ui/core'

import Body1 from 'ui/ui-elements/Body1'

const A = ({ classes, children, href}) => {
  return (
    <a href={href} className={classes.a}>
      <Body1
        variant='body1'
        color='green'
      >
        {children}
      </Body1>
    </a>
  )
}

const styles = {
  a: {
    textDecoration: 'none'
  }
}
export default withStyles(styles)(A)
