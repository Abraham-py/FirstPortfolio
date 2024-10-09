import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import GenericButton from './components/GenericButton.tsx';
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import  Contact  from './components/Contact';
import { tchProject1, tchProject2, tchProject3, svgSkills } from './img/svg.ts';
import SocialButtons from './components/SocialButtons.tsx';


const App: React.FC = () => {
  return (
    <div className="pt-5 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-between items-center text-slate-300">
      <NavBar title='ADev' navItems={[{ name: 'Inicio', href: '#intro' }, { name: 'Proyectos', href: '#projects' }, { name: 'Sobre mi', href: '#about' }, { name: 'Contacto', href: '#contact'}]} />
      <section id='intro' className="scroll-m-16 max-w-3/5 mb-12 flex flex-col items-center justify-center">
        <Intro name='Abraham'/> 
        <div className="flex flex-col justify-center align-middle items-center w-full">
          <SocialButtons LinkedIn='abraham-de-jesús-rodríguez-rodríguez-091a65299' Github='Abraham-py' Twitter='Abraham08761215'/>
          <GenericButton mail='' ButtonText='Mail'/> 
        </div>
      </section>
      <section id='projects' className='w-3/5 p-2 justify-between  scroll-m-16'>
      <Projects projects={[
          { id: 1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1...', link: 'https://linkproyecto1.com', image: './src/img/logo.jpg', technologies: tchProject1},
          { id: 2, title: 'Proyecto 2', description: 'Descripción del Proyecto 2...', link: 'https://linkproyecto2.com', image: './src/img/react.png', technologies:tchProject2},
          { id: 3, title: 'Proyecto 3', description: 'Descripción del Proyecto 3...', link: 'https://linkproyecto3.com', image: './src/img/vue.png', technologies: tchProject3 }
        ]} />
        <Skills skills={svgSkills} />
      </section>
      <About 
        yearsOfExperience={5} 
        hobbies='programación, lectura'
        professionalGoal="Convertirme en un experto en desarrollador y padre de familia" 
        imageUrl="./src/img/main.jpg" />
        <div className='my-5'>
        <Contact email="example@example.com" linkedin="Abraham de J. Rodríguez Rodríguez" github='Abraham-py' />
        </div>
      <Footer/> 
    </div>
  );
};

export default App;