
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import { CpuChipIcon, WrenchScrewdriverIcon, UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const principles = [
    {
        name: 'Ontology-First, Not Data-First',
        description: 'Traditional approaches start with a data lake. We start by building a Unified Ontology—a "digital twin" of your business. This ensures AI operates on context, not just data, leading to more accurate and relevant insights.',
        icon: CpuChipIcon
    },
    {
        name: 'Engineers, Not Consultants',
        description: 'Our deliverable is operational code, not a slide deck. We are a team of builders who embed with your organization to architect, create, and deploy mission-critical systems.',
        icon: WrenchScrewdriverIcon
    },
    {
        name: 'Partners, Not Vendors',
        description: 'We believe in deep collaboration and shared ownership. We work as an extension of your team, ensuring the solutions we build are deeply aligned with your operational reality and business goals.',
        icon: UserGroupIcon
    },
    {
        name: 'Product, Not Project',
        description: 'We treat your AI platform as a living, evolving product. Our engagement doesn\'t end at launch; we partner with you for the long-term to continuously monitor, refine, and enhance its capabilities.',
        icon: ArrowTrendingUpIcon
    },
];

const MethodologyPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="How We Do It"
                title="Our Engineering Philosophy"
                subtitle="Our methodology is more than a process; it's a set of core principles that differentiate our approach and drive superior outcomes. It's how we transform complexity into operational intelligence."
            />

            <main className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           The Principles of Our Practice
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            These four principles are the foundation of our engineering culture and the reason we succeed where others fail.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {principles.map((p) => (
                             <Card key={p.name}>
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 bg-akin-cyan/10 p-3 rounded-lg">
                                        <p.icon className="h-10 w-10 text-akin-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-akin-text-dark">{p.name}</h3>
                                        <p className="mt-2 text-lg text-akin-text-light">{p.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark">
                        Contrast with Traditional Approaches
                    </h2>
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                        <Card>
                            <h3 className="text-xl font-bold text-akin-text-dark mb-2">Traditional AI Projects</h3>
                            <ul className="space-y-2 text-red-500 list-disc list-inside">
                                <li>Begin with a data lake, leading to a "data swamp".</li>
                                <li>Deliver a "proof-of-concept" that fails to scale.</li>
                                <li>Operate as external consultants with limited context.</li>
                                <li>End the engagement after the initial build.</li>
                            </ul>
                        </Card>
                         <Card>
                            <h3 className="text-xl font-bold text-akin-text-dark mb-2">The Akin Methodology</h3>
                            <ul className="space-y-2 text-green-600 list-disc list-inside">
                                <li>Begin with a Unified Ontology for built-in context.</li>
                                <li>Deliver an operational, mission-critical system.</li>
                                <li>Embed as engineering partners for deep understanding.</li>
                                <li>Evolve the platform as a long-term product.</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>


            <CallToActionSection
                title="See Our Methodology in Action"
                subtitle="The best way to understand our approach is to see the results. Explore our VELOCITY framework to see how these principles are put into practice."
                buttonText="Explore the VELOCITY Approach"
                buttonLink="/velocity-approach"
            />
        </div>
    );
};

export default MethodologyPage;