
import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import { Content } from '../../App';
import CallToActionSection from '../ui/CallToActionSection';
import { CpuChipIcon, ShareIcon, BeakerIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const pillars = [
    {
        id: 'ai-first',
        name: 'AI-First Architecture',
        description: 'Intelligence is the foundation. We build with a cognitive core, using machine learning to provide predictive insights so your business can anticipate.',
        icon: <svg className="h-12 w-12 mb-4 text-akin-cyan" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" fill="none"><path d="M32.33,55.77S43.67,56,43.67,43.67V36.33S43.67,25,32.33,25,21,25,21,36.33v7.33S21,56,32.33,55.77Z"/><path d="M21,36.33V28.17a11.17,11.17,0,0,1,22.33,0v8.17"/><line x1="26.5" y1="50.17" x2="26.5" y2="51.33"/><line x1="37.5" y1="50.17" x2="37.5" y2="51.33"/><line x1="32" y1="46.5" x2="32" y2="55.83"/><line x1="32" y1="25" x2="32" y2="18.67"/><line x1="21" y1="36.33" x2="16.5" y2="39.83"/><line x1="43.67" y1="36.33" x2="48.17" y2="39.83"/><line x1="21" y1="28.17" x2="14.67" y2="26.33"/><line x1="43.67" y1="28.17" x2="50" y2="26.33"/><path d="M25.33,8.44A11.17,11.17,0,0,1,32,7.5a11.17,11.17,0,0,1,6.67.94"/><path d="M21.23,12.55A16.83,16.83,0,0,1,32,10.33a16.83,16.83,0,0,1,10.77,2.22"/></svg>,
        content: {
            id: 'ai-first',
            category: 'Pillar 1',
            title: 'AI-First Architecture',
            content: `<h3>Intelligence, Architected.</h3><p>Unlike traditional platforms where AI is an afterthought, every Akin platform is built upon an AI-First principle. This means machine learning is the fundamental driver of every process. We believe your operational engine should not just record what has happened, but intelligently anticipate what will happen next. This is achieved through a system of predictive insights, intelligent process automation, and a cognitive core that continuously learns and evolves with your business.</p><ul><li><strong>Predictive Insights:</strong> Our systems analyze vast datasets, from your sales history to global market trends, to identify hidden patterns and provide accurate forecasting.</li><li><strong>Process Automation:</strong> We automate complex, data-driven decisions, freeing your team to focus on high-value strategic initiatives rather than repetitive tasks.</li><li><strong>Continuous Learning:</strong> The Akin cognitive core learns from every transaction and interaction, becoming smarter and more efficient over time, ensuring your platform evolves with your business.</li></ul>`
        }
    },
    {
        id: 'governance',
        name: 'Secure & Compliant by Design',
        description: 'We build with state-of-the-art security and a commitment to responsible innovation, aligning with global frameworks like the EU AI Act and ISO standards.',
        icon: <svg className="h-12 w-12 mb-4 text-akin-cyan" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" fill="none"><path d="M32,7.5,10.5,16.83V31.5c0,13.62,21.5,25,21.5,25S53.5,45.12,53.5,31.5V16.83Z"/><polyline points="23.67 31.5 29.17 37 42.5 23.67"/></svg>,
        content: {
            id: 'governance',
            category: 'Pillar 2',
            title: 'Secure & Compliant by Design',
            content: `<h3>Innovation with Integrity.</h3><p>We build platforms with governance at their core, designed in alignment with global frameworks like the <strong>EU AI Act</strong> and <strong>ISO/IEC 42001</strong>. This ensures our solutions promote ethical practices, operational transparency, and audit readiness from day one. We embed controls for risk mitigation and data protection directly into the architecture, helping you navigate the complex regulatory landscape with confidence. Our commitment is to provide AI you can trust, without claiming formal certification.</p><ul><li><strong>Framework Aligned Design:</strong> Proactive alignment with leading AI regulations and standards to future-proof your operations.</li><li><strong>Ethical AI Principles:</strong> A foundation of fairness, transparency, and accountability guides all development.</li><li><strong>Audit Readiness:</strong> Systems are designed to provide clear audit trails and simplify compliance reporting.</li></ul>`
        }
    },
    {
        id: 'native-mobility',
        name: 'Native Mobility',
        description: 'Access full operational control from anywhere. Your business does not stop at the desktop, and neither does your platform. Secure and seamless on any device.',
        icon: <svg className="h-12 w-12 mb-4 text-akin-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2" stroke="currentColor" fill="none"><rect x="12" y="25" width="40" height="24" rx="2"></rect><line x1="12" y1="42" x2="52" y2="42"></line><line x1="32" y1="49" x2="32" y2="55"></line><line x1="24" y1="55" x2="40" y2="55"></line><rect x="4" y="15" width="22" height="30" rx="2" transform="rotate(-15 15 30)"></rect><rect x="42" y="9" width="12" height="20" rx="1"></rect></svg>,
        content: {
            id: 'native-mobility',
            category: 'Pillar 3',
            title: 'Native Mobility',
            content: `<h3>Know What's Next, from Anywhere.</h3><p>We design for a world where critical decisions are made on the factory floor, in a client meeting, or halfway across the globe. Our "Native Mobility" principle ensures a seamless, powerful, and secure experience from anywhere, on any device, without compromise. From approving purchase orders to checking global inventory, your team is empowered in the field with the real-time data needed to act with confidence.</p><ul><li><strong>Interface for Every Device:</strong> From desktop to tablet to smartphone, the interface is intuitively adapted for each screen, ensuring usability and efficiency.</li><li><strong>Secure, Uninterrupted Access:</strong> Access real-time data and execute critical tasks with the same level of security you have in the office.</li><li><strong>Empowerment in the Field:</strong> Your sales team can close deals with real-time stock information, and your logistics team can manage operations on the go. This is mobility that drives productivity.</li></ul>`
        }
    },
    {
        id: 'mission-critical',
        name: 'Mission-Critical Robustness',
        description: 'Engineered with the reliability of financial institutions, we assure data integrity and operational continuity with 99.9% uptime and proactive monitoring.',
        icon: <svg className="h-12 w-12 mb-4 text-akin-cyan" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" fill="none"><path d="M53.5,22.83V47.17a3,3,0,0,1-3,3H13.5a3,3,0,0,1-3-3V22.83"/><path d="M50.5,10.5H13.5a3,3,0,0,0-3,3v6.33H53.5V13.5A3,3,0,0,0,50.5,10.5Z"/><circle cx="32" cy="31.5" r="7.5"/><line x1="32" y1="39" x2="32" y2="44.17"/><line x1="28.33" y1="44.17" x2="35.67" y2="44.17"/></svg>,
        content: {
            id: 'mission-critical',
            category: 'Pillar 4',
            title: 'Mission-Critical Robustness',
            content: `<h3>The Foundation of Knowing: Unwavering Reliability.</h3><p>The ability to "Know What's Next" requires a foundation of absolute trust in your platform's stability. We engineer our solutions with the resilience of mission-critical financial systems. Your operational continuity is assured by an enterprise-grade architecture built on core guarantees. These include redundant cloud infrastructure to eliminate single points of failure, end-to-end banking-grade encryption, and 24/7 proactive monitoring to resolve potential issues before they can impact your business.</p><ul><li><strong>Redundant Cloud Infrastructure:</strong> Our systems are built on a distributed cloud architecture with built-in fail-safes.</li><li><strong>Banking-Grade Encryption:</strong> All data, both in transit and at rest, is protected by end-to-end, state-of-the-art encryption protocols.</li><li><strong>24/7 Proactive Monitoring:</strong> Our team and automated systems monitor platform health around the clock to identify and resolve potential issues before they impact your business.</li></ul>`
        }
    },
];

const capabilities = [
    { name: 'Unified Ontology', description: 'The "digital twin" that maps your entire business.', icon: CpuChipIcon },
    { name: 'Open Architecture & Integration', description: 'Integrate everything. Build on what you have.', icon: ShareIcon },
    { name: 'Bespoke AI Model Development', description: 'Custom models built on your Ontology.', icon: BeakerIcon },
    { name: 'Operational Deployment', description: 'Move from model to mission, from cloud to edge.', icon: RocketLaunchIcon },
    { name: 'Security & Governance', description: 'Security and data lineage built-in, not bolted-on.', icon: ShieldCheckIcon },
];

interface PlatformPageProps {
    onPillarClick: (content: Content) => void;
}

const PlatformPage: React.FC<PlatformPageProps> = ({ onPillarClick }) => {
    return (
        <div className="bg-white">
            <Hero
                breadcrumb="The Akin AI Platform"
                title="Your Unified AI Operating System"
                subtitle="The single platform to integrate your data, build your bespoke models, and deploy real-world AI operations."
            />

            {/* The Architecture of Our Promise: Our Pillars */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            The Architecture of Our Promise: Our Pillars
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            Every Akin platform is built upon four unwavering principles. This is the blueprint for how we architect intelligence you can trust.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {pillars.map((pillar) => (
                            <Card key={pillar.name} className="flex flex-col">
                                {pillar.icon}
                                <h3 className="text-xl font-bold text-akin-text-dark">{pillar.name}</h3>
                                <p className="mt-2 text-akin-text-light flex-grow">{pillar.description}</p>
                                <button 
                                    onClick={() => onPillarClick(pillar.content)}
                                    className="mt-4 pt-4 border-t border-gray-200 font-semibold text-akin-cyan hover:text-akin-text-dark text-left w-full transition-colors"
                                >
                                    Read More &rarr;
                                </button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Concept: Ontology */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="pr-8">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            The Heart of Your AI: The Akin Unified Ontology
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                            The Akin Ontology is the operational layer for your entire organization. It is a living, digital twin that sits on top of your existing digital assets (datasets, models, ERPs) and connects them to their real-world counterparts—factories, equipment, customers, supply chains, and financial transactions.
                        </p>
                        <p className="mt-4 text-lg text-akin-text-light">
                            AI cannot operate on data stored in tables. It must understand context. The Ontology provides that context, connecting the semantic, kinetic, and dynamic elements of your business. It is the single source of truth that weaves your data and analytics directly into your daily decision-making.
                        </p>
                    </div>
                     <img src="/images/ontology-concept.jpg" alt="Digital Twin Concept" className="rounded-lg shadow-xl" />
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Core Platform Capabilities
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                            A holistic set of features designed to power your entire operation.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((capability) => (
                            <Card key={capability.name} className="flex flex-col text-center">
                                <capability.icon className="h-12 w-12 text-akin-cyan mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-akin-text-dark">{capability.name}</h3>
                                <p className="mt-2 text-akin-text-light flex-grow">{capability.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <CallToActionSection
                title="See the Platform in Action."
                subtitle="The best way to understand the power of a bespoke AI OS is to see it. Schedule a personalized discussion with one of our platform engineers."
                buttonText="Start a Conversation"
            />
        </div>
    );
};

export default PlatformPage;
