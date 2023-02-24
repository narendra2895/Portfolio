import React from 'react'
import { useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar () {
    const navRef=useRef();

    const showNavbar =()=>{
      navRef.current.classList.toggle('responsive_nav')
    }
    

  
  return (
    <header className="container nav-container" id='Home'>
      <div className='logo-div'><a href='#Home' className='logo-anchor'><img src={logo} width="60px" alt="" /></a></div>
      
      <nav className='nav__container' ref={navRef} >
        <li><a href="#Home " onClick={showNavbar} className='active'>Home</a></li>
        <li><a href="#About" onClick={showNavbar}>About</a></li>      
        <li><a href="#Skills" onClick={showNavbar}>Skills</a></li>      
        <li><a href="#Projects" onClick={showNavbar}>Projects</a></li>
        <li><a href="#Contact" onClick={showNavbar}>Contact</a></li>
        <button onClick={showNavbar} className='nav-btn nav-close-btn'> <FaTimes size={'2rem'} /></button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}><FaBars size={'32px'}/></button>
    </header>
    
  )
}

export default Navbar