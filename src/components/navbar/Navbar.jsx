import React ,{useState} from 'react'
import './navbar.css'
const Navbar = () => {
  const [isActive,setIsActive] = useState({about: true, skills: false, projects: false, contact: false})
  const makeActive=(num)=>{
     if(num === '1'){
       setIsActive({about: true, skills: false, projects: false, contact: false})
      }else if(num === '2'){
       setIsActive({about: false, skills: true, projects: false, contact: false})
     }
      else if(num === '3'){
       setIsActive({about: false, skills: false, projects: true, contact: false})
     }
     else if(num === '4'){
       setIsActive({about: false, skills: false, projects: false, contact: true})
     }
  }
  return (
    <nav>
     <span onClick={()=>makeActive('1')}><a href="#about">About</a>  <div className={`line ${isActive.about ? 'active':''} ` }> </div></span>
     <span onClick={()=>makeActive('2')}><a href="#skills">Skills</a> <div className={`line ${isActive.skills ? 'active':''} ` }></div></span>
     <span onClick={()=>makeActive('3')}><a href="#projects">Projects</a> <div className={`line ${isActive.projects ? 'active':''} ` }></div></span>
     <span onClick={()=>makeActive('4')}><a href="#contact">Contact</a> <div className={`line ${isActive.contact ? 'active':''} ` }></div></span>
    </nav>
  ) 
}

export default Navbar