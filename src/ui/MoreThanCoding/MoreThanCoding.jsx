import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import Section, { grey, darkGrey, white } from 'ui/ui-elements/Section'
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
        TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.
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