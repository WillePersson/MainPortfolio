import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Wille Persson. All rights reserved.</p>
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;