import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

/* Dev */
import { green } from 'logger'

const Sponsor = ({ classes, height, width, src, name, subTitle }) => {
  green('height', height)
  green('width', width)
  green('src', src)
  green('name', name)
  green('subTitle', subTitle)
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

export default withStyles(styles)(Sponsor)
