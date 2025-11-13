
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ShieldCheckIcon, DocumentMagnifyingGlassIcon, ScaleIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Sophisticated Financial Fraud', description: 'Fraudsters use complex, multi-vector attacks that are impossible to detect with traditional rules-based systems.' },
    { name: 'Increasing Regulatory Burden', description: 'Manual compliance monitoring (AML, KYC) is slow, costly, and prone to human error, increasing regulatory risk.' },
    { name: 'Static Risk Models', description: 'Risk and credit models based on historical data fail to adapt to real-time market changes, leading to poor decisions.' },
];

const capabilities = [
    { name: 'Real-Time Fraud Detection', description: 'Our platforms analyze millions of transactions in milliseconds, using AI to detect subtle patterns of fraudulent activity and prevent losses.', icon: ShieldCheckIcon },
    { name: 'Automated Compliance & KYC', description: 'We build intelligent systems that automate the monitoring of transactions and customer data, ensuring continuous compliance with AML and KYC regulations.', icon: DocumentMagnifyingGlassIcon },
    { name: 'Dynamic Risk & Credit Scoring', description: 'We develop bespoke AI models that provide a more accurate and dynamic assessment of credit and market risk, adapting in real-time to new information.', icon: ScaleIcon },
];

const FinancePage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Financial Services"
                title="Architecting Resilient Finance"
                subtitle="In a sector defined by speed, risk, and regulation, we build the AI operating systems that provide a decisive advantage. We empower financial institutions to operate with greater intelligence, security, and speed."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Data Overload to Decisive Insight</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           The financial industry runs on data, but siloed systems create risk and hide opportunity. We solve the core challenge of unifying data to power real-time, intelligent decision-making across your entire organization.
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
                           We build bespoke AI platforms that deliver mission-critical capabilities for modern banking, insurance, and asset management.
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
                title="Ready to Build Your Financial Advantage?"
                subtitle="Let's discuss how a unified AI operating system can transform your approach to risk, compliance, and customer engagement."
                buttonText="Talk to a Finance Specialist"
            />
        </div>
    );
};

export default FinancePage;
