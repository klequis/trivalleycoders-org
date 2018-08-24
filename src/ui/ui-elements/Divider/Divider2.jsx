import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'


import Section from 'ui/ui-elements/Section'
import { styles } from './styles'
import Cog from 'ui/ui-elements/svg/Cog'
import Desktop from 'ui/ui-elements/svg/Desktop'
import EyeDropper from 'ui/ui-elements/svg/EyeDropper'
import FileCode from 'ui/ui-elements/svg/FileCode'

// eslint-disable-next-line
import { green } from 'logger'


export const darkGrey = 'darkGrey'
export const grey = 'grey'
export const white = 'white'

const Divider = ({ classes }) => {

  return (

    <Section
      id='Divider2'
      color='transparent'
      className={classes.divider}
    >
      <Grid
        container
      >
        <Grid
          item
          xs={3}
          container
          justify='center'
        >
          <Cog
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
          <Desktop
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
          <FileCode
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
          <EyeDropper
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

export default withStyles(styles)(Divider)