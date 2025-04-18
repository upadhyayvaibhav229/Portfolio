import React from "react";
import about from "../assets/img/img.png";
import Tick from "../assets/img/tick.png";
import Edu from "../assets/img/education (1).png";
const AboutMe = () => {
  const EducationCard = ({ year, title, location }) => (
    <div className="flex flex-col bg-slate-700 p-4 rounded-lg w-80">
      <div className="flex items-center">
        <img className="w-8 lg:w-11" src={Tick} alt="Tick Icon" />
        <p className="text-white text-xl lg:text-2xl mx-2">{year}</p>
      </div>
      <h2 className="text-xl lg:text-2xl text-white mt-2">{title}</h2>
      <h3 className="text-md lg:text-lg text-white">{location}</h3>
    </div>
  );

  return (
    <section id="about" className="">
      {/* About Me Section */}
      <div className="flex w-full justify-center items-center bg-slate-800 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 p-6 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-white md:w-1/2 space-y-4 text-center md:text-left">
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
          </div>

          {/* Image Section */}
          <div className="md:w-[500px] flex justify-center mt-5 md:mt-0">
            <img
              src={about}
              alt="About Me"
              className="w-100 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Experience and Education Section */}
      <div className="bg-slate-100 dark:bg-slate-900 py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 dark:text-white">
          My <span className="text-yellow-500">Experience</span> & Education
        </h1>

        <div className="max-w-4xl mx-auto space-y-20 flex flex-col md:flex-row justify-between items-center">
          {/* Experience Section */}
          {/* <div>
      <h2 className="text-2xl text-center font-semibold text-yellow-500 mb-8">Experience</h2>
      <div className="space-y-6 border-l-4 border-yellow-500 pl-6">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">2024 - Present</p>
          <h3 className="text-lg font-semibold dark:text-white">Node.js Developer Intern</h3>
          <p className="text-gray-700 dark:text-gray-300">XYZ Tech Pvt Ltd</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
          <h3 className="text-lg font-semibold dark:text-white">Freelance Projects</h3>
          <p className="text-gray-700 dark:text-gray-300">Remote</p>
        </div>
      </div>
    </div> */}

          {/* Education Section */}
          <div>
            <h2 className="text-2xl text-center font-semibold text-yellow-500 mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {/* Full Stack Development Course */}
              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2024 - Present
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  Full Stack Development Course
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Andheri</p>
              </div>

              {/* Bachelor's Degree */}
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2020 - 2023
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  Bachelor's in Information Technology
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Smt. K. G Mittal College
                </p>
              </div>

              {/* High School */}
              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2015 - 2017
                </p>
                <h3 className="text-lg font-semibold dark:text-white">
                  High School
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sardar Vallabhbhai Patel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
