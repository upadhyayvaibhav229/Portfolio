import React from "react";
import vaibhav from "../assets/img/vaibhav.png";

const Home = () => {
  return (
    <section id="home">

    <div className="container text- dark:text-white dark:bg-slate-900 max-w-5xl flex flex-wrap justify-around items-center md:min-h-screen pb-10 py-5 mt-11">
      <div className="p-2 pt-5 ml-4">
        <h1 className=" text-xl md:text-xl font-bold leading-6">
          Hello, I'm
        </h1>
        <h1 className="text-yellow-500 text-2xl md:text-2xl font-bold">
          Vaibhav Upadhyay
        </h1>
        <h1 className=" text-3xl md:text-2xl font-bold leading-7">
          Full Stack Developer
        </h1>
        <p className=" font-bold text-lg md:text-[15px] leading-8">
          Lorem ipsum dolor sit amet consectetur, <br />
          adipisicing elit. Saepe, minus?
        </p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 mt-4 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-sm md:text-sm font-semibold">
            Hire Me!
          </button>
          <button className="px-4 py-1 mt-4 rounded-lg bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-black text-sm md:text-lg font-semibold">
            Download CV
          </button>
        </div>
      </div>

      <div>
        <img
          className="w-[400px] md:w-[200px] lg:w-[500px] rounded-full"
          src={vaibhav}
          alt="Profile Image"
        />
      </div>

      <div className="bg-slate-800 text-white rounded-lg h-50 w-64 md:w-48 p-4 mt-4">
        <div className="mt-3">
          <h1 className="text-2xl text-yellow-500">20+</h1>
          <p className="text-xl">Demo Project</p>
          <div className="border-2 mt-3 rounded-lg"></div>
          <h1 className="text-2xl text-yellow-500 mt-3">99%</h1>
          <p className="text-xl">Happy Client</p>
          <div className="border-2 mt-3"></div>
        </div>
      </div>

      <div className="hidden md:flex flex-col border border-yellow-500 gap-6 rounded-md">
        <a href="#">
          <i className="fa-brands fa-github text-yellow-500 text-2xl p-3 hover:text-red-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram text-yellow-500 text-2xl p-3 hover:text-pink-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin-in text-yellow-500 text-2xl p-3 hover:text-blue-500 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter text-yellow-500 text-2xl p-3 hover:text-blue-400 hover:bg-gray-800 rounded-lg cursor-pointer"></i>
        </a>
      </div>
    </div>
    </section>
  );
};

export default Home;
