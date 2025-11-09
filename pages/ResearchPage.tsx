import React from 'react';
import { Link } from 'react-router-dom';

const researchItems = [
  {
    id: 'hcl-egypt-expansion',
    title: "HCL's Strategic Expansion into Egypt: A Comprehensive Analysis",
    category: 'Market Entry Strategy | Tech Sector Analysis',
    summary: 'A detailed analysis of HCL Technologies\' strategic expansion into the Egyptian market, covering drivers, financial impact, competitive landscape, and future projections.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  },
  {
    id: 'global-aesthetic-markets-2025',
    title: 'Global Aesthetic Markets 2025: Data-Driven Insights for MENA Expansion',
    category: 'Market Analysis | Aesthetics & Skincare',
    summary: 'A detailed analysis of the global and regional aesthetic services and products sector, designed to distill complex data into actionable insights for organizations seeking to expand their aesthetic portfolio in the MENA region.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  },
  {
    id: 'egyptian-consumer-ad-survey',
    title: 'Egyptian Consumer Ad Survey: Digital vs. Traditional Media',
    category: 'Consumer Behavior | Digital Marketing',
    summary: 'An analysis of Egyptian student consumer behavior, revealing a strong preference for internet advertising over TV and a direct correlation between ad exposure and purchasing decisions.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  }
];

const ResearchCard: React.FC<{ research: typeof researchItems[0] }> = ({ research }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
    <img src={research.image} alt={research.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm font-semibold text-soft-blue">{research.category}</span>
      <h3 className="text-xl font-bold text-navy mt-2 mb-3">{research.title}</h3>
      <p className="text-gray-600 mb-4 text-base leading-relaxed">{research.summary}</p>
      <Link to={`/research/${research.id}`} className="font-semibold text-soft-blue hover:text-blue-600 transition-colors duration-300 group-hover:underline">
        View Full Research &rarr;
      </Link>
    </div>
  </div>
);


const ResearchPage: React.FC = () => {
  return (
    <div className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center opacity-0 animate-fade-in-down" style={{animationFillMode: 'forwards'}}>
          <h1 className="text-4xl font-bold text-navy mb-4">Market Research</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep dives into market trends, competitive analysis, and consumer behavior that inform my product strategies.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          {researchItems.map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;