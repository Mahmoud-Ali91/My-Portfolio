import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, CheckmarkIcon } from '../components/Icons';

type JourneyItem = {
  date: string;
  type: 'work' | 'education';
  title: string;
  issuer: string; // Company or Institution
  description?: string;
  points: string[];
};

// Fix: Used the `satisfies` operator to apply a type check to the array literal
// without losing contextual typing. This allows TypeScript to correctly validate
// the `type` property as 'work' | 'education' before the `.sort()` method is called,
// resolving the original type error in a single expression.
const journeyData = ([
  // WORK EXPERIENCE
  {
    date: '12/2023 - Present',
    type: 'work',
    title: 'Product Manager – Oral & Health Care Division',
    issuer: 'Golden Green',
    points: [
      'Launched a new toothpaste brand, from concept to pharmacy shelves in 3 months, achieving a 50% lower unit cost.',
      'Built predictive investment and ROI models in Python & Power BI, sharpening funding decision priorities.',
      'Reduced production delays by redesigning sourcing workflows and improving stakeholder engagement between R&D, QC, and vendors.',
      'Led the operational and commercial transformation in the FMCG toll manufacturing space.',
    ],
  },
  {
    date: '11/2023 - 02/2024',
    type: 'work',
    title: 'Brand Analyst – Market Expansion & Readiness',
    issuer: 'Trindiva International',
    points: [
      'Built a compliance model for MENA regulatory standards to prepare for market entry.',
      'Analyzed 30+ cosmetic SKUs across 3 markets to establish pricing benchmarks for the first export phase.',
      'Standardized validation and labeling flows to ensure clinical and safety compliance before pilot export.',
    ],
  },
  {
    date: '05/2022 - 02/2024',
    type: 'work',
    title: 'Operations & Procurement Analyst',
    issuer: 'Abdelhak Pharmacy',
    points: [
      'Cut stock-outs by 45% and expiry waste by 30% using predictive inventory modeling.',
      'Automated demand planning by integrating Python forecasting scripts with the ERP, saving 10 hours of manual work weekly.',
      'Developed a BI dashboard to track supplier KPIs, improving reorder timing accuracy by 25%.',
      'Spearheaded crisis recovery initiatives during supply chain volatility through strategic vendor negotiations.',
    ],
  },
  {
    date: '03/2020 - 04/2022',
    type: 'work',
    title: 'Procurement Systems Lead',
    issuer: 'Waheed Ali Pharmacies',
    points: [
      'Engineered a +22% sales growth in 6 months for an underperforming branch through data-led inventory reallocation.',
      'Implemented geo-based sales heatmaps to redirect 35% of stock to high-yield areas and improve sell-through.',
      'Developed CRM-linked discount logic that increased the repeat-customer rate by 18%.',
    ],
  },

  // KNOWLEDGE GAINED (Replaces Education)
  {
    date: '2024 - Present',
    type: 'education',
    title: 'Advanced Product & AI Strategy',
    issuer: 'Applied Learning',
    points: [
      'Mastered go-to-market frameworks and launch execution for new product ventures.',
      'Began integrating Generative AI into product management workflows to enhance productivity and strategic planning.',
      'Deepened expertise in data visualization with Power BI to create impactful, executive-level dashboards.',
      'Studied international market entry strategies and global trade compliance.',
    ],
  },
  {
    date: '07/2023 - 11/2024',
    type: 'education',
    title: 'Deep Dive into Data Science',
    issuer: 'Professional Diploma & Applied Projects',
    points: [
      'Completed an intensive professional diploma, mastering Python, Scikit-learn, and advanced statistical modeling.',
      'Applied predictive modeling and unsupervised learning (DBSCAN, KMeans) in real-world projects to solve business problems.',
      'Learned Agile project management methodologies to structure and execute data projects efficiently.',
    ],
  },
  {
    date: '10/2020 - 06/2025',
    type: 'education',
    title: 'Building Commercial Acumen',
    issuer: 'Bachelor of Business Administration',
    points: [
      'Developed a strong commercial foundation, learning to connect technical data insights with overarching business objectives.',
      'Applied business principles directly to pharmacy retail challenges, driving tangible improvements in sales and operations.',
    ],
  },
  {
    date: '01/2009 - 01/2016',
    type: 'education',
    title: 'Scientific & Analytical Foundation',
    issuer: 'Faculty of Medicine (Undergraduate)',
    points: [
      'Built a foundation of scientific rigor, analytical thinking, and a systematic approach to problem-solving.',
      'This medical background informs my approach to product validation, efficacy, and understanding complex user needs in healthcare.',
    ],
  },
] satisfies JourneyItem[]).sort((a, b) => {
    // Custom sort logic to handle 'Present' and date ranges correctly
    const getDate = (dateStr: string) => {
        if (dateStr.includes('Present')) {
            // Give 'Present' a very high value to ensure it's always at the top
            const futureDate = new Date();
            futureDate.setFullYear(futureDate.getFullYear() + 100);
            return futureDate;
        }
        const parts = dateStr.split(' - ');
        const datePart = parts[parts.length - 1];
        // Handle 'YYYY' format by appending a month/day for valid parsing
        if (/^\d{4}$/.test(datePart)) {
            return new Date(`${datePart}-12-31`);
        }
        return new Date(datePart);
    };

    const dateA = getDate(a.date);
    const dateB = getDate(b.date);
    
    return dateB.getTime() - dateA.getTime();
});


