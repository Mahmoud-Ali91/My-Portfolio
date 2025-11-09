import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLinkIcon, PdfIcon } from '../components/Icons';

// Type definitions remain separate for clarity as structures are different
type HeroCaseStudyDetail = {
  title: string;
  category: string;
  focus: string;
  headerImage: string;
  background: string[];
  coreProblem: string[];
  solution: {
    intro: string;
    points: { title: string; description: string }[];
  };
  keyMoves: { pillar: string; execution: string; impact: string }[];
  businessImpact: string[];
  analyticalLens: {
    intro: string[];
    egyptAnalysis: {
      title: string;
      points: {
        heading: string;
        details: string[];
        subPoints?: string[];
      }[];
    };
    framework: { stage: string; adaptation: string }[];
  };
  takeaway: string[];
};

type EccCaseStudyDetail = {
    title: string;
    category: string;
    headerImage: string;
    introduction: string[];
    sections: Array<{
        title: string;
        findings: Array<{
            heading: string;
            details?: string[];
            subPoints?: string[];
            table?: {
                headers: string[];
                rows: string[][];
                numericColumns?: number[];
            };
        }>;
        resources?: string[];
    }>;
    conclusion: string;
    recommendations?: {
        'For HCL': string[];
        'For the Egyptian Government': string[];
        'For Potential Partners (Local Tech Companies and Startups)': string[];
    };
    resources?: string[];
};

const heroCaseStudyDetail: HeroCaseStudyDetail = {
    title: 'Hero Cosmetics: Building a Global Brand from a Single Problem',
    category: 'DTC Skincare | Brand Growth Strategy | Product-Market Fit',
    focus: 'From a niche acne patch to a multimillion-dollar acquisition through community-driven product strategy.',
    headerImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80',
    background: [
      'Hero Cosmetics started in 2017 with one simple, focused product — the Mighty Patch, a hydrocolloid acne patch inspired by Korean skincare. Founded by Ju Rhyu, the brand positioned itself as the empathetic, science-backed alternative to traditional acne treatments.',
      'Within five years, Hero scaled from a single-SKU startup to a $100M+ DTC skincare brand, later acquired by Church & Dwight for ~$630M — driven by strategic product focus, emotional branding, and data-informed growth.'
    ],
    coreProblem: [
      'The acne-care market was flooded with chemical-based products that overpromised results while damaging skin. Consumers, especially Gen Z, were seeking gentle, effective, stigma-free skincare that respected their real skin journey.',
      'Hero identified a psychological gap in addition to a product gap — acne treatment wasn’t just ineffective; it was emotionally alienating.'
    ],
    solution: {
      intro: 'Hero’s strategy blended product truth, empathetic branding, and data iteration:',
      points: [
        { title: 'Product Truth:', description: 'A patch that visibly worked overnight — no filters, no false promises.' },
        { title: 'Empathetic Branding:', description: 'Marketing that normalized acne instead of hiding it — “Real skin is in.”' },
        { title: 'Data-Driven Expansion:', description: 'Every new SKU solved a validated adjacent problem, building a logical ecosystem (e.g., post-acne balm, brightening wand).' }
      ]
    },
    keyMoves: [
      { pillar: 'Start Narrow, Grow Deep', execution: 'Focused on one SKU for two years', impact: 'Built credibility and repeat purchases' },
      { pillar: 'Authentic Storytelling', execution: 'Used relatable, unfiltered marketing', impact: 'Created trust and virality' },
      { pillar: 'DTC First, Retail Later', execution: 'Proved demand via Amazon & DTC', impact: 'Negotiated retail entry from strength' },
      { pillar: 'Feedback-Led R&D', execution: 'Used customer reviews as data', impact: '80%+ new SKUs had pre-validated demand' },
      { pillar: 'Inclusive Branding', execution: 'Gender-neutral, real-skin visuals', impact: 'Expanded reach & loyalty' }
    ],
    businessImpact: [
      'Achieved profitability within 24 months',
      'Exceeded $100M in annual sales',
      'Acquired for ~$630M by Church & Dwight (2022)',
      'Set new standards for minimalist, trust-first skincare branding'
    ],
    analyticalLens: {
      intro: [
        'In this case study, I analyzed Hero Cosmetics not as a beauty brand — but as a blueprint for building modern FMCG products in emerging markets, particularly Egypt and MENA.'
      ],
      egyptAnalysis: {
        title: 'Why This Model Can Be an Amazing Product in Egypt',
        points: [
          {
            heading: 'Unmet Market Gaps in Skincare',
            details: [
              'There’s no strong local DTC skincare brand that combines scientific credibility, minimalism, and emotional storytelling the way Hero did.',
              'A localized version of Hero’s model could dominate the “affordable-science” skincare niche.'
            ],
            subPoints: [
              'Imported luxury brands (expensive, inaccessible to mass market)',
              'Local products (limited innovation, low consumer trust)'
            ]
          },
          { heading: 'Egyptian Consumer Shift', details: ['Gen Z and Millennials are moving away from heavy pharmaceutical skincare.', 'They value transparency, results, and identity connection — not sterile “medical branding.”', 'This aligns perfectly with Hero’s real-skin movement and empathetic marketing style.'] },
          {
            heading: 'Industrial Feasibility',
            details: [
              'Local manufacturers like those I’ve worked with (Golden Green, Trindiva, SESIC) already have the capabilities.',
              'A hydrocolloid patch or acne recovery balm line can be developed locally with lower cost-per-unit and high export potential (to Gulf markets).'
            ],
            subPoints: [
              'Production capacity for dermo-cosmetics',
              'Regulatory familiarity with EDA and SFDA',
              'Cost advantage for local and export markets'
            ]
          },
          {
            heading: 'Distribution Advantage',
            details: [
              'Hero’s DTC-first strategy can be localized.',
              'It could start as a digitally native brand, then scale into pharmacy retail once product trust and word-of-mouth grow — mirroring Hero’s exact trajectory.'
            ],
            subPoints: [
                'Instagram-driven micro-influencer campaigns',
                'Thndr-style local e-commerce integrations',
                'Dermatology partnerships (Egyptian clinics & pharmacies)'
            ]
          },
          { heading: 'Export-Ready Position', details: ['A clean, minimal, functional Egyptian skincare line can scale across MENA, particularly Saudi Arabia, where Korean-inspired and problem-focused skincare products are in high demand.', 'Egypt’s cost base + Hero’s brand strategy = perfect regional export play.'] }
        ]
      },
      framework: [
        { stage: 'Single Problem', adaptation: '“Skin recovery” (acne / post-acne care)' },
        { stage: 'Product Truth', adaptation: 'Hydrocolloid patch or acne balm with visible results' },
        { stage: 'Brand Identity', adaptation: 'Empathetic, confident, Egyptian minimalist design' },
        { stage: 'Launch Channel', adaptation: 'DTC first (Instagram + local e-commerce)' },
        { stage: 'Scale Phase', adaptation: 'Pharmacy & export after validation' }
      ]
    },
    takeaway: [
      'Hero Cosmetics’ strength wasn’t just its product — it was how it humanized skincare through data and empathy.',
      'Egypt has both the manufacturing base and consumer appetite to replicate that success.',
      'A localized “Hero Egypt” could be the region’s first emotionally intelligent skincare brand — simple, credible, and proudly local.'
    ]
  };

