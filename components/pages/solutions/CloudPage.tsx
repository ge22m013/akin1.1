
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { CloudArrowUpIcon, ServerStackIcon, CogIcon } from '@heroicons/react/24/outline';

const offerings = [
    { name: 'Cloud Migration & Strategy', description: 'We design and execute seamless cloud migration strategies, ensuring your transition is secure, cost-effective, and aligned with your long-term business goals.', icon: CloudArrowUpIcon },
    { name: 'Resilient Infrastructure', description: 'We build and manage scalable, secure, and highly available cloud-native infrastructure using Infrastructure as Code (IaC) and modern DevOps practices.', icon: ServerStackIcon },
    { name: 'MLOps & AI Platforms', description: 'We architect and build the specialized MLOps infrastructure required to train, deploy, and manage machine learning models at scale, moving your AI from prototype to production.', icon: CogIcon },
];

const CloudPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Cloud & Infrastructure"
                title="The Foundation for Scalable Intelligence"
                subtitle="Modern AI runs on modern infrastructure. We build the secure, scalable, and resilient cloud foundations that power mission-critical AI operating systems."
            />

            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Infrastructure Engineered for AI</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Deploying enterprise-grade AI requires more than just a cloud account. It demands a specialized, robust infrastructure built for the unique demands of data pipelines, model training, and real-time inference. We build that foundation.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {offerings.map(item => (
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
                    <div>
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           Multi-Cloud & Hybrid by Design
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                          We believe in architectural flexibility. Our platforms are designed to be cloud-agnostic, enabling you to leverage the best services from any provider or deploy in a hybrid environment. This ensures you avoid vendor lock-in and have a platform that can adapt to your evolving technology strategy.
                        </p>
                    </div>
                     <img src="/images/solution-cloud.jpg" alt="Multi-cloud diagram" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <CallToActionSection
                title="Ready to Build Your AI-Ready Foundation?"
                subtitle="Let's discuss how our cloud and infrastructure expertise can provide the scalable, secure, and resilient platform your AI initiatives need to succeed."
                buttonText="Talk to an Infrastructure Architect"
            />
        </div>
    );
};

export default CloudPage;
