import React from 'react'
import PropTypes from 'prop-types'
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
  className,
  classes,
  color='transparent',
  children,
  direction,
  id,
  justify,
  spacing,
  wrap,
}) => {

  const outerStyle = {
    backgroundColor: color
  }
  return (

    <section
      id={`section-outer-${id}`}
      className={`${classes.outer}`}
      style={outerStyle}
    >
      <Grid
        alignContent={alignContent}
        alignItems={alignItems}
        className={className}
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

Section.propTypes = {
  id: PropTypes.string.isRequired
}

const styles = theme => ({

  outer: {
    padding: '0 10% 0 10%',

    [theme.breakpoints.down('sm')]: {
      padding: '0 2% 0 2%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 20% 0 20%',
    },
    // paddingBottom: theme.spacing.unit
    // backgroundColor: 'red',
  },
})

export default withStyles(styles)(Section)

