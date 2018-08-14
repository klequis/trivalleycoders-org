import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import { gray } from '@material-ui/core/colors'

const Section = ({ classes, color='white', id, children }) => {
  const sectionStyle = color === 'white' ? classes.outerWhite : classes.outerGray
  return (
    <section id={`section-outer-${id}`} className={sectionStyle}>
      <section id={`section-inner-${id}`} className={classes.inner}>
        {children}
      </section>
    </section>
  )
}

const styles = theme => ({
  outerGray: {
    backgroundColor: theme.palette.common.gray,
    width: '100vw',
    minHeight: '100px'
  },
  outerWhite: {
    backgroundColor: theme.palette.common.white,
    width: '100vw',
    minHeight: '100px'
  },
  inner: {
    backgroundColor: 'transparent',
    width: '80vw',
    minHeight: '100px',
    border: '1px green solid',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
})

export default withStyles(styles)(Section)