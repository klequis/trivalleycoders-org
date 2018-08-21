import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
/* User */
import Section from 'ui/ui-elements/Section'
import Display2 from 'ui/ui-elements/Display2'
import Display3 from 'ui/ui-elements/Display3'
import MediaPaper from 'ui/ui-elements/MediaPaper'
import { logoData } from './logoData'
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
        className={classes.bgRed}
      >
        <Display2>
          Gain Skills
        </Display2>
        <Display3>
          More than "coding"
        </Display3>

        <Display3>
          Making software
        </Display3>
      </Grid>




      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className={classes.bgGreen}
      >
      <MediaPaper
        height={logoData.html5.height}
        name={logoData.html5.name}
        src={logoData.html5.img}
        width={logoData.html5.width}
      />
      <MediaPaper
        height={logoData.css.height}
        name={logoData.css.name}
        src={logoData.css.img}
        width={logoData.css.width}
      />
      <MediaPaper
        height={logoData.mongo.height}
        name={logoData.mongo.name}
        src={logoData.mongo.img}
        width={logoData.mongo.width}
      />

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