import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { slice } from 'ramda'
/* User */

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hourAmPm = (date) => {
  const h = date.getHours()
  const m = date.getMinutes()
  return (h > 12)
    ? `${h-12}:${m} PM`
    : `${h}:${m} AM`
}

const formattedDate = (isoDateString) => {
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const d = new Date(isoDateString)
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd} ${hour}`
}

const hasProp = (prop, obj) => {
  const ret = obj.hasOwnProperty(prop)
  return ret
}

const EventGrid = (props) => {
  const { classes, events } = props
  return (
    <Grid
      container
      spacing={Number(8)}
      className={classes.container}
      justify='center'
    >

      {slice(1, 7, events).map(c => {
        const imageUrl = hasProp('featured_photo', c)
          ? c.featured_photo.highres_link
          : 'https://s3-us-west-2.amazonaws.com/tvc-events/media-for-test/tvc.jpg'
        const location = `${c.venue.city}, ${c.venue.state} ${c.venue.zip}`
        return (
          <Grid
            item
            key={c.id}
            xs={12} sm={6} md={4} lg={3} xl={2}
            className={classes.item}
          >
            <Card className={classes.card}>
              <a href={c.event_url} className={classes.link}>
                <CardMedia
                  className={classes.media}
                  image={imageUrl}
                  >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant='caption' component='p' noWrap className={classes.time}>
                    {formattedDate(c.time)}
                  </Typography>
                  <Typography variant='subheading' component='p' className={classes.title}>
                    {c.name}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venue}>
                    {c.venue.name}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venue}>
                    {location}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

const styles = {
  card: {
    minHeight: 0,
    minWidth: 0,
    padding: '15px 5px 0 5px',
  },
  cardContent: {
    padding: '5px 15px 5px 15px',
  },
  item: {
    margin: '30px',
    padding: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  media: {
    height: 0,
    paddingTop: '55.170%',
  },
  title: {
    height: '40px',
    letterSpacing: '0px',
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    paddingTop: '5px',
  },
  venue: {
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}

export default withStyles(styles)(EventGrid)
