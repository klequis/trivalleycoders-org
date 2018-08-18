import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
/* User */
import Section, { darkGrey } from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import SponsorsGrid from './SponsorsGrid'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <Section id='sponsors' color={darkGrey}>
      <SectionTitle bgColor='dark'>
        Our Sponsors
      </SectionTitle>
      <SponsorsGrid />
    </Section>
  )
}

const styles = {
}
export default withStyles(styles)(School)