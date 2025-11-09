import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div 
      className="relative flex-grow bg-cover bg-center text-white flex items-center justify-center text-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584515933487-779824d2792b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white opacity-0 animate-fade-in-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
             Data-Driven Product Manager
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-10 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            I combine commercial insight with an analytical decision process to deliver high-quality, market-ready products. With deep experience in pharmacy retail, procurement, and product development, I specialize in managing the full product lifecycle, from concept and sourcing to shelf placement.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-soft-blue text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;