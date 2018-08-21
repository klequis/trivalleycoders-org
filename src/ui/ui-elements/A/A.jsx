import React from 'react'
import Body1 from 'ui/ui-elements/Body1'

const A = (props) => {
  return (
    <a href={props.href}>
      <Body1
        variant='body1'
        color='green'
      >
        {props.children}
      </Body1>
    </a>
  )
}

export default A
