
export interface Technology {
    name: string;
    svg: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
    technologies: Technology[];
  }
  
  export interface ProjectsProps {
    projects: Project[];
  }
  