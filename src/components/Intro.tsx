import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

interface Props {
  name: string;
}

const Intro: React.FC<Props> = ({ name }) => {
  return (
    <section id="intro" className="text-center text-slate-200 mt-0 min-h-screen flex flex-col justify-center items-center">
      <img src="./src/img/main.jpg" alt="Tu foto" className="rounded-full mx-auto mb-4 max-h-48 shadow-md shadow-blue-600" />
      <h2 className="text-2xl font-bold mb-4">Hola, soy <span className=' text-3xl font-mono text-blue-800 '>{name}</span> </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Mis compañeros me conocen como ADev. Soy un apasionado Frontend Developer, graduado de Ingenieria en Ciencias Informaticas con experiencia en el desarrollo de sitios web estéticos y funcionales. Me apasiona crear interfaces atractivas, optimizadas y con un excelente rendimiento, siempre buscando la mejor experiencia de usuario.
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transform hover:scale-110 shadow-lg hover:shadow-blue-500 transition-transform duration-300 ">
          <Twitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </a>
      </div>

      <a href="mailto:tu@email.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 shadow-lg hover:shadow-blue-500 transition-transform duration-300 ">
        <Mail className="h-5 w-5 inline-block mr-2 " />
        Contáctame
      </a>
    </section>
  );
};

export default Intro;