const eccCaseStudyDetail: EccCaseStudyDetail = {
    title: "Case Study: Egyptian Company for Cosmetics (ECC) - A Regional Manufacturing Hub",
    category: "B2B Manufacturing | Vertical Integration Strategy | Nov 2025",
    headerImage: 'https://i.postimg.cc/RC1zsY5W/64872334ef6b71686577972.png',
    introduction: [
        "This case study analyzes the Egyptian Company for Cosmetics (ECC), a leading B2B contract manufacturer founded in 1981. We find that ECC has strategically positioned itself as a '360-degree' regional hub, leveraging comprehensive ISO certifications and a B2B-first model to serve over 400 local and multinational clients. The company's recent acquisition of the e-commerce platform Source Beauty and its backing by Lorax Capital Partners represent a sophisticated vertical integration strategy. This move is designed to gain invaluable market intelligence, provide a powerful launchpad for its clients' private label brands, and solidify its dominance against B2C-focused competitors who also offer contract manufacturing.",
        "The Egyptian Company for Cosmetics (ECC) has established itself as a pivotal player in the Middle East and Africa (MEA) beauty and personal care (BPC) industry. Founded in 1981, ECC has transitioned from a small laboratory to a diversified holding group, specializing in B2B services as a leading toll manufacturer and private label provider. The company's strategic focus is on bridging the gap between foreign and local products, with an ambition to become a global manufacturing hub in the MEA region."
    ],
    sections: [
        {
            title: "1. Core Business Model: 360-Degree B2B Services",
            findings: [
                {
                    heading: "History and Evolution",
                    details: ["ECC was founded in 1981 by Dr. Salah El Housseiny, initially concentrating on the production of cosmetic oils and soap. Over more than four decades, the company has significantly scaled its operations, now manufacturing for over 400 local and multinational companies."]
                },
                {
                    heading: "ECC's primary business is providing comprehensive contract manufacturing services, offering a '360-degree' solution from concept to distribution. This model is built on six core service pillars:",
                    table: {
                        headers: ["Service Pillar", "Description", "Strategic Value"],
                        rows: [
                            ["Research & Development (R&D)", "Innovative solutions for product development, formulation, and process improvement.", "Ensures product efficacy and market relevance."],
                            ["Product Registration", "Managing local and international regulatory compliance.", "Facilitates market entry and export for clients."],
                            ["Toll Manufacturing", "Agile, value-based production from formulation to final product.", "Provides scalable, high-quality production capacity."],
                            ["Private Labelling", "Custom formulations, packaging design, and branding for client-owned product lines.", "Enables companies and individuals to launch their own brands quickly."],
                            ["Packaging Solutions", "Reliable and high-quality primary packaging options.", "Streamlines the supply chain and ensures product integrity."],
                            ["Export & Logistics", "Comprehensive services including documentation, customs clearance, and shipping.", "Supports clients' regional and international expansion."]
                        ]
                    }
                }
            ]
        },
        {
            title: "2. Market Analysis and Competitive Position",
            findings: [
                {
                    heading: "Market Dynamics",
                    details: [
                        "ECC operates within the rapidly expanding Egyptian BPC market, which serves as a gateway to the broader MENA region.",
                        "The Egyptian BPC market is characterized by robust growth, driven by a young, beauty-conscious population and increasing digital access. To ensure accuracy, this analysis utilizes specific, citable market data:"
                    ],
                    table: {
                        headers: ["Market Segment", "2024 Value", "Projected Growth", "Source"],
                        rows: [
                            ["Beauty & Personal Care (BPC)", "US$1.85 billion", "Expected to reach US$3.10 billion by 2033 (CAGR of 5.89%)", "IMARC Group"],
                            ["Cosmetics Segment", "US$858.00 million", "Expected to grow annually by 7.82% (CAGR 2024–2028)", "EgyBeautyAfrica"],
                            ["Private Label Cosmetics", "US$66.88 million", "Projected to reach US$122.36 million by 2033", "Deep Market Insights"]
                        ],
                        numericColumns: [1, 2],
                    },
                    subPoints: ["This strong market tailwind, particularly the growth in the private label segment, provides a significant opportunity for ECC's B2B model, as the demand for local manufacturing capacity and expertise continues to rise."]
                },
                {
                    heading: "Competitive Landscape and Differentiation",
                    details: [
                        "ECC's competitive landscape is dominated by two primary types of players: pure-play B2B manufacturers and large B2C companies that also offer contract manufacturing. Key competitors include LUNA Perfumes and Cosmetics (Luna PAC) and EVA Cosmetics.",
                        "ECC's primary differentiation lies in its B2B-first model. While competitors like LUNA and EVA are market leaders with their own dominant B2C brands (e.g., EVA Pharma's sister company provides a strong cosmeceutical edge, and Luna Group is a major raw material supplier), their contract manufacturing services are often seen as a secondary revenue stream leveraging existing capacity.",
                        "This creates a potential conflict of interest for a client brand, which would be outsourcing production to a direct B2C competitor. ECC, by contrast, positions itself as a pure-play, dedicated partner whose success is entirely tied to the success of its clients' brands. Its 360-degree service model is its core focus, not a side business, which appeals to brands seeking a neutral, comprehensive manufacturing partner."
                    ]
                }
            ]
        },
        {
            title: "3. Product Portfolio, Quality, and Strategy",
            findings: [
                {
                    heading: "Production Capabilities and Quality Assurance",
                    details: ["The company's facilities are designed for high-volume, high-quality production across multiple product categories, including personal care, cosmetics, and cosmeceuticals."],
                    table: {
                        headers: ["Operational Metric", "Detail"],
                        rows: [
                            ["Facility Size", "8,136 m² production plant"],
                            ["Warehouse Capacity", "2,600 pallet warehouse"],
                            ["R&D Infrastructure", "3 dedicated R&D labs"],
                            ["Product Focus", "Hair care, cosmetics, cosmeceuticals, and nutraceuticals"]
                        ]
                    }
                },
                {
                    heading: "International Certifications",
                    details: ["ECC holds a comprehensive set of international certifications, which are critical for a global-focused toll manufacturer:"],
                    table: {
                        headers: ["Certification", "Focus Area", "Significance"],
                        rows: [
                            ["ISO 22716:2007 (GMP)", "Good Manufacturing Practices for Cosmetics", "Ensures safe and high-quality cosmetic product manufacturing."],
                            ["ISO 22000:2018 (FSSC)", "Food Safety Management System", "Crucial for the production of nutraceuticals/dietary supplements."],
                            ["ISO 9001:2015 (QMS)", "Quality Management System", "Guarantees consistent quality and meeting customer requirements."],
                            ["ISO 14001:2015 (EHS)", "Environmental Management System", "Shows commitment to environmental sustainability."],
                            ["ISO 45001:2018 (OHS)", "Occupational Health & Safety", "Demonstrates commitment to a safe and healthy work environment."]
                        ]
                    }
                },
                {
                    heading: "Strategic Expansion and Investment",
                    details: ["ECC's strategy is focused on expanding its reach and capabilities, moving to integrate market intelligence into its manufacturing process."],
                    subPoints: [
                        "Existing B2C Portfolio: ECC was not a pure B2B player, already owning successful B2C brands like Infinity (cosmeceuticals) and Bobana (commercial skincare).",
                        "Acquisition of Source Beauty (2022): ECC Group acquired a majority stake in Source Beauty, an e-commerce platform, for $5 million. This vertical integration provides a launchpad for clients, a sales channel for its own brands, and invaluable market data for R&D.",
                        "Investment from Lorax Capital Partners: The company secured a significant minority stake, providing capital and strategic support for regional expansion."
                    ]
                }
            ]
        },
        {
            title: "4. SWOT Analysis",
            findings: [
                {
                    heading: "A formal SWOT analysis synthesizes ECC's internal capabilities and external environment:",
                    table: {
                        headers: ["Category", "Factors"],
                        rows: [
                            ["Strengths (Internal)", "40+ years of experience; 360-degree B2B service model; Extensive ISO/GMP certifications; Strong R&D capabilities (3 labs); Institutional backing (Lorax Capital Partners); Certified 'Best Place to Work' culture."],
                            ["Weaknesses (Internal)", "Potential channel conflict with B2B clients due to owning competing B2C brands (Infinity, Bobana); Dependence on the stability of the Egyptian economy and currency."],
                            ["Opportunities (External)", "Leverage Source Beauty data for data-driven R&D and product pitching; Expand in high-margin segments like nutraceuticals (supported by ISO 22000); Become the undisputed go-to partner for international brands entering MENA."],
                            ["Threats (External)", "Direct B2B competition from scaled B2C giants (LUNA, EVA) who benefit from economies of scale; Rising raw material costs and global supply chain volatility; Regulatory changes in export markets."]
                        ]
                    }
                }
            ]
        }
    ],
    conclusion: "ECC's success is a case study in strategic B2B specialization within a high-growth consumer market. The company has successfully leveraged its decades of manufacturing experience and robust quality framework to become an indispensable partner for brands in the MEA region. The key insights from the ECC case study are:\n- Strategic Vertical Integration: The acquisition of Source Beauty demonstrates a forward-thinking strategy to integrate downstream into the retail channel, providing market feedback and a competitive edge over pure-play contract manufacturers.\n- Quality as a Growth Engine: The comprehensive suite of ISO and GMP certifications is not merely a compliance requirement but a core business asset that enables ECC to serve demanding multinational clients and enter specialized segments like cosmeceuticals and nutraceuticals.\n- Regional Hub Ambition: Supported by institutional investment, ECC is actively executing a strategy to become the preferred manufacturing partner for the entire MEA region, capitalizing on Egypt's central geographic and economic position.",
    resources: [
        "https://ecc-hub.com/about-us",
        "https://www.imarcgroup.com/egypt-beauty-personal-care-market",
        "https://egybeautyafrica.com/about-market/",
        "https://ecc-hub.com/news/details/7?locale=en",
        "Competitive Analysis and Market Research (Synthesized from multiple search results)"
    ]
};

