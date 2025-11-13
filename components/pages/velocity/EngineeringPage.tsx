
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { CircleStackIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const model = [
    { name: 'Data Ingestion & Pipelines', description: 'We build resilient, high-throughput data pipelines to ingest data from all your source systems, whether they are modern APIs or legacy databases.' },
    { name: 'Unified Ontology Construction', description: 'This is where we build the "digital twin" of your business—the semantic layer that connects your data to real-world objects and processes.' },
    { name: 'Core Platform & Infrastructure', description: 'We deploy the secure, scalable, cloud-native infrastructure that will power your AI operating system, using modern DevOps and IaC principles.' },
];

const EngineeringPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="VELOCITY Approach / Engineering & Integration"
                title="Phase 2: Engineering & Integration"
                subtitle="This is the heavy lifting. Our engineers build the rock-solid data foundation and core infrastructure that your AI operating system will be built upon."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Building the Central Nervous System</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           An AI is only as good as the data it can access. In this phase, our focus is on integrating your disparate, legacy systems into the platform's open architecture. We build the data pipelines that feed the Unified Ontology, creating the single source of truth required for intelligent action.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Engineering Model</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            Our engineering process is focused on three core activities that run in parallel to create your bespoke data foundation.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {model.map(item => (
                            <Card key={item.name} className="text-center">
                                <h3 className="text-xl font-bold text-akin-text-dark">{item.name}</h3>
                                <p className="mt-2 text-akin-text-light">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">What You Can Expect</h2>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <Card><p className="text-lg font-semibold">An operational data pipeline integrating your key source systems.</p></Card>
                        <Card><p className="text-lg font-semibold">The first version of your Unified Ontology, ready for modeling.</p></Card>
                        <Card><p className="text-lg font-semibold">A secure and scalable production environment deployed in the cloud.</p></Card>
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready for Phase 3: Logic & Modeling?"
                subtitle="With the data foundation in place, the next step is to build the intelligence. Explore how we develop bespoke AI models on your new Unified Ontology."
                buttonText="Explore Logic & Modeling"
                buttonLink="/velocity-approach/logic"
            />
        </div>
    );
};

export default EngineeringPage;
