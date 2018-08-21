import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

/* Dev */
import { green } from 'logger'

const Sponsor = ({ classes, height, width, src, title, subTitle }) => {
  return (
    <Card className={classes.card}>

      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Sponsor.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    // objectFit: 'cover',
  },
  root: {
    backgroundColor: 'transparent',
  }
}

// const styles = {
//   card: {
//     maxWidth: 345,
//   },

// }

export default withStyles(styles)(Sponsor)





/////////////////////////////////////////////
// import React from 'react'
// import { withStyles } from '@material-ui/core'
// import Paper from '@material-ui/core/Paper'
// import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
// import Body1 from 'ui/ui-elements/Body1'


const xxSponsor = ({ classes, height, width, src, title, subTitle }) => {
  // green('height', height)
  // green('width', width)
  // green('src', src)
  // green('title', title)
  // green('subTitle', subTitle)
  const paperStyle = {
    height: height,
    width: width,
  }
  return (
    {/* <Paper elevation={0} className={classes.root} style={paperStyle}>
      <ResponsiveImage src={src} alt={title}/>
      <Body1>
        Bishop Ranch Innovation Intelligence Innovator
      </Body1>
    </Paper> */}
  )
}


