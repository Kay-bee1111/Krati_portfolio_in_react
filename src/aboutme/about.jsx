import React from 'react'
import './about.css'
import me from './krati1.png'
import BubbleAnimation from './bubble'

const About = () => {
  return (
    <div className='about'>
     
     <header> <h1 className='heading'>About Me</h1></header>
     <div className="bubble-container">
     <div className="aboutcontent">
      <div className="text">
      <p>Hello! I'm Krati Bhardwaj, a B.Tech student in Computer Science at IIIT Bhagalpur.</p> <p>An alumna of DPS Bulandshahr, I'm passionate about web development and AI. I blend technical skills with a love for poetry and storytelling. As a leader and effective communicator, I thrive on collaboration and continuous learning. </p><p>Let's connect and explore the intersection of technology and creativity!</p>
      
</div>
<img src={me} alt="Profile" className="photo"/></div>

      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
    </div>

    </div>
  )
}

export default About
