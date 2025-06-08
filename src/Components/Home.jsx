import React from "react";
import { motion } from "framer-motion";
import vaibhav from "../assets/img/vaibhav.png";
import cv from "../assets/My_cv.pdf";
import CountUp from "react-countup";

const Home = () => {
  return (
    <section id="home">
      <div className="container dark:text-white dark:bg-slate-900 max-w-full flex flex-wrap justify-around items-center md:min-h-screen pb-10 py-5 mt-11">

        {/* Text Section */}
        <motion.div
          className="p-2 pt-5 ml-4 space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-6">
            Hello, I'm
          </h1>
          <h1 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl font-bold">
            Vaibhav Upadhyay
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-7">
            Full Stack Developer
          </h1>
          <p className="font-bold text-md md:text-lg lg:text-xl leading-8">
            Lorem ipsum dolor sit amet consectetur, <br />
            adipisicing elit. Saepe, minus?
          </p>

          {/* Buttons */}
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("contacts").offsetTop,
                  behavior: "smooth",
                })
              }
              className="px-4 py-2 mt-4 rounded-lg dark:bg-yellow-400 dark:text-black border-2 border-yellow-400 bg-blue-500 text-white border-none text-sm md:text-base lg:text-lg font-semibold cursor-pointer "
            >
              Hire Me!
            </motion.button>

            <motion.a
              href={cv}
              download="My_cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-4 py-2 mt-4 rounded-lg bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-black text-sm md:text-base lg:text-lg font-semibold cursor-pointer">
                Download CV
              </button>
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

        >
          <img
            className="w-[400px] md:w-[250px] lg:w-[350px] rounded-full cursor-pointer"
            src={vaibhav}
            alt="Profile Image"
          />
        </motion.div>

        {/* Stats Box */}
        <motion.div
          className="bg-slate-800 text-white rounded-lg h-50 w-64 md:w-48 lg:w-64 p-2 mt-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mt-3">
            <h1 className="text-2xl lg:text-3xl text-yellow-500">
              <CountUp end={20} duration={2} />+
            </h1>
            <p className="text-xl">Demo Project</p>
            <div className="border-2 mt-3 rounded-lg"></div>
            <h1 className="text-2xl lg:text-3xl text-yellow-500 mt-3">
              <CountUp end={99} duration={2} />%
            </h1>
            <p className="text-xl">Happy Client</p>
            <div className="border-2 mt-3"></div>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="hidden md:flex flex-col border border-blue-500 gap-6 rounded-md mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#">
            <i className="fa-brands fa-github text-black-500 text-2xl lg:text-3xl p-3 hover:text-red-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram text-red-500 text-2xl lg:text-3xl p-3 hover:text-pink-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in text-blue-400 text-2xl lg:text-3xl p-3 hover:text-blue-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-blue-700 text-2xl lg:text-3xl p-3 hover:text-blue-400 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
