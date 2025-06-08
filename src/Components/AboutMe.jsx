import React from "react";
import { motion } from "framer-motion";
import about from "../assets/img/img.png";
import Tick from "../assets/img/tick.png";
import Edu from "../assets/img/education (1).png";

const AboutMe = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const EducationCard = ({ year, title, location }) => (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // This helps in anchor jump situations

      className="flex flex-col bg-slate-700 p-4 rounded-lg w-80"
    >
      <div className="flex items-center">
        <img className="w-8 lg:w-11" src={Tick} alt="Tick Icon" />
        <p className="text-white text-xl lg:text-2xl mx-2">{year}</p>
      </div>
      <h2 className="text-xl lg:text-2xl text-white mt-2">{title}</h2>
      <h3 className="text-md lg:text-lg text-white">{location}</h3>
    </motion.div>
  );

  return (
    <section id="about" className="">
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex w-full justify-center items-center bg-slate-800 py-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 p-6 max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white md:w-1/2 space-y-4 text-center md:text-left"
          >
            <h1 className="text-2xl text-center">About Me</h1>
            <h2 className="md:text-3xl text-xl font-mono font-bold text-left">
              Professional
              <span className="text-yellow-500"> Problem Solutions</span> For
              Digital Products
            </h2>
            <p className="md:text-md md:leading-relaxed text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              rem quo id vero, esse magni voluptatem quam, accusamus earum
              facere odit molestiae voluptatem, aliquid laudantium! Et excepturi
              repellat labore doloribus!
            </p>
            <div className="md:flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-yellow-500">
                <span className="text-xl">✔️</span>
                <p>Frontend Development</p>
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                <span className="text-xl">✔️</span>
                <p>Backend Development</p>
              </div>
            </div>
            {/* Contact Info */}
            <div className="md:flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-yellow-500">
                <span className="text-xl bg-yellow-500 rounded-full p-2">
                  <i className="fa fa-envelope text-black"></i>
                </span>
                <p className="text-bold text-left">
                  Email Me: <br />
                  upadhyayvaibhav229@gmail.com
                </p>
              </div>
              <div className="flex items-center mt-4 gap-2 text-yellow-500">
                <span className="text-xl bg-yellow-500 rounded-full p-2">
                  <i className="fa fa-phone text-black"></i>
                </span>
                <p className="text-left">
                  Make A Call: <br />
                  +91 9004523446
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-[500px] flex justify-center mt-5 md:mt-0"
          >
            <img
              src={about}
              alt="About Me"
              className="w-100 h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Experience and Education Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-slate-100 dark:bg-slate-900 py-16 px-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 dark:text-white">
          My <span className="text-yellow-500">Experience</span> & Education
        </h1>

        <div className="max-w-4xl mx-auto space-y-20 flex flex-col md:flex-row justify-between items-center">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl text-center font-semibold text-yellow-500 mb-8">
              Education
            </h2>
            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-4 border-red-500 pl-6"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2024 - Present
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  Full Stack Development Course
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Andheri</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2020 - 2023
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  Bachelor's in Information Technology
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Smt. K. G Mittal College
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-4 border-green-500 pl-6"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2015 - 2017
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  High School
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sardar Vallabhbhai Patel
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
