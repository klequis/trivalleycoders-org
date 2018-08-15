import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import { green } from 'logger'

export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

// import { grey } from '@material-ui/core/colors'

const Section = ({ classes, color='white', id, children }) => {
  green('color', color)
  const sectionStyle = color => {
    switch (color) {
      case grey:
        green('case', grey)
        return classes.bgGrey
      case darkGrey:
        green('case', darkGrey)
        return classes.bgDarkGrey
      case white:
        green('case', white)
        return classes.bgWhite
      default:
        green('default')
        throw new Error('default')
    }
  }
  return (
    <section id={`section-outer-${id}`} className={sectionStyle(color)}>
      <section id={`section-inner-${id}`} className={classes.bgInner}>
        {children}
      </section>
    </section>
  )
}

const styles = theme => ({
  bgGrey: {
    backgroundColor: theme.palette.common.grey,
    width: '100vw',
    minHeight: '100px'
  },
  bgDarkGrey: {
    backgroundColor: theme.palette.common.darkGrey,
    width: '100vw',
    minHeight: '100px'
  },
  bgWhite: {
    backgroundColor: theme.palette.common.white,
    width: '100vw',
    minHeight: '100px'
  },
  bgInner: {
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