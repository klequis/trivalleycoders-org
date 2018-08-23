import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Logo = ({ alt, classes, src, imageHeight, imageWidth, paperHeight, paperWidth }) => {
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
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  }
})

export default withStyles(styles)(Logo)

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}