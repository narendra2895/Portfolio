import React from 'react'
import './about.css'
import AH from '../../assets/about-hero.png'

const About = () => {
    return (
        <div className='container about__container' id='About'>
            <div className="data">
                <h2>About me</h2>
                <h3>I am a UI UX Designer and 
                    a front end Web developer</h3>
                <p>After working in steel production
                    for over 5 years, I decided it was time
                    to follow my hearts desire- become
                    an artist. Being an engineer and having
                    a keen interest in technology,
                    web development came as a natural
                    choice.</p>
                    <p>
                    This website is my online presence and
                    resonates with what I feel, I like and how
                    I perceive this world.</p>
                <p>I am skilled in programming languages like
                    Python, Javascript, HTML, CSS and their frameworks like
                    Django, Flask, React, SCSS, as well as DBMS like MYSQL and Mongodb
                </p>
                <p>I aspire to work with industries to gain real-world knowledge
                    of the industry and contribuite to the ever-updating field of
                    Web-development.                    
                </p>


               
            </div>
            <div className="about-img">
                <img className='AH' src={AH} alt="" />
            </div>
        </div>
    )
}

export default About 