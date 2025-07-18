import React from "react";

const ProjectCard = ({
  title,
  image,
  description,
  tech,
  github,
  live,
  status,
  onShowStatus,
}) => (
  <div className="bg-gray-800 rounded-xl shadow-lg transition overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((item, index) => (
          <span key={index} className="text-xs bg-slate-500 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 items-center flex-wrap">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-sm"
          >
            Live Demo
          </a>
        )}
        {Array.isArray(status) && status.length > 0 && (
          <button
            onClick={onShowStatus}
            className="text-yellow-400 text-sm underline hover:text-yellow-300"
          >
            View Progress
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
