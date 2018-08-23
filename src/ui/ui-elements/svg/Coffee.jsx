import React from 'react'

const data = 'M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z'

const id='92e740c5'

const Code = ({
  startColor='#f7953f',
  endColor='#fff',
  width,
  opacity=1,
}) => {
  console.log('start', startColor)
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