const breadfastCaseStudy = {
  title: "Breadfast Case Study: Strategic Positioning, Performance Forecasting & Machine Learning Integration",
  category: "Q-Commerce | Business Strategy | ML Integration",
  headerImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80",
  background: {
    title: "1. Background & Context",
    content: [
      "Breadfast is an Egyptian-born quick commerce company delivering groceries and essentials with a vertically integrated model — owning bakeries, fulfillment centers, and a proprietary logistics system. Founded in 2017, the company serves Cairo, Giza, Alexandria, and Mansoura, and aims to expand into eight more cities by 2024.",
      "With over 300,000 active users and nearly 1 million orders per month, Breadfast's growth aligns with Egypt's broader e-commerce boom, fueled by digital infrastructure, Vision 2030 initiatives, and shifting consumer behaviors."
    ]
  },
  challengesOpportunities: {
    title: "2. Operational Challenges & Opportunities",
    strengths: [
      "Vertically integrated logistics enable control over freshness and speed",
      "High customer retention (>80%) and 100% GMV retention after 20 months",
      "Proprietary app with 4.9/5 rating on Apple Store"
    ],
    challenges: [
      "CRM system instability (e.g., location syncing issues)",
      "Scaling a heavy infrastructure model to new cities",
      "Labor risks tied to gig economy classification",
      "Technical debt and need for backend optimization"
    ]
  },
  strategicPositioning: {
    title: "3. Strategic Positioning & Competitive Landscape",
    intro: "Breadfast's direct competitors include Talabat, Instashop, Rabbit, and Jumia (Egypt), with Talabat recently acquiring Instashop to gain a stronger foothold in grocery delivery.",
    benchmark: [
      { feature: 'Business Model', breadfast: 'Vertically Integrated', competitor: 'Marketplace / Hybrid Model' },
      { feature: 'Delivery Time', breadfast: '<60 mins (Target: 20 mins)', competitor: '~30 mins' },
      { feature: 'Fulfillment Model', breadfast: 'Own bakeries + dark stores', competitor: '3rd party vendors / riders' },
      { feature: 'Geographic Reach', breadfast: '4 cities (8 planned)', competitor: '8 MENA countries' },
      { feature: 'Active Users', breadfast: '300,000+', competitor: '6M+' },
    ],
    insight: "Positioning Insight: Breadfast trades scale for control — optimizing user retention via quality, not reach. Its challenge is converting operational discipline into scalable efficiency."
  },
  regulatoryImpact: {
    title: "4. Regulatory Impact & Labor Risks",
    intro: "Labor Law No. 14 of 2025 introduces formal recognition of gig economy roles in Egypt, mandating:",
    mandates: ["Registration in national social/health insurance", "Protections against arbitrary dismissal", "Mandated raises and severance pay"],
    implications: ["Cost increase due to benefit obligations", "Potential need to restructure contracts or offer hybrid models", "Strategic focus on retaining reliable riders to minimize churn cost"],
    recommendations: ["Run cost scenario models for freelance vs. employee classification", "Introduce automated compliance documentation workflows"]
  },
  fintechExpansion: {
    title: "5. Fintech Expansion: Breadfast Pay",
    aims: ["Provide deposit/withdrawal services", "Enable digital wallet for repeat purchases", "Boost retention through wallet-linked offers"],
    strategicValue: ["Captures more user transaction time", "Deepens platform loyalty and monetization"],
    mlOpportunity: ["Cluster users by wallet use & cart size", "Recommend personalized top-up incentives", "Forecast churn risk by payment behavior"]
  },
  mlApplications: {
    title: "6. Machine Learning Applications & Forecasting Models",
    intro: "Breadfast's CRM and satisfaction metrics offer a fertile field for predictive modeling:",
    modelDetails: [
      { key: 'Target', value: 'Customer Satisfaction Score' },
      { key: 'Inputs', value: 'CRM Likert Score, Info Sharing Score' },
      { key: 'Best Model', value: 'Linear Regression' },
      { key: 'RMSE', value: '0.19 | R²: 0.88' }
    ],
    forecastResults: ["CRM uplift has higher payoff than Info Sharing", "Combined +0.5 improvements yield a projected 4.35/5 satisfaction rating"],
    useCases: ["Forecast dashboard for operations", "CRM risk alert if weekly drops detected"]
  },
  strategicRecommendations: {
    title: "7. Strategic Recommendations",
    recommendations: [
      { main: "Stabilize CRM System", points: ["Improve app sync, route assignment", "Train ML support classifiers to route urgent tickets"] },
      { main: "Data-Driven Expansion", points: ["Use order/SLA maps to guide dark store rollout", "Optimize city launches based on margin forecasting"] },
      { main: "Leverage Breadfast Pay for Loyalty", points: ["Use wallet incentives and spend streaks", "Apply segmentation models to drive bonus offers"] },
      { main: "Prepare for Labor Formalization", points: ["Run employment cost simulations", "Build rider loyalty programs and contract templates"] },
      { main: "Embed ML Forecasting in Ops", points: ["Real-time CRM monitoring + predictive alerts", "Set up Streamlit or Power BI dashboards"] },
    ]
  },
  swot: {
    title: "8. SWOT Summary",
    strengths: ["Vertically integrated model", "High retention & loyalty", "Strong brand trust", "Expansion to Sub-Saharan"],
    weaknesses: ["Limited city coverage", "CRM tech issues", "Scaling infra is resource-heavy", "Fragmented user experience (tech)"],
    opportunities: ["Fintech for loyalty", "ML-based personalization"],
    threats: ["Rising labor costs", "Talabat's regional dominance"]
  },
  summary: {
    title: "9. Final Executive Summary",
    content: [
      "Breadfast has emerged as one of Egypt's most operationally sophisticated quick commerce players, built on a rare blend of vertical integration, customer trust, and data-driven efficiency. With a network of dark stores and in-house production, it has controlled what others outsource — and turned reliability into retention.",
      "This case study highlights how Breadfast's success is rooted in CRM quality, fresh logistics, and its expanding fintech ecosystem. Yet, it also faces real friction: scaling a vertically integrated model, regulatory labor changes, and app-level technical issues that directly impact customer satisfaction.",
      "By leveraging machine learning across CRM forecasting, city rollout modeling, fintech personalization, and labor cost simulation, Breadfast can shift from responsive operations to proactive strategy.",
      "Our findings recommend a precision-guided scale-up to new cities, immediate CRM stabilization, and embedding ML forecasting into operations — all while building Breadfast Pay into a loyalty flywheel.",
      "Breadfast is not just delivering groceries. It's delivering trust, timing, and a new model for emerging market quick commerce — one that, if optimized correctly, could scale far beyond Egypt."
    ]
  },
};