const TimelineCard: React.FC<{ item: JourneyItem; isLeft: boolean }> = ({ item, isLeft }) => {
  const alignmentClass = isLeft ? 'text-right' : 'text-left';
  const pointsAlignment = isLeft ? 'text-right' : 'text-left';
  
  return (
    <div className={`w-full max-w-sm rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl`}>
      <p className={`text-sm font-semibold text-gray-500 ${alignmentClass}`}>{item.date}</p>
      <h3 className={`mt-1 text-xl font-bold text-navy ${alignmentClass}`}>{item.title}</h3>
      <p className={`font-semibold text-soft-blue ${alignmentClass}`}>{item.issuer}</p>
      {item.points.length > 0 && (
        <ul className={`mt-4 space-y-2 text-sm text-gray-600 ${pointsAlignment}`}>
          {item.points.map((point, index) => (
            <li key={index} className="flex items-start">
              {!isLeft && <CheckmarkIcon className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />}
              <span>{point}</span>
              {isLeft && <CheckmarkIcon className="ml-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const ExpertisePage: React.FC = () => {
  return (
    <div className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-down" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl font-bold text-navy mb-4">My Expertise & Journey</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My career is a story of convergence—blending a scientific foundation with on-the-ground business challenges and a systematic pursuit of data expertise. This timeline shows how I've woven these threads together to become a data-driven product leader.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 h-full border border-gray-300 border-2-2 border-opacity-20 hidden md:block" style={{ zIndex: 0 }}></div>

          {journeyData.map((item, index) => {
            const isWork = item.type === 'work';
            const Icon = isWork ? BriefcaseIcon : GraduationCapIcon;
            
            const desktopContent = (
              <div
                key={index}
                className={`mb-8 flex w-full items-center ${isWork ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between`}
              >
                <div className="hidden md:block md:w-5/12"></div>
                <div className="z-20 flex-shrink-0 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full" style={{ backgroundColor: isWork ? '#4a90e2' : '#28a745' }}>
                  <Icon className="mx-auto h-8 w-8 text-white" />
                </div>
                <div className={`order-1 w-full md:w-5/12 px-1 py-4 animate-fade-in-up`} style={{animationFillMode: 'forwards', animationDelay: `${index * 100}ms` }}>
                  <TimelineCard item={item} isLeft={isWork} />
                </div>
              </div>
            );
            
            const mobileContent = (
               <div key={index} className="mb-8 flex items-start">
                  <div className={`z-20 flex-shrink-0 flex items-center justify-center shadow-xl w-12 h-12 rounded-full mr-4`} style={{ backgroundColor: isWork ? '#4a90e2' : '#28a745' }}>
                      <Icon className={`h-6 w-6 text-white`} />
                  </div>
                  <div className={`w-full animate-fade-in-up`} style={{animationFillMode: 'forwards', animationDelay: `${index * 100}ms`}}>
                       <TimelineCard item={item} isLeft={false} />
                  </div>
               </div>
            );

            return (
              <React.Fragment key={index}>
                <div className="hidden md:flex">{desktopContent}</div>
                <div className="md:hidden">{mobileContent}</div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;