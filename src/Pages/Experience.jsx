import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Frontend Developer',
            company: 'Vectory Consultancy',
            date: '2025-07-15 to Present',
            duration: '10+ months',
            location: 'Mumbai, India',
            responsibilities: [
                'Developing scalable and responsive web applications using React.js, TypeScript, Tailwind CSS, and Redux Toolkit',
                'Building dynamic CMS and SaaS-based platforms with modern frontend architecture',
                'Integrating REST APIs and managing application state for smooth user experiences',
                'Working on WordPress and WooCommerce projects, including hybrid React integrations',
                'Collaborating with designers and backend developers to implement responsive UI components',
                'Improving application performance, debugging issues, and optimizing frontend workflows',
                'Contributing to reusable component development and clean code practices'
            ],
        }
    ];

    return (
        <div>
            <h2 className='text-3xl font-bold mb-4 text-white uppercase'>
                Professional Experience
            </h2>

            <div className='space-y-4'>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className='border-t border-t-green-500 hover:border-t-yellow-500 flex flex-col'
                    >
                        <div className='grid grid-cols-1 md:grid-cols-4 mt-4 text-white gap-4'>
                            
                            <div>
                                <p className='text-yellow-500 font-semibold'>
                                    {exp.date}
                                </p>

                                <p className='text-[#999999] text-sm'>
                                    {exp.duration}
                                </p>

                                <p className='text-[#999999] text-sm'>
                                    {exp.location}
                                </p>
                            </div>

                            <div className='md:col-span-3 space-y-3'>
                                <div>
                                    <h3 className='text-xl font-bold text-white'>
                                        {exp.role}
                                    </h3>

                                    <p className='text-green-500 font-semibold'>
                                        {exp.company}
                                    </p>
                                </div>

                                <ul className='space-y-2 ml-4'>
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li
                                            key={respIndex}
                                            className='text-[#999999] flex items-start'
                                        >
                                            <span className='text-green-500 mr-3 mt-1'>
                                                •
                                            </span>

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
