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
      <div className={classes.wrapper}>
        <div className={classes.messageDiv}>
          <Text
            align='left'
            shade='light'
            variant='body2'
          >
            'Employers want developers who can "make software"'.
          </Text>
        </div>
        <div className={classes.titleDiv}>
          <Text
            align='center'
            shade='light'
            variant='display1'
          >
            More Than Coding
          </Text>
          <Text
            align='center'
            shade='light'
            variant='display1'
          >
            "Making Software"
          </Text>
        </div>

      </div>
    </Section>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap'
  },
  messageDiv: {
    flexBasis: '50%',
  },
  titleDiv: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    flexBasis: '50%',
  },
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