import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import fontSizeFromString from 'lib/fontSizeFromString'
import classNames from 'lib/classNames'
/* Dev */
import { green as greenl } from 'logger'

/*
    Params match their material-ui equilivant
    See: https://material-ui.com/api/typography/#typography
*/

const variant='body2'

const Body2 = ({
  align,
  children,
  classes,
  className,
  color,
  noWrap,
}) => {
  greenl('classNames',classNames([classes[variant], className ]))
  greenl('className', className)

  return (
    <Typography
      align={align}
      className={classNames([classes[variant], className ])}
      color={color}
      noWrap={noWrap}
      variant={variant}
    >
      {children}
    </Typography>
  )
}
const styles = theme => {
  const originalSize = theme.typography[variant].fontSize
  greenl('originalSize', originalSize)

  return ({
    [variant]: {
      [theme.breakpoints.down('xs')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: originalSize,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: originalSize,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: originalSize,
      },
    }
  })
}
export default withStyles(styles, { withTheme: true })(Body2)