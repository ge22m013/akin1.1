
import React, { useState } from 'react';
import Hero from '../ui/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import CallToActionSection from '../ui/CallToActionSection';

const faqData = [
  {
    id: 'q1',
    question: 'What exactly is a bespoke "AI Operating System"?',
    answer: "Think of it as the central nervous system for your business. It's not an off-the-shelf product, but a custom-built platform that unifies all your disparate data sources (like ERPs, factory sensors, logistics feeds) into a single, intelligent layer. This 'digital twin' of your organization allows our bespoke AI models to understand context, make predictions, and drive operational decisions in real-time. It moves AI from a siloed experiment to the core of how you operate."
  },
  {
    id: 'q2',
    question: 'How is Akin different from a typical AI consultancy?',
    answer: "We do not consult, we <strong>build</strong>. Traditional consultants deliver slide decks and strategic roadmaps. We deliver operational code. Our team is composed of engineers and data scientists, not just business analysts. We partner with you from initial vision through to live, mission-critical deployment and continuous evolution. Our deliverable is a tangible, operational asset, not a recommendation."
  },
  {
    id: 'q3',
    question: 'What is a "Unified Ontology" and why is it important?',
    answer: "An ontology is the heart of our platform. It's a dynamic, semantic model of your entire business—your factories, equipment, supply chains, customers, and their relationships. AI models cannot operate on raw data in tables; they need context. The ontology provides this context, creating a single source of truth that allows AI to reason about your business in the same way your best people do. It's the critical layer that turns inert data into an intelligent, actionable asset."
  },
  {
    id: 'q4',
    question: 'How long does a typical engagement take?',
    answer: 'This depends on the complexity of the challenge, but our "VELOCITY" methodology is designed for speed and iterative value. We focus on identifying a high-value "thin slice" to tackle first, often delivering an initial operational capability within 3-6 months. From there, the platform is designed to evolve, with new capabilities and integrations being rolled out continuously.'
  },
  {
    id: 'q5',
    question: 'What industries do you specialize in?',
    answer: "Our platform's architecture is industry-agnostic, but our expertise is deepest in complex industrial environments. We have extensive experience in manufacturing, logistics & supply chain, energy & utilities, and finance—sectors where siloed data and operational complexity present the biggest challenges and opportunities for AI-driven transformation."
  },
  {
    id: 'q6',
    question: 'How do you handle data security and governance?',
    answer: "Security is not an afterthought; it's designed into the core of every platform we build. We implement state-of-the-art, end-to-end encryption for data both in transit and at rest. Our platforms are designed in alignment with global frameworks like the EU AI Act and ISO/IEC 42001, providing robust data lineage, access controls, and audit trails to ensure your data is secure and your operations are compliant."
  }
];

const FAQPage: React.FC = () => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const expandAll = () => {
        const allOpen = faqData.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {} as Record<string, boolean>);
        setOpenItems(allOpen);
    };

    const collapseAll = () => {
        setOpenItems({});
    };

    return (
        <div>
            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our platform, methodology, and how we deliver real-world AI solutions."
            />

            <main className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end gap-4 mb-8">
                    <button onClick={expandAll} className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-100 text-akin-text-dark hover:bg-gray-200 transition-colors">Expand All</button>
                    <button onClick={collapseAll} className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-100 text-akin-text-dark hover:bg-gray-200 transition-colors">Collapse All</button>
                </div>
                <div className="space-y-4">
                    {faqData.map(item => (
                        <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full flex justify-between items-center p-6 text-left"
                                aria-expanded={!!openItems[item.id]}
                                aria-controls={`faq-answer-${item.id}`}
                            >
                                <h3 className="text-lg font-semibold text-akin-text-dark">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: openItems[item.id] ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDownIcon className="h-6 w-6 text-akin-text-light" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openItems[item.id] && (
                                    <motion.div
                                        id={`faq-answer-${item.id}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        // FIX: Add 'as const' to 'ease' property to satisfy framer-motion's Easing type.
                                        transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                                    >
                                        <div className="p-6 pt-0 text-akin-text-light" dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </main>
            <CallToActionSection
                title="Have More Specific Questions?"
                subtitle="We're ready to dive deep into your unique challenges and requirements. Schedule a call with one of our engineers for a no-obligation technical discussion."
                buttonText="Schedule a Technical Call"
            />
        </div>
    );
};

export default FAQPage;