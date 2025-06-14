import React, { useState } from 'react';
import { img } from '../assets/img'; // Adjust the import path as necessary
const SingleTabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    const Info = {
        about: {
            title: 'Personal Info',
            img: img.personal_info,
            desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur...',
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
            desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur...',
        },
        skills: {
            title: 'My Skills',
            img: img.programmer_gif,
            desc: 'Mention your skills or add skill bars here...',
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

            <div className='tab-content text-center p-6 border rounded-xl w-full max-w-3xl shadow-md bg-white'>
                <h2 className='text-2xl font-bold mb-4'>{Info[activeTab].title}</h2>
                <p className='text-gray-700 mb-4'>{Info[activeTab].desc}</p>

                {activeTab === 'about' && (
                    <div className='text-left space-y-2'>
                        <p><strong>Email:</strong> {Info.about.email}</p>
                        <p><strong>Phone:</strong> {Info.about.phone}</p>
                        <p><strong>Address:</strong> {Info.about.address}</p>
                        {/* Add icons for social media if needed */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleTabs;
