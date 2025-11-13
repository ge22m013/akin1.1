
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { BuildingLibraryIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Siloed Departmental Data', description: 'Data is trapped within individual government agencies and legacy systems, preventing a holistic view for effective policy-making and service delivery.' },
    { name: 'Inefficient Resource Allocation', description: 'Without predictive insights, allocating budgets and personnel to address changing civic needs is a reactive and inefficient process.' },
    { name: 'Legacy System Modernization', description: 'Modernizing decades-old government IT infrastructure without disrupting critical public services is a massive technical and operational challenge.' },
];

const capabilities = [
    { name: 'Unified Civic Data Platform', description: 'We build secure platforms that integrate data across departments, creating a unified view to improve civic services and inform policy.', icon: BuildingLibraryIcon },
    { name: 'Predictive Resource Planning', description: 'Our AI models help forecast demand for public services, enabling government agencies to allocate resources more effectively and proactively.', icon: UserGroupIcon },
    { name: 'Secure, Scalable Modernization', description: 'We architect and execute strategies for modernizing legacy systems, building secure, cloud-native platforms that are agile and resilient.', icon: ShieldCheckIcon },
];

const PublicSectorPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Public Sector"
                title="Building Smarter, More Responsive Government"
                subtitle="We partner with public sector organizations to build the intelligent digital infrastructure required to deliver modern, efficient, and effective civic services."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Legacy Systems to Intelligent Services</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Citizens expect seamless, digital services. We help government agencies overcome the core challenges of data silos and aging infrastructure to build a more intelligent and responsive public sector.
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
                           We provide the foundational engineering and AI capabilities to help government agencies modernize and transform their operations.
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
                title="Ready to Modernize Your Mission?"
                subtitle="Let's discuss how a secure, unified data platform can help your organization deliver better services and achieve its public mission more effectively."
                buttonText="Talk to a Public Sector Specialist"
            />
        </div>
    );
};

export default PublicSectorPage;
