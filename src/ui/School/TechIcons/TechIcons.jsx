import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import MediaPaper from 'ui/ui-elements/MediaPaper'

const size1 = 45
const size2 = 65

const logosTop = [
  {
    name: 'HTML 5',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/html.svg',
    height: size1,
    width: size1,
  },
  {
    name: 'CSS',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/css.svg',
    height: size1,
    width: size1,
  },
  {
    name: 'JavaScript',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/javascript.svg',
    height: size1,
    width: size1,
  },
  {
    name: 'React',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/react.svg',
    height: size1,
    width: size1,
  },
  {
    name: 'Node',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/nodejs.svg',
    height: size2,
    width: size2,
  },
]

const logosBottom = [
  {
    name: 'MongoDB',
    img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/mongodb.svg',
    height: 51.13636362,
    width: 180,
  },
  // {
  //   name: 'Express',
  //   img: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/express.svg',
  //   height: 51.13636362,
  //   width: 180,
  // },
]

const TechIcons = ({ classes }) => {
  return (
    <React.Fragment>
    <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}
          className={classes.item}
        >
          <Grid
            container
            className={classes.gridTop}
            justify='center'
            spacing={40}
          >
            {logosTop.map(l => (
              <Grid key={l.name} item className={classes.item}>
                <MediaPaper
                  height={l.height}
                  name={l.name}
                  src={l.img}
                  width={l.width}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.gridBottom}
            justify='center'
            spacing={24}
          >
            {logosBottom.map(l => (
              <Grid key={l.name} item>
                <MediaPaper
                  height={l.height}
                  name={l.name}
                  src={l.img}
                  width={l.width}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </React.Fragment>
  )
}

const styles = theme => ({
  mediCard: {
    // boxShadow: '0px 10px 30px 0px rgba(255, 0, 0, 0.2),0px 1px 1px 0px rgba(255, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  },
  item: {
    // boxShadow: '0px 10px 30px 0px rgba(255, 0, 0, 0.2),0px 1px 1px 0px rgba(255, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
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