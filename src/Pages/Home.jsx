import React from "react";
import { motion } from "framer-motion";
import vaibhav from "../assets/img/vaibhav.png";
import cv from "../assets/My_cv.pdf";
import CountUp from "react-countup";

const Home = () => {
  return (
    <section id="home">
      <div className="container dark:text-white dark:bg-slate-900 max-w-full flex flex-wrap justify-around items-center pb-10 py-5 mt-11">
        {/* Text Section */}
        <div className="container dark:text-white dark:bg-slate-900 max-w-screen-xl mx-auto px-4 flex md:flex-wrap xl:flex-nowrap gap-y-10 gap-x-6 justify-center items-center  pb-10 py-5 mt-11">

          <motion.div
            className="p-4 space-y-4 max-w-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Hello, I'm</h1>
            <h2 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl font-bold">Vaibhav Upadhyay</h2>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Full <span className="text-yellow-500">MERN</span> Stack <br /> Developer
            </h3>
            <p className="font-medium text-md md:text-lg lg:text-xl text-gray-500">
              Passionate about building responsive <br /> web applications and solving real-world <br />problems with clean and efficient code.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contacts").offsetTop,
                    behavior: "smooth",
                  })
                }
                className="px-6 py-2 mt-4 rounded-full bg-yellow-400 text-black text-sm md:text-base lg:text-lg font-semibold shadow-md hover:bg-yellow-300 transition"
              >
                Hire Me!
              </motion.button>

              <motion.a
                href={cv}
                download="My_cv.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 mt-4 rounded-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-black text-sm md:text-base lg:text-lg font-semibold transition"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-[280px] md:w-[300px] lg:w-[360px] rounded-full shadow-lg"
              src={vaibhav}
              alt="Vaibhav Upadhyay"
            />
          </motion.div>

          {/* Stats Box */}
          <motion.div
            className="bg-slate-800 text-white rounded-xl p-4 mt-6 w-72 text-center shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl text-yellow-400 font-bold">
                  <CountUp end={20} duration={2} />+
                </h1>
                <p className="text-lg">Projects Completed</p>
              </div>
              <div className="border border-gray-500"></div>
              <div>
                <h1 className="text-3xl text-yellow-400 font-bold">
                  <CountUp end={99} duration={2} />%
                </h1>
                <p className="text-lg">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="hidden md:flex flex-col gap-5 rounded-md mt-6 border border-gray-600 p-2 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {[
              { icon: "fa-github", color: "text-gray-300", hover: "hover:text-white" },
              { icon: "fa-instagram", color: "text-pink-500", hover: "hover:text-pink-400" },
              { icon: "fa-linkedin-in", color: "text-blue-400", hover: "hover:text-blue-300" },
              { icon: "fa-twitter", color: "text-blue-500", hover: "hover:text-blue-300" },
            ].map(({ icon, color, hover }, idx) => (
              <a key={idx} href="#" className={`text-2xl p-3 ${color} ${hover} rounded-lg transition`}>
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
