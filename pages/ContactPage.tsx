import React from 'react';
import { GithubIcon, LinkedinIcon, EmailIcon, PhoneIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden">
          
          {/* Contact Info Section */}
          <div className="md:w-1/3 bg-navy text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8 text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </p>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/drmahmoodali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors duration-300">
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <a href="https://github.com/Mahmoud-Ali91" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors duration-300">
                <GithubIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-navy mb-8">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-soft-blue/10 p-3 rounded-full">
                    <EmailIcon className="w-6 h-6 text-soft-blue" />
                </div>
                <div>
                  <h3 className="text-gray-500 font-semibold">Email</h3>
                  <a href="mailto:drmahmoodali91@gmail.com" className="text-lg text-navy hover:text-soft-blue font-medium transition-colors">
                    drmahmoodali91@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                 <div className="bg-soft-blue/10 p-3 rounded-full">
                    <PhoneIcon className="w-6 h-6 text-soft-blue" />
                </div>
                <div>
                  <h3 className="text-gray-500 font-semibold">Phone</h3>
                  <a href="tel:+201021318619" className="text-lg text-navy hover:text-soft-blue font-medium transition-colors">
                    +201021318619
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;