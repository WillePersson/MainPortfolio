import React, { useEffect, useState } from 'react';

const Resume = () => {
    const [resumeData, setResumeData] = useState({ education: [], workExperience: [] });

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/resume.json')
            .then(response => response.json())
            .then(data => {
                setResumeData(data);
            })
            .catch(error => console.error('Error loading resume data:', error));
        }, []);
    return (
        <section id="resume">
            <h1 className="section-heading">Resume</h1>
            <h3>Education</h3>
            <ul>
                {resumeData.education.map((item, index) => (
                    <li key={`education-${index}`}>
                        <strong>{item.degree}</strong> - {item.school}, {item.year}
                    </li>
                ))}
            </ul>
            <h3>Work Experience</h3>
            <ul>
                {resumeData.workExperience.map((item, index) => (
                    <li key={`work-${index}`}>
                        <strong>{item.title}</strong> - {item.company}, {item.dates}
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resume;