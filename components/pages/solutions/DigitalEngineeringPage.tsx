
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { CodeBracketSquareIcon, CloudIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const principles = [
    { name: 'Robust & Scalable Architecture', description: 'We design systems for the long-term, ensuring they are scalable, maintainable, and can evolve with your business needs.', icon: CodeBracketSquareIcon },
    { name: 'Cloud-Native Development', description: 'We leverage modern, cloud-native principles to build resilient, efficient, and secure applications that can be deployed and scaled anywhere.', icon: CloudIcon },
    { name: 'Agile & DevOps Culture', description: 'Our engineering process is built on a culture of continuous integration and delivery (CI/CD), enabling us to ship high-quality code faster and more reliably.', icon: ArrowPathIcon },
];

const DigitalEngineeringPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Digital Engineering"
                title="Engineering Your Digital Core"
                subtitle="Technology should be a competitive advantage, not a liability. We architect and build the robust, scalable, and mission-critical software platforms that power modern enterprises."
            />

            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Building the Foundation for Intelligence</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Advanced AI and analytics are only as powerful as the digital foundation they are built upon. Our digital engineering practice focuses on building the rock-solid platforms and data infrastructure required to unlock the full potential of your data.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {principles.map(item => (
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
                          Modernizing Legacy Systems
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                          We don't believe in a "rip and replace" approach. Our open architecture allows us to integrate with your existing legacy systems, creating a unified data layer that modernizes your core without disrupting your operations. We build bridges to the future, not islands.
                        </p>
                    </div>
                     <img src="/images/solution-engineering.jpg" alt="Modern and legacy systems connecting" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <CallToActionSection
                title="Ready to Build a Resilient Platform?"
                subtitle="Let's discuss how our digital engineering expertise can help you modernize your technology, unify your data, and build the foundation for future innovation."
                buttonText="Talk to a Platform Architect"
            />
        </div>
    );
};

export default DigitalEngineeringPage;
