import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Software Engineer',
            company: 'Tech Solutions Inc.',
            date: '2024-05-01 to 2025-08-01',
            responsibilities: [
                'Developed full-stack applications using React and Node.js.',
                'Collaborated with cross-functional teams to define and refine new features.',
                'Implemented best practices for code quality and maintainability'
            ],
        },
        {
            role: 'Intern',
            company: 'Web Innovations LLC',
            date: '2023-06-01 to 2024-04-30',
            responsibilities: [
                'Assisted in the development of user-friendly web portals.',
                'Conducted user research to improve UI/UX design.',
                'Participated in daily stand-ups and team meetings.'
            ],
        }
    ];

    return (
        <div>
            <h2>Professional Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.date}</p>
                    <ul>
                        {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;