const esteeLauderCaseStudy = {
  title: "Estée Lauder: Turning a Retail Shock into a Digital Growth Engine",
  category: "Digital Transformation | Luxury Retail",
  headerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&h=750&q=80",
  context: "When COVID-19 closed department stores and beauty counters worldwide in 2020, Estée Lauder Companies (ELC) faced the loss of its historically dominant in-store, high-touch sales model. The company needed to preserve the brand’s premium, consultative experience while shifting to channels consumers could access from home.",
  challenge: "Beauty retail depends on touch and trial: color matching, texture feel, and advisor-led consultations. Lockdowns removed those instinctive experiences. ELC had to (a) replace sensory trial with digital experiences that felt trustworthy, and (b) accelerate commerce and CRM systems fast enough to capture consumers who were moving online during lockdowns.",
  strategicResponse: [
    { title: "AR & Virtual Try-On", description: "ELC rapidly invested in augmented-reality try-on tools across brands so customers could sample shades and looks virtually. This reduced one of the biggest barriers to online beauty purchases — not being able to try before you buy." },
    { title: "Virtual Consultations & Video Selling", description: "Beauty advisors moved to video consultations and live demos. These consultations recreated the counter experience and supported higher-value transactions and trust." },
    { title: "Social & Livestream Commerce", description: "ELC scaled shoppable livestreams and social selling, partnering with influencers and local creators to create authentic, shoppable moments that replaced in-store demos." },
    { title: "D2C & CRM Acceleration", description: "The company pushed Direct-to-Consumer channels (brand websites and apps), upgraded personalization and lifecycle marketing, and used behavioral data to convert trial customers into repeat buyers — increasing average order value and lifetime value." }
  ],
  resultsEvidence: [
    "Multiple industry sources and ELC reporting show triple-digit online growth in some periods and strong digital acceleration during fiscal 2020. One report cited a ~60% quarter-on-quarter increase in online sales during the early pandemic acceleration.",
    "ELC’s public filings and press releases document the company’s continued investment in digital experiences and that online channels shifted from a supplementary channel to a primary growth driver during and after lockdown periods."
  ],
  whyItWorked: [
    { title: "Technology preserved ritual", description: "AR, video consults, and livestreaming didn’t just replace functionality — they preserved the ritual of discovery and advisor trust that luxury beauty depends on." },
    { title: "Omnichannel thinking turned into omnipresence", description: "ELC didn’t abandon wholesale; it layered D2C and digital services so consumers could choose the channel without losing the brand experience." },
    { title: "Data closed the loop", description: "Digital acquisitions were immediately routed into CRM flows and re-engagement campaigns that raised retention metrics and AOV." }
  ],
  playbook: [
    "Rapidly deploy AR try-on across hero SKUs.",
    "Train and equip beauty advisors to run scheduled video consultations and short shoppable livestreams.",
    "Build localized influencer programs that feed into shoppable platforms.",
    "Rewire CRM to prioritize behaviorally triggered flows (e.g., abandoned try-on to consult, post-purchase replenishment triggers).",
    "Treat e-commerce as a product: run A/B tests on packaging imagery, try-on UX, and checkout flows to optimize conversion."
  ],
  implications: [
    { title: "Replicable Model for High-Value Brands", description: "Egyptian prestige brands or local distributors can replicate the model by integrating AR try-on, training virtual consultants, and testing livestream commerce. ELC’s playbook shows you can protect premium positioning while selling online." },
    { title: "E-commerce Creates Export Leverage", description: "Digitally-acquired customers and strong D2C performance can become evidence when negotiating retail entry into Gulf markets, proving traction and willingness to pay." },
    { title: "Cost-Efficient Social Commerce", description: "For Egyptian brands with smaller marketing budgets, micro-influencers plus shoppable livestreams can deliver high conversion and authentic storytelling without giant media spends." }
  ],
  takeaways: "The pandemic was a trigger, not the source of ELC’s digital transformation. The company already had pockets of digital investment, but COVID forced scale and integration. The lesson is to combine tech that preserves human rituals (AR, live consults) with data systems that convert and retain customers."
};


