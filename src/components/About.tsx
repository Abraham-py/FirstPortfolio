import React from 'react';

interface SobreMiProps {
  yearsOfExperience: number;
  hobbies: string;
  professionalGoal: string;
  imageUrl: string;
}

const About: React.FC<SobreMiProps> = ({ yearsOfExperience, hobbies, professionalGoal, imageUrl }) => {
  return (
    <section id="about" className=" mt-24 pt-10 w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-center items-center text-center hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-in-out  scroll-m-16">
      <div className="flex-1 mb-6 md:mb-0 order-2">
        <h2 className="text-2xl font-bold mb-4">&lt;Acerca de mí/&gt;</h2>
        <div className="space-y-4">
          <p>
            Soy un desarrollador web con {yearsOfExperience} años de experiencia en la creación de aplicaciones web modernas y escalables.
            Mi pasión por la tecnología y el aprendizaje continuo me impulsa a mantenerme actualizado con las últimas tendencias y mejores prácticas en el desarrollo web.
          </p>
          <p>
            Fuera del mundo del código, disfruto {hobbies}.
            Creo firmemente en el equilibrio entre el trabajo y la vida personal, lo que me ayuda a mantener la creatividad y la productividad en mis proyectos.
          </p>
          <p>
            Mi objetivo profesional es {professionalGoal}.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center order-1">
        <img src={imageUrl} alt="Sobre mí" className="w-full h-auto max-w-xs md:max-w-sm object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default About;
