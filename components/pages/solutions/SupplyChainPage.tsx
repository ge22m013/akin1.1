
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { TruckIcon, CubeTransparentIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'End-to-End Visibility', description: 'Our Unified Ontology integrates data from carriers, warehouses, suppliers, and ERPs to create a real-time, single source of truth for your entire supply chain.', icon: CubeTransparentIcon },
    { name: 'AI-Driven Demand Forecasting', description: 'Move beyond historical forecasting. Our models incorporate external signals like market trends and weather to predict demand with greater accuracy.', icon: ChartBarIcon },
    { name: 'Logistics Network Optimization', description: 'We use AI to identify the most efficient shipping routes, carrier choices, and inventory placement in real-time, responding instantly to disruptions.', icon: TruckIcon },
];

const SupplyChainPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Supply Chain"
                title="Building Resilient, Predictive Supply Chains"
                subtitle="In a world of constant disruption, your supply chain must be a source of competitive advantage, not risk. We build the intelligent digital twin that provides the visibility and foresight to navigate uncertainty."
            />

            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From a Reactive Chain to a Cognitive Network</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Traditional supply chains are brittle because they operate on siloed, historical data. We transform your supply chain into a cognitive, predictive network by solving the core challenge: unifying all your data into a single, intelligent operational model.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {capabilities.map(item => (
                            <Card key={item.name} className="text-center">
                                <item.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="mt-4 text-xl font-bold text-akin-text-dark">{item.name}</h3>
                                <p className="mt-2 text-akin-text-light">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="md:order-last">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           Simulate the Future
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                          Your Unified Ontology allows you to run powerful "what-if" scenarios. Simulate the impact of a port closure, a supplier delay, or a sudden spike in demand. Our platforms allow you to stress-test your supply chain and build data-driven contingency plans before disruptions occur.
                        </p>
                    </div>
                     <img src="/images/solution-supply-chain.jpg" alt="Simulation of a supply chain network" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <CallToActionSection
                title="Ready to Build a More Resilient Supply Chain?"
                subtitle="Let's discuss how our bespoke AI operating systems can provide the end-to-end visibility and predictive insights your supply chain needs to thrive."
                buttonText="Talk to a Supply Chain Specialist"
            />
        </div>
    );
};

export default SupplyChainPage;
