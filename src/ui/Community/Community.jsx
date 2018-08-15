import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import iCommunity from './media/community.4.jpg'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import MeetupButton from 'ui/ui-elements/MeetupButton'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Community = ({ classes }) => {
  return (
    <React.Fragment>
      <Typography variant='display1'>
        A Community
      </Typography>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <ResponsiveImage src={iCommunity} alt='people talking at coffee shop' />
        </div>
        <div className={classes.contentRight}>
          <Typography variant='headline' align='justify'>
            TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.
          </Typography>
        </div>
      </div>
      <MeetupButton />
    </React.Fragment>
  )
}

const styles = {
  content: {
    display: 'flex',

  },
  contentLeft: {
    flexBasis: '50%',
  },
  contentRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%',
    margin: '0 4% 0 4%'
  },
}
export default withStyles(styles)(Community)