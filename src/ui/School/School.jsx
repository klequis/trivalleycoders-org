import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
/* User */
import TechIcons from './TechIcons'
import Section, { darkGrey } from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Text from 'ui/ui-elements/Text'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const School = ({ classes }) => {
  return (
    <Section id='school' color={darkGrey}>
      <div className={classes.wrapper}>
        <div className={classes.newSkills}>
          <Text
            variant='display1'
          >
            Gain Skills
          </Text>
        </div>
        <div className={classes.logos}>
          <TechIcons />
        </div>
      </div>


    </Section>
  )
}

const styles = {
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