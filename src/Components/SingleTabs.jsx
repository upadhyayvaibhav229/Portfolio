import React, { useState } from 'react';
import { img } from '../assets/img'; // Adjust the import path as necessary
const SingleTabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    const Info = {
        about: {
            title: 'Personal Info',
            img: img.personal_info,
            desc: 'Get to know more about me — my background, interests, and passion for technology.\nI’m a curious learner and a dedicated individual who enjoys solving real-world problems.\nFeel free to reach out through the contact details provided here.',
            email: 'upadhyayvaibhav229@gmail.com',
            phone: '+91 9004523446',
            address: 'Kandivali West, Mumbai - 400067',
            follow: 'icons',
        },
        // experience: {
        //     title: 'My Experience',
        //     img: img.personal_info,
        //     desc: 'Add your experience description here...',
        // },
        education: {
            title: 'My Education',
            img: img.personal_info,
            desc: 'Explore my academic background, which laid the foundation for my technical journey.\n From school to graduation, every step contributed to my growth and skills.\n I believe learning never stops, and I continue to build on this base every day.',
            degree: 'B.SC in Information Technologoy and Engineering',
        },
        skills: {
            title: 'My Skills',
            img: img.programmer_gif,
                desc: 'Here you’ll find the tools and technologies I work with confidently.\n From frontend frameworks to backend development, I enjoy crafting complete solutions.\n I’m always open to learning new skills to stay updated in this fast-paced tech world.',
            },
    };

    const tabs = [
        { key: 'about', label: 'About' },
        // { key: 'experience', label: 'Experience' },
        { key: 'education', label: 'Education' },
        { key: 'skills', label: 'Skills' },
    ];

    return (
        <div className='container mt-10 flex flex-col justify-center items-center'>
            <ul className='flex gap-4 list-none mb-8 flex-wrap justify-center'>
                {tabs.map((tab) => (
                    <li key={tab.key}>
                        <button
                            className={`text-white rounded-2xl text-lg px-6 py-3 uppercase transition-all duration-300 ${activeTab === tab.key ? 'bg-green-500' : 'bg-slate-500 hover:bg-slate-600'
                                }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className='tab-content p-6 border rounded-xl w-full max-w-3xl shadow-md bg-[#141410] grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <div>

                    <img src={Info.about.img} alt="Personal Info" className='w-[326px] h-[340px] rounded-full mb-4' />
                </div>
                <div>

                    <h2 className='text-3xl font-bold mb-4 text-white uppercase'>{Info[activeTab].title}</h2>
                    <p className='text-[#999999] mb-4'>{Info[activeTab].desc}</p>
                    {activeTab === 'about' && (
                        <div className='text-left space-y-2'>
                        <div className="bg-[#1D1D1D] p-10 gap-y-5">

                            <strong className='mb-20'>Email:</strong>
                            <p>
                             {Info.about.email}
                             </p>
                        </div>
                        <div>

                            <p><strong>Phone:</strong> {Info.about.phone}</p>
                        </div>

                        <div>

                            <p><strong>Address:</strong> {Info.about.address}</p>
                        </div>

                        <div>

                            {/* Add icons for social media if needed */}
                        </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SingleTabs;
