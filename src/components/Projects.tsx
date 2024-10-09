import React from 'react';
import { notify } from '../logicComponents/notification';
import { ToastContainer } from 'react-toastify';

interface Technology {
  name: string;
  svg: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: Technology[];
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-6 text-center shadow-sm">&lt;Mis Proyectos/&gt;</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                onClick={notify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300 hover:text-blue-700"
              >
                Ver proyecto
              </a>
              <div className="mt-4 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="h-6 w-6 mr-2 transition-transform duration-300 hover:scale-110" dangerouslySetInnerHTML={{ __html: tech.svg }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </section>
)};