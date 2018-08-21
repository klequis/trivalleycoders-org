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
import Logo from './Logo'
import { row1, row2 } from './logoData'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Body2 from 'ui/ui-elements/Body2'
import Headline from 'ui/ui-elements/Headline'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Skills = ({ classes }) => {
  return (
    <React.Fragment>
    <div className={classes.titles}>
      <SectionTitle>Making Software</SectionTitle>
      <Headline align='center'>
        It takes a stack to build an app!
      </Headline>
    </div>
    <Section
      id='skills'
      spacing={24}
      direction='row'
      justify='center'
    >
      {
        row1.map(l => {

          return (
            <Grid
              id='grid-item'
              item
              className={classes.item}
              xs={12}
              md={6}
              container
              justify='center'
            >
              <Logo
                paperWidth={300}
                src={l.img}
                imageHeight={l.height}
                imageWidth={l.width}
              />
            </Grid>
          )
        })
      }
    </Section>
    </React.Fragment>
  )
}

const styles = theme => ({
  gridItem: {
    backgroundColor: 'green'
  },
  // headline: {
  //   marginBottom: theme.spacing.unit * 2
  // },
  titles: {
    // paddingTop: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
    // height: theme.spacing.unit * 4000
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  row1: {
    backgroundColor: 'purple',
    // margin: theme.spacing.uinit * 3
    // paddingTop: theme.spacing.unit * 4,
    // paddingBottom: theme.spacing.unit * 4,
    // margin: 40,
  },
  bottomRow: {
    // backgroundColor: 'green'
    // paddingTop: theme.spacing.unit * 4,
    // paddingBottom: theme.spacing.unit * 4,

  },
  skills: {
    backgroundColor: 'purple'
  }
})
export default withStyles(styles)(Skills)
