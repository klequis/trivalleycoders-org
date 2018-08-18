import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
/* User */
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import SectionTitle from 'ui/ui-elements/SectionTitle'
import Section, { white } from 'ui/ui-elements/Section'
import Text from 'ui/ui-elements/Text'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const iCommunity = 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/community.jpg'

const Community = ({ classes }) => {
  return (
    <Section id='community' color={white}>
      <SectionTitle>
        A Community
      </SectionTitle>
      <div className={classes.content}>
        <div className={classes.imageDiv}>
          <ResponsiveImage src={iCommunity} alt='people talking at coffee shop' />
        </div>
        <div className={classes.headlineDiv}>

          <Text
            align='center'
            shade='dark'
            classNames={[classes.headline]}
          >
            TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.
          </Text>

        </div>
      </div>
    </Section>
  )
}

const styles = theme => ({
  headline: {

    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
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

export default withStyles(styles)(Community)