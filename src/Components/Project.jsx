import React from 'react'
import ProjectImg from "../assets/img/project-img-1.png";
const Project = () => {
  return (
    <section id="projects" class="w-full py-10 bg-slate-700 p-5">
      <h1 class="text-center text-xl text-white">Latest Works</h1>
      <h2 class="text-center text-2xl text-white">
        Explore My Popular Projects
      </h2>
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 mt-4">
        {/* <!-- Left: Image Section --> */}
        <div class="w-full mt-4 md:w-1/2 flex justify-center">
          <img
            src={ProjectImg}
            alt="Project Showcase"
            class="w-[500px] rounded-lg shadow-lg"
          />
        </div>
        {/* <!-- Right: Content Section --> */}
        <div class="w-full md:w-1/3 text-left mt-5 ml-4 md:ml-0">
          <h4 class="text-yellow-500 md:text-sm text-md font-bold mb-2 ml-4">
            Website Design
          </h4>
          <h2 class="text-white text-3xl font-bold mb-4">My Portfolio</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Hello! This is my personal portfolio website built using HTML,
            TailwindCSS, jQuery, JavaScript. This portfolio is fully responsive
            across all devices.
          </p>
           <a
            href="#"
            class="inline-flex items-center text-yellow-500 font-bold "
          >
            <span>View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a> 
        </div>
      </div>
      <div class="container mx-auto flex flex-col md:flex-row-reverse items-center justify-center md:justify-around gap-8 mt-4">
        {/* <!-- Left: Image Section --> */}
        <div class="w-full mt-4 md:w-1/2 flex justify-center">
          <img
            src={ProjectImg}
            alt="Project Showcase"
            class="w-[500px] rounded-lg shadow-lg"
          />
        </div>
        {/* <!-- Right: Content Section --> */}
        <div class="w-full md:w-1/3 text-left mt-5 ml-4 md:ml-0">
          <h4 class="text-yellow-500 md:text-sm text-md font-bold mb-2 ml-4">
            Website Design
          </h4>
          <h2 class="text-white text-3xl font-bold mb-4">My Portfolio</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Hello! This is my personal portfolio website built using HTML,
            TailwindCSS, jQuery, JavaScript. This portfolio is fully responsive
            across all devices.
          </p>
           <a
            href="#"
            class="inline-flex items-center text-yellow-500 font-bold "
          >
            <span>View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a> 
        </div>
      </div>
    </section>
  );
}

export default Project
