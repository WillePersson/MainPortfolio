import React from 'react';
import mePicture from '../Assets/DSC01729.jpg'; 

const About = () => {
    const handleViewPortfolioClick = () => {
        window.location.href = '#portfolio';
    };

    return (
        <section id="about">
            <img src={mePicture} alt="Me" />
            <div className="about_text">
                <p className="about_text_p1">Get To Know More</p>
                <h1 className="about_title">About Me</h1>
                <p className="about_text_p2">System Developer Student</p>
                <p>As I said, my name is Wille Persson,
                    I'm currently studying to become a
                    system developer and I think it's a
                    lot of fun. I go in Edugrade School the class
                    System Developer .NET With Ai, its really good
                    and its so open for how you want
                    to work because its on distent,
                    and also what i have heard its good because
                    its alot of actual coding and not only
                    theoretical thats why i like it this web site is
                    actually one of the projects you can check out more
                    below. When I'm not studying,
                    I'm usually out in nature, maybe I'm
                    walking the dog or going for a walk
                    in the forest. I also play ice hockey,
                    which takes up part of my free time.
                    it was a short introduction of me.
                </p>
                <button className="view-portfolio-button" onClick={handleViewPortfolioClick}>View Portfolio</button>
            </div>
        </section>
    );
};

export default About;