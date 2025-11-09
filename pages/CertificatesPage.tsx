import React from 'react';
import { CertificateIcon, ExternalLinkIcon } from '../components/Icons';

type Certificate = {
  name: string;
  source: string;
  date: string;
  learnings: string;
  url?: string;
};

const certificates: Certificate[] = [
  {
    name: "Product Launches Micro-Certification",
    source: "Product School",
    date: "10/2025",
    learnings: "Mastered the frameworks and strategies required to bring a product to market successfully, from initial planning to launch day execution."
  },
  {
    name: "Data Literacy Professional",
    source: "DataCamp",
    date: "08/2025",
    learnings: "Developed the ability to read, understand, create, and communicate data as information, forming a solid foundation for data-driven decision-making.",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/fef2ef8f4ef6752dbf34557f00062acb017f3eab"
  },
  {
    name: "Sprints x Microsoft Summer Camp - Product Management",
    source: "Sprints & Microsoft",
    date: "07/2025",
    learnings: "Gained hands-on experience in an intensive, project-based environment, tackling real-world product management challenges with industry tools.",
    url: "https://sprints.ai/en-eg/journeys/learning/ID%20-%20SPR%20-%202S91TC/view-certificate-serial"
  },
  {
    name: "How to Access International Markets",
    source: "ITC SME Trade Academy",
    date: "07/2025",
    learnings: "Acquired critical knowledge on navigating global trade, including regulatory standards and market entry strategies for new regions.",
    url: "https://learning.intracen.org/verify/index.php?q=MjMwgLqmfu"
  },
  {
    name: "Practical Application of Gen AI for Project Managers",
    source: "Project Management Institute",
    date: "05/2025",
    learnings: "Explored how to leverage Generative AI to enhance project management workflows, improve productivity, and drive innovation.",
    url: "https://www.credly.com/badges/86a890a0-259c-4bbd-9904-05da1be25018/public_url"
  },
  {
    name: "Power BI Data Visualization",
    source: "AUC SCE",
    date: "03/2025",
    learnings: "Became proficient in using Power BI to transform complex datasets into clear, interactive, and impactful visualizations and dashboards."
  },
  {
    name: "AI for Organizational Leaders",
    source: "Microsoft",
    date: "12/2024",
    learnings: "Learned to identify opportunities for AI implementation at a strategic level to drive business value and organizational efficiency."
  },
  {
    name: "Data-Driven Business Growth",
    source: "365 Data Science",
    date: "11/2024",
    learnings: "Focused on techniques to harness data analytics for scaling businesses, identifying growth levers, and optimizing performance.",
    url: "https://learn.365datascience.com/certificates/CC-7B335B8F5D/"
  }
];

const CertificateCard: React.FC<{ cert: Certificate }> = ({ cert }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="p-6 border-b border-gray-200 flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-soft-blue uppercase tracking-wider">{cert.source}</p>
          <h3 className="text-xl font-bold text-navy mt-1">{cert.name}</h3>
          <p className="text-xs text-gray-400 mt-2">Issued: {cert.date}</p>
        </div>
        <div className="flex-shrink-0 bg-soft-blue/10 p-3 rounded-full ml-4">
            <CertificateIcon className="w-6 h-6 text-soft-blue" />
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h4 className="font-semibold text-navy mb-2">Key Learnings:</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{cert.learnings}</p>
      </div>

      {cert.url && (
        <div className="p-4 bg-gray-50 rounded-b-xl border-t border-gray-200 mt-auto">
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full text-center font-semibold text-soft-blue hover:text-navy transition-colors duration-300"
            >
              <span>View Credential</span>
              <ExternalLinkIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
        </div>
      )}
    </div>
  );
};

const CertificatesPage: React.FC = () => {
  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-down" style={{animationFillMode: 'forwards'}}>
          <h1 className="text-4xl font-bold text-navy mb-4">Certificates & Learning</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">My commitment to continuous professional development and staying at the forefront of industry best practices.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CertificateCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;