import React from 'react'

const data = 'M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z'

const id='bd964a66'

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
      viewBox="0 0 576 512"
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