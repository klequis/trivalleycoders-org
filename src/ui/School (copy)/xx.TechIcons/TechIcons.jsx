import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import MediaPaper from 'ui/ui-elements/MediaPaper'
import { logoData } from './logoData'

const TechIcons = ({ classes }) => {
  return (

  )
}

const styles = theme => ({
  mediCard: {
    // boxShadow: '0px 10px 30px 0px rgba(255, 0, 0, 0.2),0px 1px 1px 0px rgba(255, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  },
  item: {
    // boxShadow: '0px 10px 30px 0px rgba(255, 0, 0, 0.2),0px 1px 1px 0px rgba(255, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'orange',
    border: '1px solid black',
  },
  root: {
    flexGrow: 1

  },
  paper: {
    // height: 50,
    backgroundColor: 'transparant',
    // width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  gridBottom: {
    // marginTop: 40,
  },
  gridTop: {

  },
})

export default withStyles(styles)(TechIcons)