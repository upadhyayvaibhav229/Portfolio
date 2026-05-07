import React, { useState } from 'react';
import { img } from '../assets/img'; // Adjust the import path as necessary
import SkillProgressCircle from './SkillProgressCircle';
import { sub } from 'framer-motion/client';
import Experience from '../Pages/Experience';

const SingleTabs = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [activeSkillTab, setActiveSkillTab] = useState('Frontend Skills');


    const Info = {
        about: {
            title: 'Personal Info',
            img: img.personal_info,
            desc: 'Get to know more about me — my background, interests, and passion for technology.\nI\'m a curious learner and a dedicated individual who enjoys solving real-world problems.\nFeel free to reach out through the contact details provided here.',
            email: 'upadhyayvaibhav229@gmail.com',
            phone: '+91 9004523446',
            address: 'Kandivali West, Mumbai - 400067',
            follow: 'icons',
        },
        experience: {
            title: 'My Experience',
            img: img.personal_info,
            desc: 'I\'ve worked with diverse teams and technologies, building scalable web applications.\nFrom internships to full-time roles, each experience has shaped my expertise.',
        },
        education: {
            title: 'My Education',
            img: img.personal_info,
            desc: 'Explore my academic background, which laid the foundation for my technical journey.\nFrom school to graduation, every step contributed to my growth and skills.\nI believe learning never stops, and I continue to build on this base every day.',
            academicHistory: [
                {

                    level: 'Graduation - B.Sc IT',
                    institute: 'Smt. K. G Mittal College, Mumbai',
                    year: '2024'
                },
                {
                    level: 'MERN stack development Certification',
                    institute: 'Nettech India',
                    year: '2024 - 2025'
                },
                {
                    level: 'HSC',
                    institute: 'T. P Bhatia College of Science, Mumbai',
                    year: '2021 - 2023'
                },
                {
                    level: 'SSC',
                    institute: 'Sardar Vallabbhia Patel, Mumbai',
                    year: '2020'
                },
            ]
        }
        ,
        skills: {
            title: 'My Skills',
            img: img.programmer_gif,
            desc: 'Here you\'ll find the tools and technologies I work with confidently.\n From frontend frameworks to backend development...',
            frontend: [
                { name: 'HTML', percent: 90 },
                { name: 'CSS', percent: 85 },
                { name: 'JavaScript', percent: 80 },
                { name: 'React', percent: 75 },
                { name: 'Tailwind CSS', percent: 70 },
            ],
            backend: [
                { name: 'Node.js', percent: 80 },
                { name: 'Express.js', percent: 75 },
                { name: 'MongoDB', percent: 70 },
            ]
        }

    };

    const tabs = [
        { key: 'about', label: 'About' },
        { key: 'experience', label: 'Experience' },
        { key: 'education', label: 'Education' },
        { key: 'skills', label: 'Skills' },
    ];

    const subtabs = [
        {
            key: 'Frontend Skills',
            'label': 'Frontend Skills'
        },
        {
            key: 'Backend Skills',
            'label': 'Backend Skills'

        }
    ]

    return (
        <div className='container mt-10 flex flex-col md:justify-center md:items-center overflow-hidden mx-auto'>
            <ul className='flex gap-4 list-none mb-8 flex-wrap justify-center'>
                {tabs.map((tab) => (
                    <li key={tab.key} className=''>
                        <button
                            className={`text-white rounded-2xl text-lg md:px-4 md:py-2 px-3 py-1 uppercase transition-all duration-300 ${activeTab === tab.key ? 'bg-green-500' : 'bg-slate-500 hover:bg-slate-600'
                                }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className='tab-content p-5 border rounded-xl w-full md:max-w-7xl  max-w-full shadow-md bg-[#141410] grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
                <div>

                    <img src={Info[activeTab].img} alt="Personal Info" className='md:w-auto md:h-auto w-[350px] rounded-full mb-4' />
                </div>
                <div>

                    <h2 className='text-3xl font-bold mb-4 text-white uppercase'>{Info[activeTab].title}</h2>
                    <p className='text-[#999999] mb-4'>{Info[activeTab].desc}</p>
                    {activeTab === 'about' && (
                        <div className='text-left space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className="bg-[#1D1D1D]  flex flex-col flex-wrap md:flex-nowrap justify-center gap-5 py-5 px-5 rounded-lg shadow-md border hover:border-green-500">

                                <strong className='text-xl text-[#999999]'>Email</strong>
                                <p className='text-white text-lg'>
                                    {Info.about.email}
                                </p>
                            </div>
                            <div className="bg-[#1D1D1D]  flex flex-col justify-center gap-5 py-5 px-5 rounded-lg shadow-md border hover:border-green-500">

                                <strong className='text-[#999999] text-xl'>Phone</strong>
                                <p className='text-white text-xl'>{Info.about.phone}</p>
                            </div>

                            <div className="bg-[#1D1D1D]  flex flex-col justify-center gap-5 py-5 px-5 rounded-lg shadow-md border hover:border-green-500">

                                <strong className='text-[#999999] text-xl'>Address:</strong>
                                <p className='text-md text-white'> {Info.about.address}</p>
                            </div>
                            <div className="bg-[#1D1D1D]  flex flex-col justify-center gap-5 py-5 px-5 rounded-lg shadow-md border hover:border-green-500">

                                <strong className='text-[#999999] text-xl'>Follow</strong>
                                <ul className='flex text-white gap-5 text-xl'>
                                    <li>
                                        <a href="/" aria-label="Facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="white">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.126 3.022-3.126.876 0 1.628.066 1.85.095v2.145h-1.268c-.998 0-1.191.476-1.191 1.175v1.54h2.381l-.31 2.405h-2.07v5.625c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Twitter">
                                            {/* <!-- Twitter Icon --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.491-.05 3.293 3.293 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="LinkedIn">
                                            {/* <!-- LinkedIn Icon --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm11.55 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.623 0 7.225 0 7.225h2.4z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Instagram">
                                            {/* <!-- Instagram Icon --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.509-.198-1.09-.333-1.942-.372C10.443.01 10.172 0 7.998 0h.003zm5.591 1.589a.961.961 0 1 1-1.923 0 .961.961 0 0 1 1.923 0zm-1.97 2.489a2.969 2.969 0 1 1-5.938 0 2.969 2.969 0 0 1 5.938 0zm2.458 2.922a.472.472 0 1 0-.945 0 .472.472 0 0 0 .945 0zM8 4.759a3.241 3.241 0 1 0 0 6.482 3.241 3.241 0 0 0 0-6.482z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div>

                                {/* Add icons for social media if needed */}
                            </div>
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <Experience />
                    )}

                    {activeTab === 'education' && (
                        <div className='space-y-4'>
                            {
                                Info.education.academicHistory.map((item, index) => (
                                    <div key={index} className='border-t border-t-green-500 hover:border-t-yellow-500 flex flex-col'>
                                        <div className='grid grid-cols-2 mt-4 text-white'>

                                            <div>

                                                <p className='text-yellow-500'>{item.year}</p>
                                            </div>
                                            <div className='space-y-3'>

                                                <p className='text-xl'>{item.institute}</p>
                                                <h1 className='text-[#999999]'>{item.level}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                    {activeTab === 'skills' && (
                        <>
                            <ul className='flex  gap-4 list-none mb-8 flex-wrap md:justify-center'>
                                {subtabs.map((tab) => (
                                    <li key={tab.key}>
                                        <button
                                            className={`text-white rounded-2xl text-sm md:text-base md:px-5 md:py-2 px-3 py-2 uppercase transition-all duration-300 ${activeSkillTab === tab.key ? 'bg-green-500' : 'bg-slate-500 hover:bg-slate-600'
                                                }`}
                                            onClick={() => setActiveSkillTab(tab.key)}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {(activeSkillTab === 'Frontend Skills'
                                    ? Info.skills.frontend
                                    : Info.skills.backend
                                ).map((skill, index) => (
                                    <SkillProgressCircle
                                        key={index}
                                        name={skill.name}
                                        percent={skill.percent}
                                    />
                                ))}
                            </div>
                        </>
                    )}


                </div>

            </div>
        </div>
    );
};

export default SingleTabs;
