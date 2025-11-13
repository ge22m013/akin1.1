
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { RocketLaunchIcon, UserGroupIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const model = [
    { name: 'CI/CD for ML (MLOps)', description: 'We build automated pipelines to test, package, and deploy your models, ensuring that updates can be pushed to production safely and reliably.' },
    { name: 'Human-in-the-Loop Workflows', description: 'For critical decisions, we design and build intuitive interfaces that allow your team to review, approve, or override AI-driven recommendations.' },
    { name: 'Performance Monitoring', description: 'Once live, we implement comprehensive monitoring to track model performance, data drift, and system health in real-time, ensuring continuous reliability.' },
];

const OperationalizePage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="VELOCITY Approach / Operationalize & Deploy"
                title="Phase 4: Operationalize & Deploy"
                subtitle="This is where the transformation happens. We move your AI platform and bespoke models from the development environment into your live, mission-critical operations."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Model to Mission</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Deployment is the moment of truth for any AI initiative. Our focus is on a seamless and non-disruptive transition. Using our autonomous deployment framework, we establish a continuous, reliable operation that integrates directly into your existing workflows and empowers your teams.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Deployment Model</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            Our deployment process ensures a robust, secure, and manageable operational state from day one.
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
                        <Card><p className="text-lg font-semibold">Your bespoke AI platform, live and integrated into your production environment.</p></Card>
                        <Card><p className="text-lg font-semibold">Comprehensive training for your operational teams on the new system.</p></Card>
                        <Card><p className="text-lg font-semibold">A live monitoring dashboard to track system health and performance.</p></Card>
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready for Phase 5: Collaborate & Evolve?"
                subtitle="Deployment is just the beginning. Explore how we partner with you long-term to ensure your platform delivers sustained and ever-increasing value."
                buttonText="Explore Collaborate & Evolve"
                buttonLink="/velocity-approach/collaborate-evolve"
            />
        </div>
    );
};

export default OperationalizePage;
