import React from 'react'

const data =

const id='sitemapfedc3cf8'

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