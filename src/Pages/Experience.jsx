import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Senior Frontend Developer',
            company: 'Tech Innovations Pvt Ltd',
            date: '2024-06-01 to Present',
            duration: '1 year',
            location: 'Mumbai, India',
            responsibilities: [
                'Developed and maintained responsive web applications using React, Redux, and Tailwind CSS',
                'Collaborated with UI/UX designers to implement pixel-perfect designs and improve user experience',
                'Optimized application performance, reducing load time by 40%',
                'Mentored junior developers and conducted code reviews for best practices'
            ],
        },
        {
            role: 'Full Stack Developer',
            company: 'Digital Solutions LLC',
            date: '2023-08-01 to 2024-05-31',
            duration: '10 months',
            location: 'Bangalore, India',
            responsibilities: [
                'Built full-stack MERN applications from scratch to production',
                'Designed and implemented RESTful APIs using Node.js and Express',
                'Managed MongoDB databases and optimized database queries',
                'Integrated third-party APIs and payment gateways'
            ],
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Web Innovations LLC',
            date: '2023-03-01 to 2023-07-31',
            duration: '5 months',
            location: 'Remote',
            responsibilities: [
                'Assisted in the development of user-friendly web portals and dashboards',
                'Conducted user research and usability testing to improve UI/UX design',
                'Participated in daily stand-ups, sprint planning, and team meetings',
                'Fixed bugs and implemented feature requests from product managers'
            ],
        }
    ];

    return (
        <div>
            <h2 className='text-3xl font-bold mb-4 text-white uppercase'>Professional Experience</h2>
            <div className='space-y-4'>
                {experiences.map((exp, index) => (
                    <div key={index} className='border-t border-t-green-500 hover:border-t-yellow-500 flex flex-col'>
                        <div className='grid grid-cols-1 md:grid-cols-4 mt-4 text-white gap-4'>
                            <div>
                                <p className='text-yellow-500 font-semibold'>{exp.date}</p>
                                <p className='text-[#999999] text-sm'>{exp.duration}</p>
                                <p className='text-[#999999] text-sm'>{exp.location}</p>
                            </div>
                            <div className='md:col-span-3 space-y-3'>
                                <div>
                                    <h3 className='text-xl font-bold text-white'>{exp.role}</h3>
                                    <p className='text-green-500 font-semibold'>{exp.company}</p>
                                </div>
                                <ul className='space-y-2 ml-4'>
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex} className='text-[#999999] flex items-start'>
                                            <span className='text-green-500 mr-3 mt-1'>•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
