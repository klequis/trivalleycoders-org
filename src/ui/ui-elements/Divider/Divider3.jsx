import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'

import { styles } from './styles'
import Section from 'ui/ui-elements/Section'
import Bug from 'ui/ui-elements/svg/Bug'
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
      id='Divider3'
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

export default withStyles(styles)(Divider)
