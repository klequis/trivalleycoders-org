import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  imgFluid: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

const ResponsiveImage = ({ alt, classes, src}) => {
  return (
    <img src={src} alt={alt} className={classes.imgFluid} />
  )
}

export default withStyles(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}