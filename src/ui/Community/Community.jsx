import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
/* User */
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Section from 'ui/ui-elements/Section'
import Display2 from 'ui/ui-elements/Display2'
import Display3 from 'ui/ui-elements/Display3'
import MeetupButton from 'ui/ui-elements/MeetupButton'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const iCommunity = 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/community.jpg'

const Community = ({ classes }) => {
  return (
    <Section id='community' spacing={40}>

      <Grid
        item
        className={classes.bgBlue}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <ResponsiveImage src={iCommunity} alt='people talking at coffee shop' />
      </Grid>

      <Grid
        item
        container
        className={classes.bgRed}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        direction='column'
        justify='space-around'
        // alignItems='space-between'

      >
        <Display2
          align='center'
          className={classes.community}
        >
          Community
        </Display2>
        <Display3
          align='center'
          className={classes.developers}
        >
          Developers helping developers
        </Display3>
        <div className={classes.join}>
          <MeetupButton />
        </div>
      </Grid>

    </Section>
  )
}

const styles = theme => ({
  community: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px'
    },
  },
  developers: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px'
    },
  },
  join: {
    display: 'flex',
    justifyContent: 'center'
  }


})

export default withStyles(styles)(Community)