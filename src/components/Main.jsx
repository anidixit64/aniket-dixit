import React from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import HeroSection from './HeroSection.jsx';
import Skills from './Skills.jsx';
import Works from './Works.jsx';
import Writings from './Writings.jsx';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
        <Works />
        <Writings />
        <Contact />
    </div>
  )
};

export default Main;
