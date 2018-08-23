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

const School = () => {
  return (
    <Section id='sponsors'>
      <SectionTitle>
        Our Sponsors
      </SectionTitle>
      <SponsorsGrid />
    </Section>
  )
}

const styles = {
}
export default withStyles(styles)(School)