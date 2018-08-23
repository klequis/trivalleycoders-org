import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
/* User */
import Section from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import SponsorsGrid from './SponsorsGrid'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <Section id='sponsors'>
      <div className={classes.title}>
        <SectionTitle >
          Our Sponsors
        </SectionTitle>
      </div>
      <SponsorsGrid />
    </Section>
  )
}

const styles = {
  title: {
    width: '100%',
    marginBottom: '25px'
  }
}
export default withStyles(styles)(School)