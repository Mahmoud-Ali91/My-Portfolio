import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'ecc-case-study',
    title: "Case Study: Egyptian Company for Cosmetics (ECC) - A Regional Manufacturing Hub",
    category: 'B2B Manufacturing | Vertical Integration Strategy',
    summary: 'An analysis of how the Egyptian Company for Cosmetics (ECC) strategically positioned itself as a regional manufacturing hub, leveraging a B2B-first model, ISO certifications, and the acquisition of e-commerce platform Source Beauty for vertical integration and market intelligence.',
    image: 'https://i.postimg.cc/RC1zsY5W/64872334ef6b71686577972.png'
  },
  {
    id: 'hero-cosmetics',
    title: 'Hero Cosmetics: Building a Global Brand from a Single Problem',
    category: 'DTC Skincare | Brand Growth Strategy',
    summary: 'An analysis of how Hero Cosmetics scaled from a single-SKU startup to a $630M acquisition, and a blueprint for replicating its success in emerging markets like Egypt.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  },
  {
    id: 'breadfast',
    title: 'Breadfast: Strategic Positioning & ML Integration',
    category: 'Q-Commerce | Business Strategy',
    summary: 'A deep dive into Breadfast\'s operational model, competitive landscape, and the integration of machine learning for performance forecasting and strategic growth.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  },
  {
    id: 'estee-lauder',
    title: 'Estée Lauder: Turning Retail Shock into a Digital Growth Engine',
    category: 'Digital Transformation | Luxury Retail',
    summary: 'An analysis of how Estée Lauder pivoted its high-touch sales model to a digital-first strategy during the 2020 retail lockdowns, preserving brand experience through technology.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80'
  }
];

const CaseStudyCard: React.FC<{ study: typeof caseStudies[0] }> = ({ study }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
    <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm font-semibold text-soft-blue">{study.category}</span>
      <h3 className="text-xl font-bold text-navy mt-2 mb-3">{study.title}</h3>
      <p className="text-gray-600 mb-4 text-base leading-relaxed">{study.summary}</p>
      <Link to={`/case-studies/${study.id}`} className="font-semibold text-soft-blue hover:text-blue-600 transition-colors duration-300 group-hover:underline">
        Read Full Case Study &rarr;
      </Link>
    </div>
  </div>
);

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center opacity-0 animate-fade-in-down" style={{animationFillMode: 'forwards'}}>
          <h1 className="text-4xl font-bold text-navy mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Deep dives into my problem-solving and strategic approach, showcasing how I turn insights into impactful results.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;