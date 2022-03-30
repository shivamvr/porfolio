import React from 'react'
import './navbar.css'
const Navbar = () => {
  
  return (
    <nav>
     <span>About <div className='line active'> </div></span>
     <span>Skills <div className='line'></div></span>
     <span>Projects <div className='line'></div></span>
     <span>Contact <div className='line'></div></span>
    </nav>
  ) 
}

export default Navbar