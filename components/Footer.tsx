import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-300 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Mahmoud Ali. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/drmahmoodali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors duration-300">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/Mahmoud-Ali91" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors duration-300">
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;