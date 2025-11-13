
export interface SearchIndexItem {
  path: string;
  title: string;
  keywords: string;
  breadcrumb: string;
}

export const searchIndex: SearchIndexItem[] = [
  // Core Pages
  { path: '/', title: 'Home', keywords: 'akin, home, ai, operating system, intelligent', breadcrumb: 'Home' },
  { path: '/platform', title: 'Akin AI Platform', keywords: 'platform, ontology, architecture, mission-critical, mobility', breadcrumb: 'Platform' },
  { path: '/industries', title: 'Industries', keywords: 'industries, retail, transport, energy, finance, health, public sector', breadcrumb: 'Industries' },
  { path: '/solutions', title: 'Solutions', keywords: 'solutions, ai, digital engineering, cloud, experience, commerce, supply chain', breadcrumb: 'Solutions' },
  { path: '/velocity-approach', title: 'VELOCITY Approach', keywords: 'velocity, methodology, process, vision, engineering, logic, operationalize', breadcrumb: 'How We Do It' },
  { path: '/client-stories', title: 'Client Stories', keywords: 'proof, case studies, success, results', breadcrumb: 'Client Stories' },
  { path: '/insights', title: 'Insights Hub', keywords: 'insights, blog, reports, whitepapers, thrive index', breadcrumb: 'Our Thinking' },
  { path: '/about', title: 'About Akin', keywords: 'about, mission, purpose, values, team', breadcrumb: 'Who We Are' },
  { path: '/careers', title: 'Careers', keywords: 'careers, jobs, hiring, roles, engineering', breadcrumb: 'Who We Are' },
  { path: '/contact', title: 'Contact Us', keywords: 'contact, email, phone, address, inquiry', breadcrumb: 'Contact' },
  { path: '/faq', title: 'FAQ', keywords: 'faq, questions, answers, support', breadcrumb: 'How We Do It' },
  { path: '/generative-ai', title: 'Generative AI', keywords: 'generative ai, genai, llm, large language models, agents', breadcrumb: 'Platform' },
  { path: '/inclusion', title: 'Inclusion & Diversity', keywords: 'inclusion, diversity, culture, deib', breadcrumb: 'Who We Are' },
  { path: '/sustainability', title: 'Sustainability', keywords: 'sustainability, esg, environment, impact', breadcrumb: 'Who We Are' },
  { path: '/ai-for-good', title: 'AI for Good', keywords: 'ai for good, social impact, non-profit', breadcrumb: 'Who We Are' },
  { path: '/privacy-policy', title: 'Privacy Policy', keywords: 'privacy, data, policy, legal', breadcrumb: 'Legal' },
  { path: '/responsible-ai', title: 'Responsible AI & Trust', keywords: 'responsible ai, ethics, trust, governance, fairness', breadcrumb: 'Who We Are' },
  { path: '/sitemap', title: 'Sitemap', keywords: 'sitemap, navigation, pages, structure', breadcrumb: 'Sitemap' },
  // New Pages
  { path: '/leadership', title: 'Leadership', keywords: 'leadership, team, executives, ceo, cto', breadcrumb: 'Who We Are' },
  { path: '/partners', title: 'Partners', keywords: 'partners, ecosystem, aws, gcp, azure, nvidia', breadcrumb: 'Platform' },
  { path: '/technology', title: 'Technology Stack', keywords: 'technology, stack, tech, architecture, react, python', breadcrumb: 'Platform' },
  { path: '/values', title: 'Our Values', keywords: 'values, principles, culture, excellence', breadcrumb: 'Who We Are' },
  { path: '/methodology', title: 'Our Methodology', keywords: 'methodology, philosophy, engineering, ontology-first', breadcrumb: 'How We Do It' },
  // Industries
  { path: '/industries/retail-consumer-products', title: 'Retail & Consumer Products', keywords: 'retail, consumer, products, commerce, forecasting', breadcrumb: 'Industries' },
  { path: '/industries/transportation-mobility', title: 'Transportation & Mobility', keywords: 'transport, mobility, logistics, fleet, route optimization', breadcrumb: 'Industries' },
  { path: '/industries/energy-commodities', title: 'Energy & Commodities', keywords: 'energy, commodities, utility, grid, trading', breadcrumb: 'Industries' },
  { path: '/industries/financial-services', title: 'Financial Services', keywords: 'finance, banking, insurance, risk, fraud', breadcrumb: 'Industries' },
  { path: '/industries/health-life-sciences', title: 'Health & Life Sciences', keywords: 'health, life sciences, pharma, clinical trials', breadcrumb: 'Industries' },
  { path: '/industries/public-sector', title: 'Public Sector', keywords: 'public sector, government, civic, services', breadcrumb: 'Industries' },
  // Solutions
  { path: '/solutions/artificial-intelligence', title: 'Artificial Intelligence', keywords: 'ai, machine learning, ml, models, operational', breadcrumb: 'Solutions' },
  { path: '/solutions/digital-engineering', title: 'Digital Engineering', keywords: 'digital engineering, software, platforms, architecture', breadcrumb: 'Solutions' },
  { path: '/solutions/cloud-infrastructure', title: 'Cloud & Infrastructure', keywords: 'cloud, infrastructure, aws, gcp, azure, devops, mlops', breadcrumb: 'Solutions' },
  { path: '/solutions/experience-transformation', title: 'Experience Transformation', keywords: 'experience, ux, ui, design, customer', breadcrumb: 'Solutions' },
  { path: '/solutions/digital-commerce', title: 'Digital Commerce', keywords: 'commerce, e-commerce, b2b, b2c, inventory', breadcrumb: 'Solutions' },
  { path: '/solutions/supply-chain', title: 'Supply Chain', keywords: 'supply chain, logistics, visibility, forecasting', breadcrumb: 'Solutions' },
  // Velocity
  { path: '/velocity-approach/vision', title: 'Vision & Strategy', keywords: 'vision, strategy, blueprint, planning', breadcrumb: 'How We Do It > VELOCITY' },
  { path: '/velocity-approach/engineering', title: 'Engineering & Integration', keywords: 'engineering, integration, data pipelines, ontology', breadcrumb: 'How We Do It > VELOCITY' },
  { path: '/velocity-approach/logic', title: 'Logic & Modeling', keywords: 'logic, modeling, data science, ml, training', breadcrumb: 'How We Do It > VELOCITY' },
  { path: '/velocity-approach/operationalize', title: 'Operationalize & Deploy', keywords: 'operationalize, deploy, mlops, production', breadcrumb: 'How We Do It > VELOCITY' },
  { path: '/velocity-approach/collaborate-evolve', title: 'Collaborate & Evolve', keywords: 'collaborate, evolve, partnership, continuous', breadcrumb: 'How We Do It > VELOCITY' },
  // Insights
  { path: '/insights/thrive-index', title: 'The Thrive Index', keywords: 'thrive index, report, scoring, maturity', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/state-of-ai-supply-chain', title: 'State of AI in Supply Chain', keywords: 'supply chain, report, state of, trends', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/digital-utility-transformation', title: 'Digital Utility Transformation', keywords: 'utility, energy, transformation, analysis', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/ai-in-financial-services', title: 'AI in Financial Services', keywords: 'finance, viewpoint, trends, architecture', breadcrumb: 'Our Thinking > Insights' },
];
