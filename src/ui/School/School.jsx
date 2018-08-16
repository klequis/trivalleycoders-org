import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
/* User */
import TechIcons from './TechIcons'
import Section, { darkGrey } from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <Section id='school' color={darkGrey}>
      <SectionTitle bgColor='dark'>
        A Place to Learn
      </SectionTitle>
      <TechIcons />
    </Section>
  )
}

const styles = {
}
export default withStyles(styles)(School)