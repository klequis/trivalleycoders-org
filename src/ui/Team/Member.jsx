import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import Body1 from 'ui/ui-elements/Body1'
import Body2 from 'ui/ui-elements/Body2'
import { green } from 'logger'

const Member = ({ alt, classes, src, imageHeight, imageWidth, name, paperWidth, role }) => {
  const paperStyle = {
    // height: 88,
    width: paperWidth
  }
  return (
    <Paper id='paper' className={classes.paper} style={paperStyle}>
      <img
        src={src}
        alt={alt}
        className={classes.imgFluid}
        height={imageHeight}
        width={imageWidth}
      />
      <Body2
        align='center'
        className={classes.body2}
      >
        {name}
      </Body2>
      <Body1
        align='center'
        className={classes.body1}
        gutterBottom={true}
      >
        {role}
      </Body1>
    </Paper>
  )
}

const styles = theme => ({
  body2: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  body1: {
    marginBottom: theme.spacing.unit,
  },
  imgFluid: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    // padding: theme.spacing.unit * 3,
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column nowrap',

    // width: 300,
    height: '100%',

    // [theme.breakpoints.down('sm')]: {
    //   width: '80%'
    // },
  }
})

export default withStyles(styles)(Member)

Member.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}