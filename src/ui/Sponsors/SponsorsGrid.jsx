import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Sponsor from './Sponsor'

const data = [
  {
    title: 'Zelda Kohn',
    subTitle: 'For all your real estate needs in the Tri-Valley',
    imageUrl: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/zelda.png',
    href: 'https://www.remax.com/realestateagentoffice/pleasanton-ca-94588-2723-zeldakohn-id31079164.html',
    height: 181,
    width: 340.298,
  },
  {
    title: 'BRIIA',
    subTitle: 'Bishop Ranch Intelligence Innovation Accelerator',
    imageUrl: 'https://s3-us-west-2.amazonaws.com/trivalleycoders-images/briia-logo.png',
    href: 'https://briia.io/',
    height: 180,
  }
]

const SponsorsGrid = ({ classes }) => {
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
            {data.map(l => (
              <Grid key={l.title} item className={classes.item}>
                <Sponsor
                  height={l.height}
                  href={l.href}
                  src={l.imageUrl}
                  title={l.title}
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
  root: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: 'transparant',
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  gridBottom: {
    marginTop: 40,
  },
})

export default withStyles(styles)(SponsorsGrid)