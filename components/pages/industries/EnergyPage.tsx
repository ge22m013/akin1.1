
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ChartBarIcon, CpuChipIcon, ScaleIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Grid Instability', description: 'Balancing a volatile grid with fluctuating renewable energy sources and unpredictable demand is a major challenge.' },
    { name: 'Aging Infrastructure', description: 'Predicting failures in critical assets like transformers before they cause outages is crucial for reliability.' },
    { name: 'Market Volatility', description: 'Optimizing energy trading in a 24/7 market with complex variables requires real-time, predictive insights.' },
];

const capabilities = [
    { name: 'Grid Load Forecasting', description: 'Our AI platforms accurately predict energy demand and generation, enabling optimized load balancing and integration of renewables.', icon: ChartBarIcon },
    { name: 'Predictive Asset Maintenance', description: 'We monitor the health of critical infrastructure to predict failures, reduce downtime, and optimize maintenance schedules.', icon: CpuChipIcon },
    { name: 'Algorithmic Energy Trading', description: 'We build systems that analyze market data in real-time to identify opportunities and automate trading strategies, maximizing profitability.', icon: ScaleIcon },
];

const EnergyPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Energy & Commodities"
                title="Powering the Digital Utility"
                subtitle="The energy landscape is undergoing a radical transformation. We build the intelligent operating systems that enable utilities and traders to navigate complexity and thrive in the new energy future."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Grid Management to Market Mastery</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           The rise of renewables, distributed energy resources, and volatile markets requires a new level of intelligence. We solve the core data and prediction challenges to create a more resilient, efficient, and profitable energy system.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {challenges.map(challenge => (
                            <Card key={challenge.name}>
                                <h3 className="text-xl font-bold text-akin-text-dark">{challenge.name}</h3>
                                <p className="mt-2 text-akin-text-light">{challenge.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Capabilities</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            We build bespoke AI platforms that deliver the foundational capabilities for the modern digital utility and energy trader.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {capabilities.map(capability => (
                            <Card key={capability.name} className="text-center">
                                <capability.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="mt-4 text-xl font-bold text-akin-text-dark">{capability.name}</h3>
                                <p className="mt-2 text-akin-text-light">{capability.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready to Engineer the New Energy Future?"
                subtitle="Let's discuss how a unified AI operating system can transform your grid operations or trading strategies, creating a sustainable competitive advantage."
                buttonText="Talk to an Energy Specialist"
            />
        </div>
    );
};

export default EnergyPage;
