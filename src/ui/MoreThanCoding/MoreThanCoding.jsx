import React from 'react'
import {
  withStyles,
} from '@material-ui/core'

/* User */
import Section, { grey } from 'ui/ui-elements/Section'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Text from 'ui/ui-elements/Text'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const MoreThanCoding = ({ classes }) => {
  return (
    <Section id='more-than-coding' color={grey}>
      <SectionTitle variant='display1' bgColor='dark'>
        More then Coding
      </SectionTitle>
      <Text
        align='center'
        shade='light'
        variant='headline'
      >
        'Learning to code' is fun and a great catch-phrase but it is only a small part of what it takes to make software and be a software developer. At TriValley Coders we cover project creation to deployment and everything in between.
      </Text>
    </Section>
  )
}

const styles = theme => ({
  headline: {
    // backgroundColor: 'orange',
    wordSpacing: '-2px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    // fontSize: '1.5rem',
  },
  imageDiv: {
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit * 2
    },
  },
  headlineDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%',
    padding: '2% 4% 2% 4%',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexFlow: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing.unit * 2,
    },
    [theme.breakpoints.up('xl')]: {
      margin: theme.spacing.unit * 2,
    },
  }
})

export default withStyles(styles)(MoreThanCoding)