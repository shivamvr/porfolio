import React from 'react'

function Technology({icons}) {
  return (
    <div className='tstack'>
      {icons.map((icon,index)=> <img key={index} src={`/icons/${icon}.png`} alt={icon} /> )}
    </div>
  ) 
}

export default Technology