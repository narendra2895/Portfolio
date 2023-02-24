import React from 'react'
import './projects.css'
import { BsCode } from 'react-icons/bs'
import PJ1 from '../../assets/project1.png'
import PJ2 from '../../assets/project2.png'
import PJ3 from '../../assets/js-logo.png'
import PJ4 from '../../assets/design-project.jpg'


const Projects = () => {
  return (
    <div className='container projects__container' id='Projects'>
      <h1>My Projects</h1>
      <div className="card__container">
        <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ1} className="PJ1" alt="" />
          <p>My Portfolio website using<br />
            HTML, CSS, JS and react.</p>
            <a href='https://github.com/narendra2895/Portfolio' target={'_blank'}>See Project</a>
        </div>
        <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ2} className="PJ2" alt="" />
          <p>SocietyPro website using<br />
            HTML, CSS, JS,Python and Django.</p>
            <a>See Project</a>
        </div>
        <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ3} className="PJ3" alt="" />
          <p>Javascript Projects</p>
            <a href='https://github.com/narendra2895/Javascript-Projects' target={'_blank'}>See Project</a>
        </div>
        <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ4} className="PJ4" alt="" />
          <p>Tempelates and mockups using<br/>
          Photoshop, Illustrator, XD </p>
          <a href="https://github.com/narendra2895/designer" target={'_blank'}>See Project</a>
        </div>
        
        {/* <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ1} className="PJ1" alt="" />
          <p>My Portfolio website using<br />
            HTML, CSS, JS and react.</p>
        </div>
        <div className="card">
          <h3 className="side-carets"> <BsCode className='side-carets-icon' size={32} /></h3>
          <img src={PJ1} className="PJ1" alt="" />
          <p>My Portfolio website using<br />
            HTML, CSS, JS and react.</p>
        </div> */}
 
      </div>
    </div>
      
  
  )
}

export default Projects