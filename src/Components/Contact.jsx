import React from "react";

const Contact = () => {
  return (
    <section id="contacts">
      {/* Container */}
      <div className="dark:bg-gray-900 darK:text-white py-10 px-6 md:px-16  p-10">
        {/* Contact Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Get in Touch</h2>
            <h3 className="text-xl font-semibold text-yellow-400">
              Let's Talk For your Next Projects
            </h3>
            <p className="dark:text-gray-400 mt-4 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              odio!
            </p>
            <ul className="space-y-2 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✔</span> Professional Web
                Designer
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✔</span> Frontend
                Developer
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">✔</span> Backend
                Developer
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField type="text" placeholder="Full Name" />
              <InputField type="email" placeholder="Email" />
              <InputField type="text" placeholder="Phone Number" />
              <InputField type="text" placeholder="Subject" />
              <TextArea placeholder="Write Message..." />
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable InputField Component
const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:text-black"
  />
);

// Reusable TextArea Component
const TextArea = ({ placeholder }) => (
  <textarea
    placeholder={placeholder}
    className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:text-black md:col-span-2"
  ></textarea>
);

// Reusable SubmitButton Component
const SubmitButton = () => (
  <button
    type="submit"
    className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 md:col-span-2 flex items-center justify-center"
  >
    Send Us Message
    <span className="ml-2">✈️</span>
  </button>
);

export default Contact;
