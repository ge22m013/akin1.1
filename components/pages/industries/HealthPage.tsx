
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { BeakerIcon, ChartPieIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Siloed Patient & Research Data', description: 'Data from clinical trials, electronic health records (EHRs), and genomics is fragmented, slowing down research and preventing a holistic patient view.' },
    { name: 'Inefficient Clinical Trials', description: 'Patient recruitment, site selection, and data management are manual and inefficient processes, leading to long delays and high costs.' },
    { name: 'Complex Regulatory Compliance', description: 'Navigating the complex landscape of healthcare regulations (like HIPAA) while innovating with data is a significant challenge.' },
];

const capabilities = [
    { name: 'Unified Research & Patient Ontology', description: 'We create a unified data layer that connects clinical, operational, and R&D data, accelerating drug discovery and enabling personalized medicine.', icon: BeakerIcon },
    { name: 'AI-Powered Clinical Trial Optimization', description: 'Our platforms use AI to identify ideal patient cohorts, optimize trial site selection, and automate data analysis, reducing timelines and costs.', icon: ChartPieIcon },
    { name: 'Secure & Compliant Data Platforms', description: 'We build secure, compliant (HIPAA, GDPR) platforms that enable data sharing and collaboration while ensuring the highest levels of patient privacy and data governance.', icon: ShieldCheckIcon },
];

const HealthPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Health & Life Sciences"
                title="Accelerating the Future of Health"
                subtitle="From drug discovery to patient care, data is the key to the next wave of healthcare innovation. We build the secure, intelligent, and compliant AI platforms that turn health data into life-saving insights."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Fragmented Data to Personalized Care</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           The potential to transform health outcomes with AI is immense, but it's locked away in data silos. We solve the foundational challenge of unifying and interpreting complex health data at scale.
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
                           We build bespoke AI operating systems that provide the core capabilities for innovation in pharmaceuticals, biotech, and healthcare.
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
                title="Ready to Pioneer the Next Health Breakthrough?"
                subtitle="Let's discuss how a secure, unified AI platform can accelerate your research, optimize your operations, and improve patient outcomes."
                buttonText="Talk to a Health Specialist"
            />
        </div>
    );
};

export default HealthPage;
