import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import { green } from 'logger'

const ResponsiveImage = ({ alt, classes, src, imageHeight, imageWidth, paperHeight, paperWidth }) => {
  const paperStyle = {
    height: 88,
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
    </Paper>
  )
}



const styles = theme => ({
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

    // width: 300,
    height: '100%',
    // [theme.breakpoints.down('sm')]: {
    //   width: '80%'
    // },
  }
})

export default withStyles(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}