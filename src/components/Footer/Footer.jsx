import React from 'react'
import './footer.css'
import CR from '../../assets/copyright.png'

const Footer = () => {
  return (
    <div className='container footer__container' >
       <div className='left-footer'><img src={CR} alt="" className='footer-img' />
        <h3>copyright Narendra Kulkarni 2022</h3>
        </div>        
        <div className='right-footer'><h3 className='footer-right' >Developed and designed by Narendra Kulkarni.</h3>  </div>      


    </div>
  )
}

export default Footer