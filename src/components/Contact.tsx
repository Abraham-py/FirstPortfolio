import React from 'react';

interface ContactProps {
  email: string;
  linkedin: string;
  github: string;
}

const Contact: React.FC<ContactProps> = ({ email, linkedin, github }) => {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-2xl font-bold mb-6">Contacto</h2>
      <p className="mb-4">¿Interesado en trabajar juntos? ¡Contáctame!</p>
      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline dark:text-blue-400">
            {email}
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href={`https://linkedin.com/in/:${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            {linkedin}
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href={`https://linkedin.com/in/:${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            {github}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
