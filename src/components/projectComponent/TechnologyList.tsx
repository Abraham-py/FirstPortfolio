
import React from "react";
import { Technology } from "../types/types.ts";

interface TechnologyListProps {
  technologies: Technology[];
}

export const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  return (
    <div className="mt-4 flex flex-wrap">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="h-6 w-6 mr-2 transition-transform duration-300 hover:scale-110"
          dangerouslySetInnerHTML={{ __html: tech.svg }}
        />
      ))}
    </div>
  );
};
