import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'


import Section from 'ui/ui-elements/Section'
import Bug from 'ui/ui-elements/svg/Bug'
// import Code from 'ui/ui-elements/svg/Code'
import CodeBranch from 'ui/ui-elements/svg/CodeBranch'
import Coffee from 'ui/ui-elements/svg/Coffee'
import Code from 'ui/ui-elements/svg/Code'

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
          <Code
            startColor='#F79533'
            endColor='#F37055'
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
          <Bug
            startColor='#EF4E7B'
            endColor='#A166AB'
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
          <CodeBranch
            startColor='#5073B8'
            endColor='#1098AD'
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
          <Coffee
            startColor='#07B39B'
            endColor='#6FBA82'
            width={20}
            opacity={0.4}
          />
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
.text-spectrum--c {
	background: linear-gradient(80deg, #07B39B,#6FBA82);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.text-spectrum--y {
	background: linear-gradient(80deg, #F79533,#F37055);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.text-spectrum--m {
	background: linear-gradient(80deg, #EF4E7B,#A166AB);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.text-spectrum--k {
	background: linear-gradient(80deg, #5073B8,#1098AD);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

*/
