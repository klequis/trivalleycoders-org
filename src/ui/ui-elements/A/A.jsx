import React from 'react'
import styles from './style.css'
// import { greenText } from '../../../lib/colors'
// import classNames from 'classnames'
import Text from 'ui/ui-elements/Text'

const A = (props) => {
  // const aStyles = {
  //   color: props.fontColor === 'green' ? greenText : ''
  // }
  return (
    <a href={props.href}>
      <Text
        variant='body1'
        color='green'
      >
        {props.children}
      </Text>

    </a>
  )
}

export default A
