import React from 'react'

function Placeitem({image, name}) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  )
}

export default Placeitem
