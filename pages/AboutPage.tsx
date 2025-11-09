import React from 'react';
import {
  SolutionIcon,
  CheckmarkIcon,
  AnalyticsIcon,
  ExecutionIcon,
  LeadershipIcon,
} from '../components/Icons';

const skills = {
  "Product Strategy & Development": ["Oral Care Lifecycle", "Pricing & ROI Design", "Launch Execution", "Go-to-Market Planning", "Product-Market Fit & Validation"],
  "Market Intelligence & Analytics": ["Python", "Google Sheets", "Power BI", "Predictive Modeling", "Unsupervised Learning", "Forecasting & Trend Analysis"],
  "Cross-Functional Execution": ["R&D & Regulatory Coordination", "Supplier & Compliance Management", "Supply Chain Integration"],
  "Leadership & Communication": ["Stakeholder Alignment", "Insight Translation", "Agile Execution", "Strategic Storytelling"]
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "Product Strategy & Development": SolutionIcon,
  "Market Intelligence & Analytics": AnalyticsIcon,
  "Cross-Functional Execution": ExecutionIcon,
  "Leadership & Communication": LeadershipIcon,
};

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        {/* Professional Overview */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
               <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-soft-blue to-blue-300 blur-xl opacity-50"></div>
               <img 
                src="https://i.postimg.cc/ZnyDLVcF/profile.jpg" 
                alt="Mahmoud Ali" 
                className="relative rounded-full w-64 h-64 mx-auto shadow-2xl border-4 border-white object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-navy mb-4">About Me</h1>
            <h2 className="text-2xl font-semibold text-soft-blue mb-4">A Product Manager with a Passion for Healthcare and Data</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
             I'm a Product Manager with practical experience across pharmacy retail, procurement, and product development in both pharmaceutical and personal care. My approach is simple: combine commercial insight with an analytical decision process to deliver high-quality, market-ready products.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">
              I'm skilled in managing the full product lifecycle, from the initial concept and sourcing raw materials all the way to shelf placement. I thrive on turning ideas into impactful healthcare and personal care solutions that meet real-world needs.
            </p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-navy mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = iconMap[category];
              return (
                <div 
                  key={category}
                  className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center mb-6">
                     <div className="flex-shrink-0 bg-soft-blue/10 p-4 rounded-full">
                        {Icon && <Icon className="w-8 h-8 text-soft-blue" />}
                     </div>
                     <h3 className="text-2xl font-bold text-navy ml-5">{category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skillList.map(skill => (
                      <li key={skill} className="flex items-start text-gray-700">
                        <CheckmarkIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;