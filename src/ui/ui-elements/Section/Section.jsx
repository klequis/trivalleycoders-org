import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
// eslint-disable-next-line
import { green } from 'logger'

export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

// import { grey } from '@material-ui/core/colors'

const Section = ({ classes, color='white', id, children }) => {
  // const sectionStyle = color => {
  //   switch (color) {
  //     case grey:
  //       return classes.bgGrey
  //     case darkGrey:
  //       return classes.bgDarkGrey
  //     case white:
  //       return classes.bgWhite
  //     default:
  //       throw new Error('default')
  //   }
  // }
  // green(`sectionStyle: ${id}` , sectionStyle(color))
  return (

    <section id={`section-outer-${id}`} className={`${classes.outer}`}>
      <section id={`section-inner-${id}`} className={`${classes.bgInner} ${classes.test}`}>
        {children}
      </section>
    </section>
  )
}

// <section id={`section-outer-${id}`} className={`${sectionStyle(color)} ${classes.outer}`}>

const styles = theme => ({
  outer: {
    paddingBottom: '28px'
  },
  bgGrey: {
    // backgroundColor: theme.palette.common.background.medium,
    width: '100vw',
    minHeight: '100px'
  },
  bgDarkGrey: {
    // backgroundColor: theme.palette.common.background.dark,
    width: '100vw',
    minHeight: '100px'
  },
  bgWhite: {
    // backgroundColor: theme.palette.common.background.light,
    width: '100vw',
    minHeight: '100px'
  },
  bgInner: {
    // backgroundColor: 'transparent',
    width: '80vw',
    minHeight: '100px',
    // border: '1px green solid',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
})

export default withStyles(styles)(Section)