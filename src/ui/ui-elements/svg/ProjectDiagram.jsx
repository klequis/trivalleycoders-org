import React from 'react'

const data = 'M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z'

const id='b8a74f6c'

const Code = ({
  startColor='#f7953f',
  endColor='#fff',
  width,
  opacity=1,
}) => {
  const sizeStyle = {
    width: width,
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      externalResourcesRequired="http://purl.org/dc/dcmitype/StillImage"
      style={sizeStyle}
    >
    <linearGradient
      id={id}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
      >
        <stop
          offset='0%'
          style={{
            stopColor: startColor,
            stopOpacity: 1 * opacity
          }}
        />
        <stop
          offset='100%'
          style={{
            stopColor: endColor,
            stopOpacity: 1 * opacity
          }}
        />
    />

    </linearGradient>
    <path
      style={{ fill: `url(#${id})`, fillOpacity: 1 }}
      d={data}

    />
  </svg>
  )
}

export default Code