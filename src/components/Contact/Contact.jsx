import React from 'react'
import './contact.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import CI from '../../assets/contact-icon.png'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xvgktge', 'template_tjiwauq', form.current, 'BV-7QcPe5yG3wbFeT')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
    }
  return (
    <div className='container contact__container' >
      <div className="contactcard-container">
        <div className="contact-card">
          <BsWhatsapp size={32} className='contactcard-icon' id='Contact' />
          <h3>Whatsapp</h3>
          <p>+91 70392 26256</p>
          <a href="https://wa.me/917039226256">Send Message</a>
        </div>
        <div className="contact-card">
          <BsInstagram size={32}  className='contactcard-icon' />
          <h3>Instagram</h3>
          <p>@narendra_kulkarni28</p>
          <a href="https://www.instagram.com/narendra_kulkarni28/" target={'_blank'}>Send Message</a>
        </div>
        <div className="contact-card">
        <SiGmail size={32} className='contactcard-icon' />
          <h3>Gmail</h3>
          <p>nar3ndrakulkarni28@gmail.com</p>
          <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=nar3ndrakulkarni28@gmail.com&tf=1" target={'_blank'}>Send Message</a>
        </div>
      </div>
      <div className="contactcard-container2">
        <img src={CI} alt="" />
        <h2>Get in touch</h2>
        <h5>For any queries feel free to get in touch with me:</h5>
        <form className='form-container' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="text" name='phone' placeholder='Phone number' required />      
          <input type="email" name='Email' placeholder='Your Email' required />      
          <textarea name='message' placeholder='Your Message' id="" cols="35" rows="7" required></textarea>
          <button type='submit' className='btn-primary form-button'>SEND</button>
        </form>
        
      </div>
    </div>
  )
}

export default Contact