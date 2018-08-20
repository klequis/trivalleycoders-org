import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
// eslint-disable-next-line
import { green } from 'logger'

export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

// import { grey } from '@material-ui/core/colors'

const Section = ({ classes, color='white', id, children, spacing }) => {
  green('spacing', spacing)
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
      <Grid container spacing={spacing}>
        {children}
      </Grid>
    </section>
  )
}

// <section id={`section-inner-${id}`} className={`${classes.inner} $
// <section id={`section-outer-${id}`} className={`${sectionStyle(color)} ${classes.outer}`}>



const styles = theme => ({

  outer: {
    padding: '0 10% 28px 10%',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },

    // backgroundColor: 'red',
  },
  inner: {
    width: '80vw',
    minHeight: '100px',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    // border: '1px green solid',
    // backgroundColor: 'purple',
  },

  bgGrey: {
    width: '100vw',
    minHeight: '100px'
    // backgroundColor: theme.palette.common.background.medium,
  },
  bgDarkGrey: {
    width: '100vw',
    minHeight: '100px'
    // backgroundColor: theme.palette.common.background.dark,
  },
  bgWhite: {
    width: '100vw',
    minHeight: '100px'
    // backgroundColor: theme.palette.common.background.light,
  },

})

export default withStyles(styles)(Section)

// divider: {
  //   height: 0.5,
	//   backgroundImage: 'linear-gradient(to right, #F79533,#F37055,#EF4E7B,#A166AB,#5073B8,#1098AD,#07B39B,#6FBA82)',
  // },