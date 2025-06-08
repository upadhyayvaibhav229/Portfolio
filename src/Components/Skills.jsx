import React, { useState } from "react";
import { motion } from "framer-motion";
import htmlLogo from "../assets/img/html.png";
import cssLogo from "../assets/img/css.png";
import jsLogo from "../assets/img/js.png";
import jqueryLogo from "../assets/img/jq.png";
import bootstrapLogo from "../assets/img/bootstrap.png";

// Example backend logos, replace with actual paths or URLs
// import nodeLogo from "../assets/img/node.png";
// import expressLogo from "../assets/img/express.png";
// import mongoLogo from "../assets/img/mongo.png";

const frontendSkills = [
  { id: 1, name: "HTML", image: htmlLogo, proficiency: "90%" },
  { id: 2, name: "CSS", image: cssLogo, proficiency: "90%" },
  { id: 3, name: "JavaScript", image: jsLogo, proficiency: "80%" },
  { id: 4, name: "jQuery", image: jqueryLogo, proficiency: "80%" },
  { id: 5, name: "Bootstrap", image: bootstrapLogo, proficiency: "90%" },
];

const backendSkills = [
  { id: 1, name: "Node.js",  proficiency: "85%" },
  { id: 2, name: "Express.js",  proficiency: "80%" },
  { id: 3, name: "MongoDB", proficiency: "75%" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const displayedSkills = activeTab === "Frontend" ? frontendSkills : backendSkills;

  return (
    <section id="skills" className="py-16 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
          My <span className="text-yellow-500">Skills</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Here are some of the technologies I work with:
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["Frontend", "Backend"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition cursor-pointer
              ${
                activeTab === tab
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "bg-slate-700 text-white hover:bg-yellow-400 hover:text-black"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-slate-800 rounded-lg flex flex-col items-center p-5 shadow-lg hover:scale-105 hover:bg-yellow-400  hover:text-black transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-3 rounded"
            />
            <h2 className="text-xl font-semibold text-white dark:text-white">
              {skill.name}
            </h2>
            <p className="text-white border border-amber-700 rounded hover:bg-amber-700  p-2 b text-lg font-medium mt-2">
              {skill.proficiency}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
