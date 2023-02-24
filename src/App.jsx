import React from 'react'
import Nav from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App
