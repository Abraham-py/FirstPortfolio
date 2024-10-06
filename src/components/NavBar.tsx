import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

interface NavBarProps {
  title: string;
  navItems: NavItem[];
}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////logica de la app/////////////////////////////////
////////////////////////////////////////////////////////////////////////////
const NavBar: React.FC<NavBarProps> = ({ title, navItems }) => {
  const [darkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////renderizado del componente///////////////////////
  /////////////////////////////////////////////////////////////
  return (
    <nav className="sticky top-0 mt-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-md z-10 transition-colors duration-300 rounded-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="ml-10 text-3xl font-bold text-blue-500">&lt;{title}/&gt;</h1>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-white/50 dark:bg-gray-700/50 backdrop-blur-md shadow-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div
            className={`md:flex md:space-x-4 ${isMenuOpen
              ? 'absolute top-full left-0 right-0 mt-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-3 shadow-lg'
              : 'hidden md:flex'
              }`}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full md:w-auto px-2 py-2 rounded-lg text-center text-xl font-semibold md:text-center text-gray-800 dark:text-white hover:bg-white/50 dark:hover:bg-gray-700/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;