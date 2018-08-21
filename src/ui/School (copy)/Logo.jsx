import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ResponsiveImage } from 'ui/ui-element/ResponsiveImage'


const Logo = ({ alt, classes, src}) => {
  return (
    <ResponsiveImage src={src} alt={alt}/>
  )
}
// <img src={src} alt={alt} className={classes.imgFluid} />
const styles = {
  imgFluid: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export default withStyles(styles)(Logo)