import { FC } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

interface Props {
  github: string;
  linkedin: string;
  twitter: string;
}
const SocialButtons: FC<Props> = ({ github, linkedin, twitter }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <a
        href={`https://linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500"
      >
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500"
      >
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transform hover:scale-110 shadow-lg hover:shadow-blue-500 transition-transform duration-300 "
      >
        <Twitter className="h-6 w-6" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  );
};
export default SocialButtons;
