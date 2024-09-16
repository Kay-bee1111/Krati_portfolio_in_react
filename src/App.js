import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import About from './aboutme/about';
import Intro from './intro/intro';
import Nav from './navbar/navbar';
import Skills from './skills/skills';
import Edu from './education/Edu';
import Por from './por/por';
import ContactMe from './contact me/contact';
import CouponComponent from './to be deleted/coupon';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
    <Intro/>
    <div className='nav'>

      
      
      <button className='sec' onClick={() => setActiveSection('about')}>About me</button>
      <button className='sec' onClick={() => setActiveSection('skills')}>My Skills</button>
      <button className='sec' onClick={() => setActiveSection('edu')}>Education</button>
      <button className='sec' onClick={() => setActiveSection('por')}>Positions</button>
      </div>
      <TransitionGroup>
        {activeSection === 'por' && (
          <CSSTransition key="por" timeout={500} classNames="fade">
            <Por />
          </CSSTransition>
        )}
        {activeSection === 'about' && (
          <CSSTransition key="about" timeout={500} classNames="fade">
            <About />
          </CSSTransition>
        )}
        {activeSection === 'skills' && (
          <CSSTransition key="skills" timeout={500} classNames="fade">
            <Skills />
          </CSSTransition>
        )}
        {activeSection === 'edu' && (
          <CSSTransition key="edu" timeout={500} classNames="fade">
            <Edu />
          </CSSTransition>
        )}
      </TransitionGroup>
      
      <ContactMe/>
      
    </>
  );
}

export default App;
