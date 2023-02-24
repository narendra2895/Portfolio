import React from "react";
import "./hero.css";
import CTA from "../CTA/CTA";
import DE from "../../assets/designer.png";
import ME from "../../assets/hero.png";
import CO from "../../assets/coder.png";
import IN1 from "../../assets/info1.png";
import IN2 from "../../assets/info2.png";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container hero-container">
      <h3>HI, I am</h3>
      <h1>Narendra Kulkarni</h1>
      <CTA />
      <div className="hero-images">
        <div className="hover-container1">
          <div className="front"></div>
          <div className="back1"></div>
        </div>
        <div className="ME-image">
          <img className="ME" src={ME} alt="" />
        </div>
        <div className="hover-container1">
          <div className="front2"></div>
          <div className="back2"></div>
        </div>
        {/* <div className='DE-div'><img className='DE' src={DE} alt=""  /></div>                
                <div className='ME-div'><img className='ME' src={ME} alt=""  /></div>
                <div className='CO-div'><img className='CO' src={CO} alt=""  /></div> */}
        {/* <img className='IN1' src={IN1} alt="" />
                <img className='IN2' src={IN2} alt="" /> */}
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BdRazkpV0TvioHaOTRbiBGw%3D%3D" target={"_blank"}>
          <BsLinkedin className="socials-icon" size={50} />
        </a>
        <a href="https://wa.me/917039226256" target={"_blank"}>
          <BsWhatsapp className="socials-icon" size={50} />
        </a>
        <a href="https://www.instagram.com/narendra_kulkarni28/" target={"_blank"}>
          <BsInstagram className="socials-icon" size={50} />
        </a>
        <a href="https://github.com/narendra2895" target={"_blank"}>
          <BsGithub className="socials-icon" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
