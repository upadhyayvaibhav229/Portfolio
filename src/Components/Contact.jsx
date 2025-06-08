import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState(""); // Added subject state

  function HandleSubmit(e) {
    e.preventDefault();
    alert(`Message Sent Successfully ${name}`);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSubject(""); // Clear subject field
  }

  // Function to generate WhatsApp link
  const generateWhatsAppLink = () => {
    const phoneNumber = "9004523446"; // Replace with the target WhatsApp phone number
    const text = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <section id="contacts" className="">
      {/* Container */}
      <div className="dark:bg-gray-900 dark:text-white py-10 px-6 md:px-16 p-10">
        <h1 className="dark:text-white text-center text-4xl mt-10 mb-7">Contact <span className="text-yellow-500">US</span> </h1>
        <hr  className=""/>
        {/* Contact Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8 mt-10">
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
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={HandleSubmit}>
              <InputField type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <InputField type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <InputField type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <TextArea placeholder="Write Message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <SubmitButton />
            </form>
            {/* WhatsApp Button */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 mt-4 block text-center"
            >
              Send Message via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable InputField Component
const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:text-black"
  />
);

// Reusable TextArea Component
const TextArea = ({ placeholder, value, onChange }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
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
