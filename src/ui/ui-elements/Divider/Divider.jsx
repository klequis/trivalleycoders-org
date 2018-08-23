import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import BugSvg from './BugSvg'
import CodeSvg from './CodeSvg'

import Section from 'ui/ui-elements/Section'
// eslint-disable-next-line
import { green } from 'logger'

export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

const Divider = ({ classes }) => {

  return (

    <Section
      color='transparent'
      className={classes.divider}
    >
      <Grid
        // alignContent={alignContent}
        // alignItems={alignItems}
        // className={className}
        container
        // justify={justify}
        // direction={direction}
        // spacing={spacing}
        // wrap={wrap}
      >
        <Grid
          item
          xs={3}
          container
          justify='center'
        >
          <CodeSvg
            startColor='orange'
            endColor='#FFF'
            width={20}
            opacity={0.4}
          />
        </Grid>
        <Grid
          item
          xs={3}
          container
          justify='center'
        >
          <BugSvg
            startColor='#F79533'
            endColor='#FFF'
            width={20}
            opacity={0.4}
          />
        </Grid>
        <Grid
          item
          xs={3}
          container
          justify='center'
        >

        </Grid>
        <Grid
          item
          xs={3}
          container
          justify='center'
        >
        </Grid>
      </Grid>
    </Section>
  )
}

const styles = theme => ({
  bug: {
    width: 15,
    fill: 'blue !importan'
  },
  icon: {
    // color: 'rgba(255, 255, 255, .2)',
    // textFillColor: 'rgba(0, 0, 0, 0)',
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'transparent',
    background: 'linear-gradient(80deg, #F79533,#F37055)',

  },
  divider: {
    margin: '50px 0 40px 0'
  }
  // outer: {
  //   padding: '0 10% 0 10%',

  //   [theme.breakpoints.down('sm')]: {
  //     padding: 0
  //   },
    // paddingBottom: theme.spacing.unit
    // backgroundColor: 'red',
  // },
})

export default withStyles(styles)(Divider)
/*
.Nav li a {
	position: relative;
	padding-left: 32px;
	transition: text-indent 0.3s ease-in-out, -webkit-text-fill-color 0.3s ease-in-out;
}
.text-spectrum--y {
	background: linear-gradient(80deg, #F79533,#F37055);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

*/
