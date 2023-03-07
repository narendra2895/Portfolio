import React from 'react'
import './parallax.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import thr from '../../assets/3.png'
import fou from '../../assets/4.png'
import fiv from '../../assets/5.png'
import six from '../../assets/6.png'
import sev from '../../assets/7.png'
import eig from '../../assets/8.png'
import nin from '../../assets/9.png'
import ten from '../../assets/10.png'
import ele from '../../assets/11.png'
import twe from '../../assets/12.png'
import thi from '../../assets/13.png'
import fot from '../../assets/14.png'
import fif from '../../assets/15.png'
import sit from '../../assets/16.png'
import set from '../../assets/17.png'
import eit from '../../assets/18.png'

const parallax = () => {
  document.addEventListener("mousemove",parallax1);
  function parallax1(e){
    this.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth -e.pageX*speed)/100
        const y = (window.innerHeight -e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px) `
    })
  }



  return (
    <div className="container parallax-container">
    <section>
        <img src={one} className="layer" data-speed="3"  alt="" />
        <img src={two} className="layer" data-speed="3"  alt="" />
        <img src={thr} className="layer" data-speed="2"  alt="" />
        <img src={fou} className="layer"  data-speed="-8"  alt="" />
        <img src={fiv} className="layer" data-speed="1"   alt="" />
        <img src={six} className="layer" data-speed="-1"   alt="" />
        <img src={sev} className="layer" data-speed="2"   alt="" />
        <img src={eig} className="layer" data-speed="-2"  alt="" />
        <img src={nin} className="layer" data-speed="4"   alt="" />
        <img src={ten} className="layer" data-speed="3"   alt="" />
        <img src={ele} className="layer" data-speed="2"   alt="" />
        <img src={twe} className="layer" data-speed="2"   alt="" />
        <img src={thi} className="layer"  data-speed="3" alt="" />
        <img src={fot} className="layer" data-speed="2"  alt="" />
        <img src={fif} className="layer" data-speed="2"  alt="" />
        <img src={sit} className="layer" data-speed="5"  alt="" />
        <img src={set} className="layer" data-speed="2"  alt="" />
        <img src={eit} className="layer" data-speed="-1"  alt="" />
        <h2 className="layer">MY SKILLS</h2>
    </section>
    </div>
  )
}

export default parallax