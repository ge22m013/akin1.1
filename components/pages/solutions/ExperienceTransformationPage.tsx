
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { UserGroupIcon, LightBulbIcon, CircleStackIcon } from '@heroicons/react/24/outline';

const principles = [
    { name: 'Data-Driven Design', description: 'We don\'t guess. Every design decision is informed by data, from user research to analytics, ensuring the experiences we create are intuitive and effective.', icon: CircleStackIcon },
    { name: 'Unified Customer View', description: 'We break down data silos to create a single, 360-degree view of your customer, enabling truly personalized and consistent experiences across all touchpoints.', icon: UserGroupIcon },
    { name: 'Seamless Technology Integration', description: 'A great experience requires flawless execution. We bridge the gap between design and engineering to ensure the final product is both beautiful and technically robust.', icon: LightBulbIcon },
];

const ExperienceTransformationPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Experience Transformation"
                title="Experiences Powered by Intelligence"
                subtitle="We connect strategy, design, and technology to create seamless and intuitive experiences for your customers and employees, all powered by a unified data core."
            />

            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Beyond the Interface</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           A great digital experience is more than just a pretty design. It's the seamless orchestration of data, technology, and user-centric design to solve real problems and create genuine value.
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
                           From Employee Tools to Customer Portals
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                          Our approach applies to every digital touchpoint. Whether we are building a complex internal tool to empower your workforce or a public-facing application for your customers, our principles remain the same: make it intuitive, make it intelligent, and make it impactful.
                        </p>
                    </div>
                     <img src="/images/solution-experience.jpg" alt="UI designs for different devices" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <CallToActionSection
                title="Ready to Transform Your Digital Experience?"
                subtitle="Let's discuss how our integrated approach to design, data, and engineering can create digital experiences that delight your users and drive your business."
                buttonText="Talk to a Solutions Architect"
            />
        </div>
    );
};

export default ExperienceTransformationPage;
