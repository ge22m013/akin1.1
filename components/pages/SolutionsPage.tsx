
import React from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import CallToActionSection from '../ui/CallToActionSection';
import { SparklesIcon, PuzzlePieceIcon, CloudIcon, UserGroupIcon, ShoppingCartIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const solutions = [
    {
        name: 'Artificial Intelligence',
        description: 'Move beyond the prototype. We design, build, and deploy mission-critical AI, from predictive models to ontology-grounded generative agents that reason over your operational data.',
        icon: SparklesIcon,
        href: '/solutions/artificial-intelligence'
    },
    {
        name: 'Digital Engineering',
        description: 'We architect and build the robust, scalable software and platforms that form the digital core of your business, ensuring your technology is an asset, not a liability.',
        icon: WrenchScrewdriverIcon,
        href: '/solutions/digital-engineering'
    },
    {
        name: 'Cloud & Infrastructure',
        description: 'From cloud migration to building resilient, scalable, and secure cloud-native infrastructure, we ensure your platform is built on a foundation of operational excellence.',
        icon: CloudIcon,
        href: '/solutions/cloud-infrastructure'
    },
    {
        name: 'Experience Transformation',
        description: 'We connect strategy, design, and technology to create seamless and intuitive experiences for your customers and employees, powered by a unified data core.',
        icon: UserGroupIcon,
        href: '/solutions/experience-transformation'
    },
    {
        name: 'Digital Commerce',
        description: 'Architecting intelligent, scalable commerce platforms that optimize everything from inventory management to personalized customer journeys, driving growth and efficiency.',
        icon: ShoppingCartIcon,
        href: '/solutions/digital-commerce'
    },
    {
        name: 'Supply Chain',
        description: 'Create a resilient and predictive supply chain with a unified digital twin that provides end-to-end visibility, optimizes logistics, and forecasts demand with unparalleled accuracy.',
        icon: PuzzlePieceIcon,
        href: '/solutions/supply-chain'
    },
];

const SolutionsPage: React.FC = () => {
  return (
    <div>
        <Hero
            breadcrumb="What We Do"
            title="Our Core Capabilities"
            subtitle="We offer an integrated set of solutions that bridge the gap between strategy and execution. From foundational engineering to advanced AI, we provide the end-to-end capabilities to transform your operations."
        />

        <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map(solution => (
                    <Card key={solution.name} className="flex flex-col">
                        <solution.icon className="h-10 w-10 text-akin-cyan mb-4" />
                        <h3 className="text-xl font-bold text-akin-text-dark">{solution.name}</h3>
                        <p className="mt-2 text-akin-text-light flex-grow">{solution.description}</p>
                         <Link to={solution.href} className="mt-6 pt-4 border-t border-gray-200 font-semibold text-akin-cyan hover:text-akin-text-dark transition-colors">
                            Learn More &rarr;
                        </Link>
                    </Card>
                ))}
            </div>
        </main>

        <CallToActionSection
            title="Ready to Build Your Solution?"
            subtitle="Our capabilities are designed to work together to solve your most complex challenges. Let's discuss how we can architect the right solution for your business."
            buttonText="Start the Conversation"
        />
    </div>
  );
};

export default SolutionsPage;
