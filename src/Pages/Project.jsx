import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { img } from "../assets/img";
import StatusModal from "../Components/StatusModal"; // ✅ Correct spelling

const project = [
  {
    title: "Portfolio",
    stack: "Frontend",
    projectStatus: "Completed",
    image: img.budgetTracker,
    description: "Track your daily expenses with charts and categories.",
    tech: ["React", "Redux", "Tailwind"],
    github: "https://github.com/upadhyayvaibhav229/Portfolio.git",
    live: "https://portfolio-upadhyayvaibhav229s-projects.vercel.app",
  },
  {
    title: "To-Do App",
    stack: "Frontend",
    projectStatus: "Completed",
    image: img.todoApp,
    description: "Simple task manager with filters and localStorage.",
    tech: ["React", "Redux", "CSS"],
    github: "https://github.com/upadhyayvaibhav229/TODO.git",
    live: "https://todoapp-gules-five.vercel.app/",
  },
  {
    title: "E-commerce UI",
    stack: "Frontend",
    projectStatus: "Completed",
    image: img.ecommerce,
    description: "Frontend UI for an e-commerce platform with product grid and cart.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Firebase"],
    github: "https://github.com/upadhyayvaibhav229/React-ecommerce-website.git",
    live: "https://react-ecommerce-website-phi.vercel.app/",
  },
  {
    title: "Doctor Appointment Site (🚧 Work in Progress)",
    stack: "Full Stack",
    projectStatus: "In Progress",
    image: img.doctor,
    description: "A doctor appointment booking platform with admin panel and image upload features.",
    tech: ["MERN", "Tailwind CSS"],
    github: "https://github.com/upadhyayvaibhav229/React-ecommerce-website.git",
    live: "https://react-ecommerce-website-phi.vercel.app/",
    status: [
      "✅ Admin dashboard UI setup",
      "✅ Doctor form with image upload",
      "🔄 Availability toggle in progress",
      "🕒 Next: Authentication and user booking system",
    ],
  },
  {
    title: "Student Study Portal",
    stack: "Full Stack",
    projectStatus: "Completed",
    image: img.studentPortal,
    description: "Educational dashboard with basic UI built using HTML/CSS and Django.",
    tech: ["HTML/CSS", "JS", "Bootstrap", "Django"],
    github: "https://github.com/upadhyayvaibhav229/React-ecommerce-website.git",
    live: "https://react-ecommerce-website-phi.vercel.app/",
  },
];

const Projects = () => {
  const [selectedStack, setSelectedStack] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [activeStatus, setActiveStatus] = useState(null);

  const stackTabs = ["All", "Frontend", "Full Stack"];
  const statusTabs = ["All", "Completed", "In Progress"];

  const filteredProjects = project.filter((proj) => {
    const stackMatch = selectedStack === "All" || proj.stack === selectedStack;
    const statusMatch = selectedStatus === "All" || proj.projectStatus === selectedStatus;
    return stackMatch && statusMatch;
  });

  return (
    <section className="py-10 px-4 dark:bg-gray-900 text-white" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white text-black">Projects</h2>

      {/* Tech Stack Tabs */}
      <div className="flex gap-4 justify-center mb-4 flex-wrap">
        {stackTabs.map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-2 rounded-md transition ${
              selectedStack === stack
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Project Status Tabs */}
      <div className="flex gap-4 justify-center mb-6 flex-wrap">
        {statusTabs.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-md transition ${
              selectedStatus === status
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Filtered Projects */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredProjects.map((proj, index) => (
          <ProjectCard
            key={index}
            {...proj}
            onShowStatus={() => setActiveStatus(proj)}
          />
        ))}
      </div>

      {/* Status Modal */}
      {activeStatus && (
        <StatusModal
          title={activeStatus.title}
          status={activeStatus.status}
          onClose={() => setActiveStatus(null)}
        />
      )}
    </section>
  );
};

export default Projects;
