import React from 'react'
import Text from 'ui/ui-elements/Text'

const A = (props) => {
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
