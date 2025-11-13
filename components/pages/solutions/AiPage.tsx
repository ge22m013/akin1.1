
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { BeakerIcon, RocketLaunchIcon, SparklesIcon, CogIcon, MagnifyingGlassIcon, BoltIcon } from '@heroicons/react/24/outline';

const AiPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Artificial Intelligence"
                title="Operational AI. Not Experimental AI."
                subtitle="The conversation about AI's potential is over. The challenge is making it work in the real world. We design, build, and deploy mission-critical AI systems that drive tangible business outcomes."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <section>
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">Beyond the Proof-of-Concept</h2>
                            <div className="mt-6 prose prose-lg max-w-none text-akin-text-light">
                                <p>While others are stuck in the lab, we are deploying live, operational AI. Our engineering-first approach ensures that from day one, we are building systems designed for the complexities of your production environment. We specialize in moving AI from a promising experiment into a robust, mission-critical component of your daily operations.</p>
                            </div>
                        </section>
                        
                        <section className="mt-16">
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Approach to AI</h2>
                             <div className="mt-8 space-y-8">
                                <div className="flex items-start gap-6">
                                    <RocketLaunchIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Prototype to Production</h3>
                                        <p className="mt-1 text-akin-text-light">We build for scale, reliability, and continuous improvement, ensuring your AI initiatives deliver lasting value.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <SparklesIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Ontology-Grounded AI</h3>
                                        <p className="mt-1 text-akin-text-light">Our solutions are grounded in a Unified Ontology—a digital twin of your business. This provides the critical context needed for AI to reason accurately and eliminate hallucinations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <BeakerIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Bespoke Model Development</h3>
                                        <p className="mt-1 text-akin-text-light">We don't use one-size-fits-all models. We design and train custom AI/ML models on your data to solve your unique operational challenges with high precision.</p>
                                    </div>
                                </div>
                             </div>
                        </section>
                    </div>
                    <aside className="lg:col-span-1 space-y-8 lg:sticky top-28 self-start">
                        <Card>
                             <h3 className="text-xl font-bold text-akin-text-dark">Example Use Cases</h3>
                             <ul className="mt-4 space-y-4 text-akin-text-light">
                                <li className="flex gap-3"><MagnifyingGlassIcon className="h-6 w-6 text-akin-cyan flex-shrink-0" /><span>Enterprise Cognitive Search</span></li>
                                <li className="flex gap-3"><BoltIcon className="h-6 w-6 text-akin-cyan flex-shrink-0" /><span>Autonomous Operations</span></li>
                                <li className="flex gap-3"><CogIcon className="h-6 w-6 text-akin-cyan flex-shrink-0" /><span>Dynamic & Interactive Reporting</span></li>
                             </ul>
                        </Card>
                         <Card>
                             <h3 className="text-xl font-bold text-akin-text-dark">Generative AI, Grounded in Reality</h3>
                             <p className="mt-2 text-akin-text-light">Our approach moves beyond generic chatbots. We build intelligent agents that reason over your proprietary, real-time operational data to provide accurate, secure, and context-aware answers that drive your business forward.</p>
                        </Card>
                    </aside>
                </div>
            </main>

            <CallToActionSection
                title="Ready to Operationalize Your AI?"
                subtitle="Let's move your AI initiatives from the whiteboard to the real world. Schedule a call with our engineers to discuss how we can build a solution that delivers lasting value."
                buttonText="Talk to an AI Engineer"
            />
        </div>
    );
};

export default AiPage;