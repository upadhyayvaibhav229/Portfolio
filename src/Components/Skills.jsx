import React from "react";
import htmlLogo from "../assets/img/html.png";
import cssLogo from "../assets/img/css.png";
import jsLogo from "../assets/img/js.png";
import jqueryLogo from "../assets/img/jq.png";
import bootstrapLogo from "../assets/img/bootstrap.png";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", image: htmlLogo, proficiency: "90%" },
    { id: 2, name: "CSS", image: cssLogo, proficiency: "90%" },
    { id: 3, name: "JavaScript", image: jsLogo, proficiency: "80%" },
    { id: 4, name: "jQuery", image: jqueryLogo, proficiency: "80%" },
    { id: 5, name: "Bootstrap", image: bootstrapLogo, proficiency: "90%" },
  ];

  return (
    <section id="skills">
      <div className="flex t-4 max-w-full justify-center items-center  py-10 dark:bg-slate-900">
        <div className="flex flex-col md:flex-row justify-around text-black dark:text-white  p-6 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className=" md:w-2/3 space-y-4 text-center md:text-left">
            <h1 className="text-2xl text-left">Skills</h1>
            <h2 className="md:text-3xl text-2xl font-mono font-bold text-left">
              Let's Explore Popular <br />
              <span className="text-yellow-500">Skills and Experience</span>
            </h2>
            <p className="md:text-xl text-md md:leading-relaxed text-left text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              rem quo id vero, esse magni voluptatem quam, accusamus earum
              facere odit molestiae voluptatem, aliquid laudantium! Et excepturi
            </p>
            <div>
              <button className="bg-yellow-400 px-5 py-3 text-xl font-semibold border-none rounded-xl hover:bg-yellow-500">
                Learn More &gt;
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 flex flex-wrap justify-center mt-8 md:mt-0">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex justify-center items-center bg-slate-800 w-36 h-40 mx-auto px-5 py-5 m-2 shadow-lg"
              >
                <div className="space-y-2 p-5">
                  <img
                    src={skill.image}
                    alt={`${skill.name} Logo`}
                    className="w-14 h-14 mx-2 rounded-lg shadow-lg"
                  />
                  <p className="px-2 text-white text-xl text-center">
                    {skill.name}
                  </p>
                  <h3 className="border-2 border-yellow-500 text-white px-3 py-3 text-center m-2 rounded-xl hover:bg-yellow-500 hover:text-black">
                    {skill.proficiency}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
