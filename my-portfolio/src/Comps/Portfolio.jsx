import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        fetch('https://api.github.com/users/WillePersson/repos')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false); 
            })
            .catch(error => {
                console.error('Error loading GitHub repositories:', error);
                setIsLoading(false);  
            });
    }, []);

    if (isLoading) {
        return (
            <section id="portfolio">
                <h1 className="section-heading">Portfolio</h1>
                <p>Loading items...</p> {}
            </section>
        );
    }

    return (
        <section id="portfolio">
            <h1 className="section-heading">Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map(project => (
                    <div key={project.id} className="portfolio-item">
                        <img src={project.owner.avatar_url} alt="avatar" />
                        <div className="portfolio-item-info">
                            <h3>{project.name}</h3>
                            <p>{project.description || "No description provided."}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;