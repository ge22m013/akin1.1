
import React, { useState, useMemo } from 'react';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
import { Content } from '../../App';
import { motion, AnimatePresence } from 'framer-motion';
import InsightCard from '../ui/InsightCard';
import CallToActionSection from '../ui/CallToActionSection';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


const allInsights: (Content & { type: string, topic: string, isFeatured?: boolean, href?: string })[] = [
  { id: 'thrive-index', title: "The Akin Thrive Index", type: "Report", topic: "AI Maturity", isFeatured: true, href: "/insights/thrive-index", category: 'Signature Content', content: '<p>Our new signature content asset, The Thrive Index, is an opinionated guide to the industry, benchmarking how companies are progressing on their journey to thrive alongside technological advancement. It provides a comprehensive scoring framework across six foundational pillars of business readiness.</p>' },
  { id: 'llm-fail', title: "3 Ways LLMs Fail in Production (and How to Fix Them)", type: "Blog", topic: "Generative AI", category: 'Featured Blog', content: `
    <p>Large Language Models (LLMs) show incredible promise in prototypes, but moving them to a live, operational environment reveals a unique set of challenges. This practical guide explores the three most common failure points and provides actionable engineering solutions to overcome them.</p>
    <h3>1. Context Limitations & Hallucinations</h3>
    <p>LLMs have a finite context window. When asked about information outside their training data or recent conversation history, they can 'hallucinate' or provide incorrect answers. We demonstrate how to implement a Retrieval-Augmented Generation (RAG) pipeline, connecting your LLM to a real-time, proprietary knowledge base (like a Unified Ontology) to provide grounded, accurate, and contextually-aware responses.</p>
    <h3>2. Data & Concept Drift</h3>
    <p>The world changes, but a statically trained model does not. Models trained on historical data degrade in performance over time as real-world data distributions and concepts shift. We outline a robust MLOps framework for continuous monitoring, automated drift detection, and streamlined retraining pipelines to ensure your models remain accurate and relevant.</p>
    <h3>3. Scaling & Integration Challenges</h3>
    <p>An LLM in a Jupyter notebook is not an enterprise-grade service. We detail the architectural patterns required for production deployment, including API gateway design, load balancing for handling concurrent requests, security best practices for data in transit, and integration strategies for embedding the LLM into your existing operational workflows.</p>
    ` },
  { id: 'data-lake', title: "Beyond the Data Lake: The Case for an Operational Ontology", type: "Whitepaper", topic: "Data Ontology", category: 'Whitepaper', content: `
    <p>For years, the data lake has been the centerpiece of enterprise data strategy—a vast repository for raw data. However, data lakes have a fundamental flaw: they store data without context, making it inert and difficult to operationalize. This whitepaper argues for a paradigm shift: moving beyond passive storage to an active, intelligent data layer.</p>
    <h3>The Problem with 'Dumb' Data</h3>
    <p>Data lakes often become data swamps. Without a semantic layer that describes what the data is, how it relates to other data, and how it maps to real-world business objects, its value remains locked. Analytics are slow, AI models struggle for context, and a unified view of the business is impossible.</p>
    <h3>The Solution: An Operational Ontology</h3>
    <p>An Operational Ontology is a living, digital twin of your entire organization. It maps your siloed data sources (ERPs, data lakes, SCADA systems) to a common, logical model of your business—your factories, supply chains, customers, and equipment. It's the 'connective tissue' that gives your data meaning and makes it actionable.</p>
    <h3>Benefits of the Ontological Approach:</h3>
    <ul>
        <li><strong>Data in Context:</strong> AI models can now query and reason over data based on its business context, not just its location in a table.</li>
        <li><strong>Increased Agility:</strong> Easily add new data sources without breaking existing analytics or models.</li>
        <li><strong>Single Source of Truth:</strong> Create a reliable, unified view of your operations for better, faster decision-making.</li>
    </ul>
    ` },
  { id: 'operational-genai', title: "Beyond the Chatbot: Operationalizing Generative AI", type: "Whitepaper", topic: "Generative AI", category: 'Whitepaper', content: `
    <p>While public-facing chatbots have captured the world's imagination, the true enterprise value of Generative AI lies in its operationalization. This means moving beyond simple Q&A to building intelligent agents that can reason, plan, and execute complex tasks within your business context.</p>
    <h3>The Power of Ontology-Grounded Agents</h3>
    <p>The key to unlocking this potential is grounding LLMs in your Unified Ontology. This provides the real-time, proprietary context needed to eliminate hallucinations and enable true reasoning. Instead of asking a generic question, your teams can now ask operational questions like:</p>
    <blockquote>"What's the root cause of the current delay in production line 3, and what's the projected impact on our top 5 customer orders based on current inventory and logistics data?"</blockquote>
    <p>An ontology-grounded agent can parse this query, retrieve the relevant data from your unified operational model, perform the analysis, and provide a clear, actionable answer. This is the future of operational intelligence.</p>
    ` },
  { id: 'supply-chain-2025', title: "2025 State of AI in Supply Chain", type: "Report", topic: "Supply Chain", href: "/insights/state-of-ai-supply-chain", category: 'Report', content: `
    <p>This in-depth report, based on a survey of 500 supply chain leaders from Fortune 1000 companies, benchmarks the adoption, challenges, and future trends of AI in logistics and supply chain management.</p>
    <h3>Key Findings:</h3>
    <ul>
        <li><strong>AI Adoption is Accelerating:</strong> 72% of organizations have moved beyond pilot projects and have at least one AI application in production within their supply chain, up from 45% in our 2023 report.</li>
        <li><strong>The Biggest Barrier Remains Data:</strong> 68% of respondents cited 'data fragmentation and quality' as the primary obstacle to scaling AI initiatives.</li>
    </ul>
    ` },
    { id: 'digital-utility', title: "Analysis: The Digital Utility Transformation", type: "Analysis", topic: "Energy", href: "/insights/digital-utility-transformation", category: 'Analysis', content: `<p>How AI and unified data are creating a more resilient, efficient, and profitable energy system. This analysis explores the core challenges facing the energy sector and outlines the capabilities unlocked by a bespoke AI Operating System, from grid load forecasting to predictive asset maintenance.</p>` },
    { id: 'ai-finance-viewpoint', title: "Viewpoint: AI in Financial Services", type: "Viewpoint", topic: "Finance", href: "/insights/ai-in-financial-services", category: 'Viewpoint', content: `<p>Our perspective on moving beyond legacy systems to architect a resilient, intelligent, and secure financial future. We argue that the industry's primary challenge is architectural, and the future belongs to institutions that rebuild around a unified, intelligent data core.</p>` },
  { id: 'roi-ontology', title: "The ROI of a Unified Data Ontology: A B2B Framework", type: "Whitepaper", topic: "AI Maturity", category: 'Whitepaper', content: `
    <p>Justifying investment in foundational data architecture can be challenging. Unlike a specific application, the benefits of a Unified Data Ontology are systemic and cross-functional. This whitepaper provides a comprehensive, step-by-step framework for building a compelling business case and calculating the tangible ROI of this strategic investment.</p>
    <h3>Quantifying the Value:</h3>
    <p>We break down the ROI calculation into three core areas, providing formulas and industry benchmarks for each:</p>
    <ol>
        <li><strong>Operational Efficiency Gains</strong></li>
        <li><strong>Improved Decision Velocity & Quality</strong></li>
        <li><strong>Enablement of New Capabilities</strong></li>
    </ol>
    ` },
];


