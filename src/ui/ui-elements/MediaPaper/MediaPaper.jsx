import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

const MediaPaper = ({ classes, height, name, src, width }) => {
  const paperStyle = {
    height: height,
    width: width,
  }
  return (
    <Paper elevation={0} className={classes.root} style={paperStyle}>
      <ResponsiveImage src={src} alt={name}/>
    </Paper>
  )
}

const styles = {
  root: {
    backgroundColor: 'transparent',
  }
}
export default withStyles(styles)(MediaPaper)