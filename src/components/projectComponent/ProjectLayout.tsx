
import React from "react";
import { ToastContainer } from "react-toastify";
import { ProjectList } from "./ProjectList";
import { ProjectsProps } from "../types/types";

export const ProjectLayout: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-6 text-center shadow-sm">
        &lt;Mis Proyectos/&gt;
      </h2>
      <ProjectList projects={projects} />
      <ToastContainer />
    </section>
  );
};
