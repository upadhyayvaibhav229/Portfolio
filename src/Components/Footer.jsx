import React from "react";
import logo from "/LOGO.png";

const Footer = () => {
  return (
    <footer className=" dark:bg-slate-900 dark:text-white overflow-x-hidden">
      {/* Main Footer Content */}
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around items-center border-t dark:border-gray-700 pt-8  ">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full dark:bg-gray-800 flex items-center justify-center">
            <img src={logo} alt="Avatar" className="w-10 h-10 rounded-full" />
          </div>
          <span className="text-lg  font-bold text-yellow-400 ">Vaibhav</span>
        </div>

        {/* Links and Newsletter */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-8 md:mt-0">
          {/* Quick Links */}
          <div className="flex flex-col space-y-4 p-10">
            {["Service", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="dark:text-gray-400 dark:hover:text-white hover:text-blue-900"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white focus:text-black"
            />
            <button className="bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-md hover:bg-yellow-500">
              Sign up
            </button>
          </div>
        </div>

        {/* Address Section */}
        <Address />
      </div>
      {/* Footer Bottom */}
      <div className="flex justify-between py-5 px-5 font-light items-center bg-slate-700 w-full ">
        {/* Copywrite Text */}
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sm text-white text-center mt-5">
            Copywrite © 2024, Vaibhav. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        {/* <SocialLinks /> */}
      </div>
    </footer>
  );
};

// Address Component
const Address = () => (
  <div className="mt-8 md:mt-0 p-5">
    <p className="dark:text-gray-400 px-6 text-xl font-bold">Address</p>
    <div className="flex flex-col space-y-2 dark:text-gray-300">
      <p className="flex text-wrap items-center">
        <span className="mr-2">📍</span> wadilal, Gosalia Road, <br /> Sanjay
        Nagar,
        <br /> Sundar Gali, <br /> Kandivali(West), Mumbai - 400067
      </p>
      <p className="flex items-center">
        <span className="mr-2">✉️</span> upadhyayvaibhav229 <br /> @gmail.com
      </p>
      <p className="flex items-center">
        <span className="mr-2">📞</span> +91 9004523446
      </p>
    </div>
  </div>
);

// SocialLinks Component
const SocialLinks = () => {
  const socialPlatforms = ["Github", "Twitter", "Instagram", "LinkedIn"];
  return (
    <ul className="list-none text-white flex flex-wrap gap-4 p-5">
      {socialPlatforms.map((platform) => (
        <li key={platform}>
          <a
            href={`https://${platform.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
