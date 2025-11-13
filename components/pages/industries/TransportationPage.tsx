
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { MapIcon, WrenchScrewdriverIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Route & Network Inefficiency', description: 'Static routing and planning cannot adapt to real-time traffic, weather, and demand, leading to increased fuel costs and delays.' },
    { name: 'Unplanned Asset Downtime', description: 'Reactive maintenance for fleets and infrastructure results in costly service disruptions and high repair expenses.' },
    { name: 'Fragmented Logistics Data', description: 'Data silos between carriers, warehouses, and clients prevent end-to-end visibility, making optimization impossible.' },
];

const capabilities = [
    { name: 'Dynamic Route Optimization', description: 'Our AI models analyze real-time data to dynamically optimize routes for fleets, reducing fuel consumption and improving on-time performance.', icon: MapIcon },
    { name: 'Predictive Fleet Maintenance', description: 'We create a "digital twin" of your assets, using sensor data to predict failures before they happen and optimizing maintenance schedules.', icon: WrenchScrewdriverIcon },
    { name: 'Unified Logistics Ontology', description: 'We integrate data from across your entire logistics network into a single source of truth, enabling true end-to-end visibility and control.', icon: ArrowPathIcon },
];

const TransportationPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Transportation & Mobility"
                title="Architecting Intelligent Mobility"
                subtitle="The future of transportation is efficient, resilient, and autonomous. We build the AI operating systems that power the next generation of logistics and mobility networks."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Reactive Logistics to Predictive Networks</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            In a world of constant disruption, transportation and logistics networks must be intelligent and adaptive. We solve the core data integration and prediction problems that prevent true operational efficiency.
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
                            We build bespoke AI platforms that deliver the core capabilities required to run a modern, intelligent mobility operation.
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
                title="Ready to Optimize Your Network?"
                subtitle="Let's discuss how a unified AI operating system can transform your transportation and logistics operations, driving efficiency and resilience."
                buttonText="Talk to a Logistics Specialist"
            />
        </div>
    );
};

export default TransportationPage;
