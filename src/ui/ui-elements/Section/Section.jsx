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

/*
    - alignContent
    - alignItems
    - direction
    - justify
    - spacing
    - wrap
*/

const Section = ({
  alignContent,
  alignItems,
  classes,
  color='white',
  children,
  direction,
  id,
  justify,
  spacing,
  wrap,
}) => {
  return (

    <section id={`section-outer-${id}`} className={`${classes.outer}`}>
      <Grid
        alignContent={alignContent}
        alignItems={alignItems}
        container
        justify={justify}
        direction={direction}
        spacing={spacing}
        wrap={wrap}
      >
        {children}
      </Grid>
    </section>
  )
}

const styles = theme => ({

  outer: {
    padding: '0 10% 0 10%',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },

    // backgroundColor: 'red',
  },
})

export default withStyles(styles)(Section)

// divider: {
  //   height: 0.5,
	//   backgroundImage: 'linear-gradient(to right, #F79533,#F37055,#EF4E7B,#A166AB,#5073B8,#1098AD,#07B39B,#6FBA82)',
  // },

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


  // inner: {
  //   width: '80vw',
  //   minHeight: '100px',
  //   margin: '0 auto',
  //   display: 'flex',
  //   flexFlow: 'column nowrap',
  //   alignItems: 'center',
  //   // border: '1px green solid',
  //   // backgroundColor: 'purple',
  // },

  // bgGrey: {
  //   width: '100vw',
  //   minHeight: '100px'
  //   // backgroundColor: theme.palette.common.background.medium,
  // },
  // bgDarkGrey: {
  //   width: '100vw',
  //   minHeight: '100px'
  //   // backgroundColor: theme.palette.common.background.dark,
  // },
  // bgWhite: {
  //   width: '100vw',
  //   minHeight: '100px'
  //   // backgroundColor: theme.palette.common.background.light,
  // },