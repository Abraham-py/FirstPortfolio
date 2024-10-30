// ProjectCard.tsx
import React from "react";
import { TechnologyList } from "./TechnologyList";
import { notify } from "../logicComponents/notification";
import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <a
          href={project.link}
          onClick={notify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300 hover:text-blue-700"
        >
          Ver proyecto
        </a>
        <TechnologyList technologies={project.technologies} />
      </div>
    </div>
  );
};