const topics = ["All", "AI Maturity", "Data Ontology", "Generative AI", "Supply Chain", "Energy", "Finance"];
const types = ["All", "Blog", "Report", "Whitepaper", "Analysis", "Viewpoint"];

interface InsightsPageProps {
  onInsightClick: (insight: Content) => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onInsightClick }) => {
    const [activeTopic, setActiveTopic] = useState('All');
    const [activeType, setActiveType] = useState('All');

    const filteredInsights = useMemo(() => {
        return allInsights.filter(insight => {
            if (insight.isFeatured) return false;
            const topicMatch = activeTopic === 'All' || insight.topic === activeTopic;
            const typeMatch = activeType === 'All' || insight.type === activeType;
            return topicMatch && typeMatch;
        });
    }, [activeTopic, activeType]);
    
    const featuredInsight = allInsights.find(i => i.isFeatured);
    
    const FilterButton: React.FC<{ filter: string, activeFilter: string, setFilter: (f: string) => void }> = ({ filter, activeFilter, setFilter }) => (
        <button
            onClick={() => setFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === filter ? 'bg-akin-text-dark text-white' : 'bg-gray-100 text-akin-text-dark hover:bg-gray-200'}`}
        >
            {filter}
        </button>
    );

    return (
        <div>
            <Hero
                title="Akin Insights Hub"
                subtitle="A central hub for all thought leadership, designed to build authority, drive top-of-funnel SEO, and capture mid-funnel leads."
            />
            
            {featuredInsight && (
                <section className="py-20 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <button
                            onClick={() => onInsightClick(featuredInsight)}
                            className="cursor-pointer group relative rounded-lg shadow-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan"
                            aria-label={`View preview for ${featuredInsight.title}`}
                        >
                            <img src="/images/insights/thrive-index.jpg" alt="Thrive Index" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white">
                                    <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
                                    <p className="mt-2 font-bold text-lg">View Preview</p>
                                </div>
                            </div>
                        </button>
                        <div>
                            <p className="text-base font-semibold text-akin-cyan uppercase tracking-wide">{featuredInsight.category}</p>
                            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-akin-text-dark tracking-tight">{featuredInsight.title}</h2>
                            <div className="mt-4 text-lg text-akin-text-light" dangerouslySetInnerHTML={{ __html: featuredInsight.content }} />
                            <Button to={featuredInsight.href || '#'} className="mt-8">Explore the Index</Button>
                        </div>
                    </div>
                </section>
            )}

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Filter by Topic</h3>
                        <div className="flex flex-wrap gap-2">
                            {topics.map(topic => <FilterButton key={topic} filter={topic} activeFilter={activeTopic} setFilter={setActiveTopic} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Filter by Content Type</h3>
                        <div className="flex flex-wrap gap-2">
                            {types.map(type => <FilterButton key={type} filter={type} activeFilter={activeType} setFilter={setActiveType} />)}
                        </div>
                    </div>
                </div>

                 <motion.div layout className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {filteredInsights.length > 0 ? (
                            filteredInsights.map(insight => (
                                <InsightCard key={insight.id} insight={insight} onInsightClick={onInsightClick} />
                            ))
                        ) : (
                            <motion.p 
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="md:col-span-2 lg:col-span-3 text-center text-akin-text-light"
                            >
                                No insights match the selected filters.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>
            <CallToActionSection
                title="From Insight to Impact."
                subtitle="Our insights are born from real-world engineering. Let's discuss how these concepts can be applied to solve your unique operational challenges."
                buttonText="Apply These Insights"
            />
        </div>
    );
};

export default InsightsPage;
