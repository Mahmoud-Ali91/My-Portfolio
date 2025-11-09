import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const projects = [
  { id: 'coach-iq', title: 'Coach IQ', category: 'Product Management', description: 'An AI-powered platform that analyzes and clusters football coaches based on their tactical decisions and adaptability, shifting the focus from player analytics to the intelligence behind coaching.', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
  { id: 'temsah-factory', title: 'Temsah Factory', category: 'Product Management', description: 'Repositioned a footwear manufacturer to partner with fashion brands, translating their aesthetics into scalable, high-quality shoe lines and bridging the gap between design and industrial production.', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
  { id: 'bigbasket-intelligence-app', title: 'BigBasket Intelligence App', category: 'Retail Intelligence', description: 'Designed and built a dynamic retail intelligence dashboard with Python, Streamlit, and Scikit-learn. The app uses KMeans clustering to group similar products and automatically identifies significant pricing gaps, providing actionable insights to optimize pricing strategy and unlock potential 10% margin gains.', image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
  { id: 'medicare-anomaly-detection', title: 'Medicare Anomaly Detection', category: 'Data Analytics', description: 'Developed an interactive dashboard that uses unsupervised learning (DBSCAN, KMeans) to proactively detect billing anomalies in Medicare Part B data, flagging high-risk providers for auditors and improving audit accuracy by 35%.', image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
  { id: 'warehouse-data-imputation', title: 'Warehouse Data Imputation', category: 'Data Analytics', description: 'Performed data imputation on a large warehouse dataset using a custom Python imputer. Addressed significant missing values in key columns by applying Random Forest models and business rule constraints to prepare the data for supply chain optimization analysis.', image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
  { id: 'gender-pay-equity-power-bi', title: 'Gender Pay Equity with Power BI', category: 'Data Analytics', description: 'Analyzed HR data to uncover insights on salary distribution, gender pay equity, and performance-based compensation using interactive Power BI dashboards.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80' },
];

const categories = ['All', 'Product Management', 'Retail Intelligence', 'Data Analytics'];

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm font-semibold text-soft-blue">{project.category}</span>
      <h3 className="text-xl font-bold text-navy mt-2 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-base leading-relaxed">{project.description}</p>
      {/* Update from <a> to <Link> */}
      <Link to={`/projects/${project.id}`} className="font-semibold text-soft-blue hover:text-blue-600 transition-colors duration-300 group-hover:underline">
        View Details &rarr;
      </Link>
    </div>
  </div>
);

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center opacity-0 animate-fade-in-down" style={{animationFillMode: 'forwards'}}>
            <h1 className="text-4xl font-bold text-center text-navy mb-4">My Projects</h1>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Here are some of the projects where I've applied my skills in data analysis and product management to solve real-world challenges.</p>
        </div>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 my-1 rounded-full font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-soft-blue focus:ring-offset-2 ${
                activeCategory === category
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-navy border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;