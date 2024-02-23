import React from 'react';

const Navigation = ({ toggleBackground }) => {
    return (
        <header>
            <div className="logo-holder">
                <nav>
                    <h2 className="logo"><a href="#hero">Wille<span> Persson</span></a></h2>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button onClick={toggleBackground}>Udda Del</button>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
