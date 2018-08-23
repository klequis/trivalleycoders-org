import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import A from 'ui/ui-elements/A'

/* Dev */
import { green } from 'logger'

const Sponsor = ({ classes, height, href, width, src, title, subTitle }) => {
  green('sponsor: href', href)
  return (
    <A href={href}>
      <Card className={classes.card}>
        <ResponsiveImage src={src} alt={title} />
      </Card>
    </A>
  );
}

Sponsor.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = {
  card: {
    maxWidth: 300,
  },
  root: {
    backgroundColor: 'transparent',
  }
}

export default withStyles(styles)(Sponsor)