import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
/* User */
import TechIcons from './TechIcons'
import Section from 'ui/ui-elements/Section'
import Display2 from 'ui/ui-elements/Display2'
import Display3 from 'ui/ui-elements/Display3'
import Display4 from 'ui/ui-elements/Display4'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <Section id='school'>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        direction='column'
        justify='space-around'
        // className={classes.bgRed}
      >
        <Display2
          align='center'
        >
          Gain Skills
        </Display2>
        <Display4
          align='center'
        >
          More than "coding"
        </Display4>

        <Display3
          align='center'
        >
          Making software!
        </Display3>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        // className={classes.bgGreen}
      >
        <TechIcons />
      </Grid>

    </Section>
  )
}

const styles = {
  bgRed: {
    backgroundColor: 'red'
  },
  bgGreen: {
    backgroundColor: 'green'
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    // backgroundColor: 'purple',
    width: '100%',
  },
  newSkills: {
    flexBasis: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    //textAlign: 'center',
    // backgroundColor: 'green',
  },
  logos: {
    flexBasis: '50%',
    // backgroundColor: 'blue',
  },
}
export default withStyles(styles)(School)