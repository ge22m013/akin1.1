
import React from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import CallToActionSection from '../ui/CallToActionSection';
import { BuildingStorefrontIcon, TruckIcon, BoltIcon, BanknotesIcon, BeakerIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const industries = [
    {
        name: 'Retail & Consumer Products',
        description: 'From demand forecasting to personalized customer engagement, we build AI systems that optimize inventory, streamline supply chains, and create exceptional customer experiences.',
        icon: BuildingStorefrontIcon,
        href: '/industries/retail-consumer-products'
    },
    {
        name: 'Transportation & Mobility',
        description: 'We architect platforms for route optimization, predictive maintenance for fleets, and intelligent logistics to create more efficient and resilient mobility networks.',
        icon: TruckIcon,
        href: '/industries/transportation-mobility'
    },
    {
        name: 'Energy & Commodities',
        description: 'For energy grids and commodities trading, we build AI operating systems that forecast demand, optimize asset performance, and manage market volatility in real-time.',
        icon: BoltIcon,
        href: '/industries/energy-commodities'
    },
    {
        name: 'Financial Services',
        description: 'Our bespoke platforms power real-time fraud detection, algorithmic risk scoring, and automated compliance, enabling financial institutions to operate with greater speed and security.',
        icon: BanknotesIcon,
        href: '/industries/financial-services'
    },
    {
        name: 'Health & Life Sciences',
        description: 'We develop secure and compliant AI systems to accelerate research, optimize clinical trial operations, and create personalized patient care pathways.',
        icon: HeartIcon,
        href: '/industries/health-life-sciences'
    },
    {
        name: 'Public Sector',
        description: 'We partner with public sector organizations to build intelligent systems that enhance civic services, optimize resource allocation, and improve operational efficiency.',
        icon: BeakerIcon,
        href: '/industries/public-sector'
    },
];

const IndustriesPage: React.FC = () => {
  return (
    <div>
        <Hero
            breadcrumb="What We Do"
            title="Intelligence for Every Industry"
            subtitle="Our AI operating systems are architected to solve the most complex operational challenges, regardless of the industry. We partner with leaders to build bespoke solutions that drive tangible, measurable value."
        />

        <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map(industry => (
                    <Card key={industry.name} className="flex flex-col">
                        <industry.icon className="h-10 w-10 text-akin-cyan mb-4" />
                        <h3 className="text-xl font-bold text-akin-text-dark">{industry.name}</h3>
                        <p className="mt-2 text-akin-text-light flex-grow">{industry.description}</p>
                        <Link to={industry.href} className="mt-6 pt-4 border-t border-gray-200 font-semibold text-akin-cyan hover:text-akin-text-dark transition-colors">
                            Learn More &rarr;
                        </Link>
                    </Card>
                ))}
            </div>
        </main>

        <CallToActionSection
            title="Don't See Your Industry?"
            subtitle="Our platform's open architecture allows us to adapt to any complex operational environment. Let's discuss your unique challenges and architect a solution."
            buttonText="Talk to an Engineer"
        />
    </div>
  );
};

export default IndustriesPage;
