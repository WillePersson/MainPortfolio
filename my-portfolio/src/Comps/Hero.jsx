import React from 'react';
import heroImage from '../Assets/Programming-amico.png'; 
import linkedinIcon from '../Assets/linkedin.png';
import githubIcon from '../Assets/github-mark-white.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="section_pic-container">
        <img src={heroImage} alt="Wille Persson" />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Wille Persson</h1>
        <p className="section_text_p2">System Developer Student</p>   
    <a className="button_color_2" href="#resume">My Resume</a>
    <a className="button_color_1" href="#contact">Contact Me</a>
    <div id="socials-container">
          <a href="https://www.linkedin.com/in/wille-persson-9700822a2/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn link" className="icon" />
          </a>
          <a href="https://github.com/WillePersson" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github link" className="icon" />
          </a>
        </div>
     </div>
    </section>
  );
};

export default Hero;