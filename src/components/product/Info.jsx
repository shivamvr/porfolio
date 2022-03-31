import React from 'react'
import './info.css'

const Info = ({text}) => {
  return (
    <div className='info'>
        <h3>{text.title}</h3>
        <p>{text.desc}</p>
    </div>
  )
}

export default Info