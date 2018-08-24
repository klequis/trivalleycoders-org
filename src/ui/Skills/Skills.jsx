import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
/* User */
import Section from 'ui/ui-elements/Section'
import Logo from './Logo'
import { row1 } from './logoData'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Headline from 'ui/ui-elements/Headline'
import Display3 from 'ui/ui-elements/Display3'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Skills = ({ classes }) => {
  return (
    <React.Fragment>
    <div className={classes.titles}>
      <SectionTitle>Making Software</SectionTitle>
      <Display3 align='center' className={classes.stack}>
        It takes a stack to build an app!
      </Display3>
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
              key={l.name}
              id='grid-item'
              item
              xs={12}
              md={6}
              container
              justify='center'
            >
              <Logo
                alt={l.name}
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
  stack: {
    marginBottom: theme.spacing.unit * 4
  },
  titles: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
})
export default withStyles(styles)(Skills)
