import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { img } from '../assets/img';

const project = [
  {
    title: 'Portfolio',
    image: img.budgetTracker,
    description: 'Track your daily expenses with charts and categories.',
    tech: ['React', 'Redux', 'Tailwind'],
    github: 'https://github.com/upadhyayvaibhav229/Portfolio.git',
    live: 'https://portfolio-upadhyayvaibhav229s-projects.vercel.app',
  },
  {
    title: 'To-Do App',
    image: img.todoApp,
    description: 'Simple task manager with filters and localStorage.',
    tech: ['React', 'Redux', 'CSS'],
    github: 'https://github.com/upadhyayvaibhav229/TODO.git',
    live: 'https://todoapp-gules-five.vercel.app/',
  },
  {
    title: 'E-commerce UI',
    image: img.studentPortal,
    description: 'Frontend UI for an e-commerce platform with product grid and cart.',
    tech: ['React', 'Redux Toolkit', 'Tailwind', 'firebase'],
    github: 'https://github.com/upadhyayvaibhav229/React-ecommerce-website.git',
    live: 'https://react-ecommerce-website-phi.vercel.app/',
  },
  {
    title: 'Student Study Portal',
    image: img.ecommerce,
    description: 'Frontend UI for an e-commerce platform with product grid and cart.',
    tech: ['React', 'Redux Toolkit', 'Tailwind', 'firebase'],
    github: 'https://github.com/upadhyayvaibhav229/React-ecommerce-website.git',
    live: 'https://react-ecommerce-website-phi.vercel.app/',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const VisibleCards = showAll ? project : project.slice(0, 3);

  return (
    <section className="py-10 px-4 dark:bg-gray-900 text-white" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white text-black">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {VisibleCards.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {project.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            {showAll ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