const caseStudyDetails = {
    'hero-cosmetics': heroCaseStudyDetail,
    'breadfast': breadfastCaseStudy,
    'estee-lauder': esteeLauderCaseStudy,
    'ecc-case-study': eccCaseStudyDetail,
};

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-gray-200 pb-3">{title}</h2>
    <div className="space-y-4 text-gray-700 leading-relaxed text-lg">{children}</div>
  </section>
);

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [isPrinting, setIsPrinting] = React.useState(false);
  
  if (!caseStudyId || !caseStudyDetails[caseStudyId as keyof typeof caseStudyDetails]) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-navy mb-4">Case Study Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
        <Link to="/case-studies" className="inline-block bg-soft-blue text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  const handleExportToPdf = () => {
    const { jsPDF } = (window as any).jspdf;
    const input = document.getElementById('case-study-content');
    
    if (!input || !jsPDF) {
        console.error("Element to print or jsPDF not found.");
        return;
    }

    setIsPrinting(true);

    setTimeout(() => {
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16
        });
        
        pdf.html(input, {
            callback: function (doc) {
                doc.save(`${caseStudyId}-casestudy.pdf`);
                setIsPrinting(false);
            },
            margin: [15, 15, 15, 15],
            autoPaging: 'text',
            width: 180, // A4 width is 210mm, leaving 15mm margins on each side
            windowWidth: 1000 // A wider window can help with layout
        });
    }, 100);
  };

  const study = caseStudyDetails[caseStudyId as keyof typeof caseStudyDetails];
  const isHero = caseStudyId === 'hero-cosmetics';
  const isBreadfast = caseStudyId === 'breadfast';
  const isEcc = caseStudyId === 'ecc-case-study';

  return (
    <div className="py-20 bg-light-bg animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-6">
            <Link to="/case-studies" className="inline-flex items-center text-soft-blue font-semibold hover:text-navy transition-colors duration-300">
                &larr; Back to All Case Studies
            </Link>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div id="case-study-content">
            <img src={study.headerImage} alt={study.title} className={isPrinting ? 'hidden' : "w-full h-64 object-cover"} />
            <div className="p-8 md:p-12">
              <span className="text-sm font-semibold text-soft-blue uppercase tracking-wider">{study.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mt-2 mb-4">{study.title}</h1>
              
              {isHero && <p className="text-lg italic text-gray-600 mb-12">{(study as HeroCaseStudyDetail).focus}</p>}
              
              <div className={isPrinting ? 'hidden' : 'my-8'}>
                <button
                  onClick={handleExportToPdf}
                  className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  aria-label="Export Case Study as PDF"
                >
                  <PdfIcon className="w-5 h-5" />
                  <span>Export as PDF</span>
                </button>
              </div>

              {isHero ? (
                // HERO COSMETICS RENDER
                <>
                  <Section title="Background">{(study as HeroCaseStudyDetail).background.map((p, i) => <p key={i}>{p}</p>)}</Section>
                  <Section title="The Core Problem">{(study as HeroCaseStudyDetail).coreProblem.map((p, i) => <p key={i}>{p}</p>)}</Section>
                  <Section title="Hero’s Solution">
                      <p>{(study as HeroCaseStudyDetail).solution.intro}</p>
                      <ul className="space-y-3 pt-3">
                          {(study as HeroCaseStudyDetail).solution.points.map((item, i) => <li key={i}><strong>{item.title}</strong> {item.description}</li>)}
                      </ul>
                  </Section>
                  <Section title="Key Strategic Moves">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 font-semibold text-navy bg-blue-50 p-4 rounded-lg">
                          <div className="border-b-2 border-soft-blue pb-2">Pillar</div>
                          <div className="border-b-2 border-soft-blue pb-2">Execution</div>
                          <div className="border-b-2 border-soft-blue pb-2">Impact</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                      {(study as HeroCaseStudyDetail).keyMoves.map((move, i) => (
                          <React.Fragment key={i}>
                              <div className="pt-3 font-semibold">{move.pillar}</div>
                              <div className="pt-3">{move.execution}</div>
                              <div className="pt-3">{move.impact}</div>
                          </React.Fragment>
                      ))}
                      </div>
                  </Section>
                  <Section title="Business Impact"><ul className="list-disc list-inside space-y-2">{(study as HeroCaseStudyDetail).businessImpact.map((item, i) => <li key={i}>{item}</li>)}</ul></Section>
                  <Section title="My Analytical Lens">
                      {(study as HeroCaseStudyDetail).analyticalLens.intro.map((p, i) => <p key={i}>{p}</p>)}
                      <div className="mt-8 bg-gray-50 p-6 rounded-lg border">
                          <h3 className="text-2xl font-bold text-soft-blue mb-6">{(study as HeroCaseStudyDetail).analyticalLens.egyptAnalysis.title}</h3>
                          <div className="space-y-6">
                              {(study as HeroCaseStudyDetail).analyticalLens.egyptAnalysis.points.map((point, i) => (
                                  <div key={i}>
                                      <h4 className="text-xl font-semibold text-navy mb-2">{i+1}. {point.heading}</h4>
                                      {point.subPoints && <ul className="list-disc list-inside space-y-1 mb-3 text-gray-600 pl-4">{point.subPoints.map((sp, j) => <li key={j}>{sp}</li>)}</ul>}
                                      {point.details.map((d, k) => <p key={k} className="mb-2">{d}</p>)}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </Section>
                  <Section title="Extracted Framework for Egyptian Context">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 font-semibold text-navy bg-blue-50 p-4 rounded-t-lg"><div>Stage</div><div>Local Adaptation</div></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border p-4 rounded-b-lg text-sm">
                          {(study as HeroCaseStudyDetail).analyticalLens.framework.map((item, i) => (
                              <React.Fragment key={i}><div className="font-semibold">{item.stage}</div><div>{item.adaptation}</div></React.Fragment>
                          ))}
                      </div>
                  </Section>
                  <Section title="Takeaway"><div className="border-l-4 border-soft-blue pl-6 italic space-y-4">{(study as HeroCaseStudyDetail).takeaway.map((p, i) => <p key={i}>{p}</p>)}</div></Section>
                </>
              ) : isBreadfast ? (
                // BREADFAST RENDER
                <>
                  <Section title={breadfastCaseStudy.background.title}>{breadfastCaseStudy.background.content.map((p, i) => <p key={i}>{p}</p>)}</Section>
                  <Section title={breadfastCaseStudy.challengesOpportunities.title}>
                      <h3 className="text-xl font-semibold text-navy mb-3">Strengths</h3>
                      <ul className="list-disc list-inside space-y-2 mb-6">{breadfastCaseStudy.challengesOpportunities.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
                      <h3 className="text-xl font-semibold text-navy mb-3">Challenges</h3>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.challengesOpportunities.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
                  </Section>
                  <Section title={breadfastCaseStudy.strategicPositioning.title}>
                      <p>{breadfastCaseStudy.strategicPositioning.intro}</p>
                      <h4 className="text-lg font-semibold text-navy mt-6 mb-3">Competitive Benchmark Summary:</h4>
                      <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm border-collapse">
                              <thead>
                                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                                      <th className="p-3 font-semibold text-navy text-left">Feature</th>
                                      <th className="p-3 font-semibold text-navy text-left">Breadfast</th>
                                      <th className="p-3 font-semibold text-navy text-left">Talabat/Instashop</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {breadfastCaseStudy.strategicPositioning.benchmark.map((row, i) => (
                                      <tr key={i} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                          <td className="p-3 text-gray-700 font-medium">{row.feature}</td>
                                          <td className="p-3 text-gray-700">{row.breadfast}</td>
                                          <td className="p-3 text-gray-700">{row.competitor}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                      <p className="mt-6 italic bg-gray-50 p-4 rounded-md border-l-4 border-soft-blue">{breadfastCaseStudy.strategicPositioning.insight}</p>
                  </Section>
                  <Section title={breadfastCaseStudy.regulatoryImpact.title}>
                      <p>{breadfastCaseStudy.regulatoryImpact.intro}</p>
                      <ul className="list-disc list-inside space-y-2 my-4 pl-4">{breadfastCaseStudy.regulatoryImpact.mandates.map((m, i) => <li key={i}>{m}</li>)}</ul>
                      <h4 className="text-lg font-semibold text-navy mt-6 mb-3">Implications for Breadfast:</h4>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.regulatoryImpact.implications.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      <h4 className="text-lg font-semibold text-navy mt-6 mb-3">Recommended Actions:</h4>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.regulatoryImpact.recommendations.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </Section>
                  <Section title={breadfastCaseStudy.fintechExpansion.title}>
                      <h4 className="text-lg font-semibold text-navy mb-3">Aims:</h4>
                      <ul className="list-disc list-inside space-y-2 mb-6">{breadfastCaseStudy.fintechExpansion.aims.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      <h4 className="text-lg font-semibold text-navy mb-3">Strategic Value:</h4>
                      <ul className="list-disc list-inside space-y-2 mb-6">{breadfastCaseStudy.fintechExpansion.strategicValue.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      <h4 className="text-lg font-semibold text-navy mb-3">ML Opportunity:</h4>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.fintechExpansion.mlOpportunity.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </Section>
                   <Section title={breadfastCaseStudy.mlApplications.title}>
                      <p>{breadfastCaseStudy.mlApplications.intro}</p>
                      <ul className="space-y-2 my-4 bg-gray-50 p-4 rounded-md border">
                          {breadfastCaseStudy.mlApplications.modelDetails.map((item, i) => <li key={i}><span className="font-semibold text-navy">{item.key}:</span> {item.value}</li>)}
                      </ul>
                      <h4 className="text-lg font-semibold text-navy mt-6 mb-3">What-If Forecast Results:</h4>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.mlApplications.forecastResults.map((item, i) => <li key={i}>{item}</li>)}</ul>
                       <h4 className="text-lg font-semibold text-navy mt-6 mb-3">Use cases:</h4>
                      <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.mlApplications.useCases.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </Section>
                  <Section title={breadfastCaseStudy.strategicRecommendations.title}>
                      {breadfastCaseStudy.strategicRecommendations.recommendations.map((rec, i) => (
                          <div key={i} className="mb-4">
                              <h4 className="text-xl font-semibold text-navy">{i+1}. {rec.main}</h4>
                              <ul className="list-disc list-inside pl-6 space-y-1 mt-2 text-gray-600">
                                  {rec.points.map((p, j) => <li key={j}>{p}</li>)}
                              </ul>
                          </div>
                      ))}
                  </Section>
                  <Section title={breadfastCaseStudy.swot.title}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="text-xl font-bold text-green-800 mb-3">Strengths</h4>
                              <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.swot.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
                          </div>
                           <div className="bg-red-50 p-4 rounded-lg">
                              <h4 className="text-xl font-bold text-red-800 mb-3">Weaknesses</h4>
                              <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.swot.weaknesses.map((w, i) => <li key={i}>{w}</li>)}</ul>
                          </div>
                           <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="text-xl font-bold text-blue-800 mb-3">Opportunities</h4>
                              <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.swot.opportunities.map((o, i) => <li key={i}>{o}</li>)}</ul>
                          </div>
                           <div className="bg-yellow-50 p-4 rounded-lg">
                              <h4 className="text-xl font-bold text-yellow-800 mb-3">Threats</h4>
                              <ul className="list-disc list-inside space-y-2">{breadfastCaseStudy.swot.threats.map((t, i) => <li key={i}>{t}</li>)}</ul>
                          </div>
                      </div>
                  </Section>
                  <Section title={breadfastCaseStudy.summary.title}>{breadfastCaseStudy.summary.content.map((p, i) => <p key={i}>{p}</p>)}</Section>
                </>
              ) : isEcc ? (
                 <>
                    <Section title="Introduction">
                        {(study as EccCaseStudyDetail).introduction.map((p, i) => <p key={i}>{p}</p>)}
                    </Section>

                    {(study as EccCaseStudyDetail).sections.map((section, index) => (
                         <Section title={section.title} key={index}>
                            {section.findings.map((finding, findIndex) => (
                                <div key={findIndex} className="mb-4">
                                    <h4 className="text-xl font-semibold text-navy mb-2">{finding.heading}</h4>
                                    {finding.details && finding.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="mb-2">{detail}</p>
                                    ))}
                                    {finding.subPoints && (
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            {finding.subPoints.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {finding.table && (
                                        <div className="overflow-x-auto mt-4">
                                            <table className="w-full text-left text-sm border-collapse">
                                                <thead>
                                                    <tr className="border-b-2 border-gray-300 bg-gray-100">
                                                        {finding.table.headers.map((header, headerIndex) => {
                                                            const isNumeric = finding.table.numericColumns?.includes(headerIndex);
                                                            const headerClasses = `p-3 font-semibold text-navy text-left ${isNumeric ? 'text-right' : ''}`;
                                                            return <th key={header} className={headerClasses}>{header}</th>;
                                                        })}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {finding.table.rows.map((row, rowIndex) => (
                                                        <tr key={rowIndex} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                                            {row.map((cell, cellIndex) => {
                                                                const isNumeric = finding.table.numericColumns?.includes(cellIndex);
                                                                const cellClasses = `p-3 text-gray-700 ${isNumeric ? 'text-right' : ''}`;
                                                                return <td key={cellIndex} className={cellClasses}>{cell}</td>;
                                                            })}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Section>
                    ))}

                    <Section title="Conclusion">
                        <div className="border-l-4 border-soft-blue pl-6 italic space-y-4">
                            {(study as EccCaseStudyDetail).conclusion.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </Section>
                    
                    {(study as EccCaseStudyDetail).resources && (
                         <Section title="References">
                            <ul className="text-sm space-y-1 mt-2">
                                {(study as EccCaseStudyDetail).resources.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-soft-blue hover:underline break-all">
                                            {`[${linkIndex+1}] ${link}`}
                                            <ExternalLinkIcon className={`w-4 h-4 inline-block ml-1 ${isPrinting ? 'hidden' : ''}`} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    )}
                 </>
              ) : (
                  // ESTEE LAUDER RENDER
                  <>
                      <Section title="Context"><p>{esteeLauderCaseStudy.context}</p></Section>
                      <Section title="The Challenge"><p>{esteeLauderCaseStudy.challenge}</p></Section>
                      <Section title="Strategic Response">
                          <div className="space-y-6">
                              {esteeLauderCaseStudy.strategicResponse.map((item, i) => (
                                  <div key={i}>
                                      <h4 className="text-xl font-semibold text-navy mb-1">{item.title}</h4>
                                      <p>{item.description}</p>
                                  </div>
                              ))}
                          </div>
                      </Section>
                       <Section title="Results & Evidence">
                          <ul className="list-disc list-inside space-y-3">{esteeLauderCaseStudy.resultsEvidence.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      </Section>
                      <Section title="Why This Worked">
                           <div className="space-y-6">
                              {esteeLauderCaseStudy.whyItWorked.map((item, i) => (
                                  <div key={i}>
                                      <h4 className="text-xl font-semibold text-navy mb-1">{item.title}</h4>
                                      <p>{item.description}</p>
                                  </div>
                              ))}
                          </div>
                      </Section>
                      <Section title="Tactical Playbook">
                          <ul className="list-decimal list-inside space-y-3 pl-4">{esteeLauderCaseStudy.playbook.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      </Section>
                      <Section title="Implications for Egypt">
                          <div className="space-y-6">
                             {esteeLauderCaseStudy.implications.map((item, i) => (
                                 <div key={i}>
                                     <h4 className="text-xl font-semibold text-navy mb-1">{item.title}</h4>
                                     <p>{item.description}</p>
                                 </div>
                             ))}
                         </div>
                      </Section>
                      <Section title="Key Takeaways">
                          <div className="border-l-4 border-soft-blue pl-6 italic">
                              <p>{esteeLauderCaseStudy.takeaways}</p>
                          </div>
                      </Section>
                  </>
              )}
            </div>
          </div>
          <div className="p-8 md:p-12 text-center border-t">
              <Link to="/case-studies" className="inline-block text-soft-blue font-semibold hover:text-blue-600 transition-colors duration-300">
                &larr; Back to All Case Studies
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;