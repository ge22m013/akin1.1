import React from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import { WrenchScrewdriverIcon, UserGroupIcon, KeyIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import CallToActionSection from '../ui/CallToActionSection';

const culturePillars = [
    {
        title: "Builders, Not Consultants",
        icon: WrenchScrewdriverIcon,
        text: "Our mission is to ship operational code that solves real-world problems. We value pragmatism, a bias for action, and a relentless focus on delivering tangible, mission-critical systems. You'll spend your time architecting and building, not creating slide decks."
    },
    {
        title: "Deep Collaboration, Low Ego",
        icon: UserGroupIcon,
        text: "We are a tight-knit team of experts who believe the best solutions come from collaborative problem-solving. We embed with our clients and our own cross-functional teams, sharing knowledge freely and checking our egos at the door to focus on the best technical outcome."
    },
    {
        title: "Autonomy and Ownership",
        icon: KeyIcon,
        text: "We hire brilliant people and trust them to own problems from end-to-end. You'll be given the autonomy to make key architectural decisions and the accountability to see them through to production, with the support of a world-class team."
    },
    {
        title: "Tackle the Hardest Problems",
        icon: CpuChipIcon,
        text: "We are drawn to complexity. From creating digital twins of global supply chains to developing models that predict grid failures, you'll work on challenges that push the boundaries of AI and have a measurable impact on major industries."
    }
];

const openRoles = [
    {
        title: "AI / Machine Learning Engineer",
        description: "You will design, build, and deploy bespoke machine learning models that form the cognitive core of our clients' operations. You are an expert in moving models from prototype to robust, scalable production systems."
    },
    {
        title: "Data Engineer",
        description: "You are the architect of the data nervous system. You will build the resilient, high-throughput data pipelines that feed our Unified Ontologies, integrating disparate sources and ensuring data integrity and governance."
    },
    {
        title: "Platform Engineer",
        description: "You build the rock-solid infrastructure that our AI Operating Systems run on. You are an expert in cloud-native technologies, MLOps, and building secure, scalable, and reliable platforms for mission-critical applications."
    }
];

const CareersPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Join Our Team"
                title="Stop Maintaining. Start Building."
                subtitle="Join a dynamic community of technologists building the next generation of operational AI. At Akin, you won't just 'consult' or 'advise'—you will engineer, from the ground up."
            />
            
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            An Engineering Culture Built on Impact
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            We are defined by the systems we build and the value we create. Our culture is optimized for engineers who are driven to solve complex challenges and see their work make a real-world difference.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {culturePillars.map((pillar) => (
                             <Card key={pillar.title}>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <pillar.icon className="h-10 w-10 text-akin-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-akin-text-dark">{pillar.title}</h3>
                                        <p className="mt-1 text-akin-text-light">{pillar.text}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        Open Roles
                    </h2>
                    <p className="mt-4 text-lg text-akin-text-light">
                        We are always searching for exceptional talent to join our mission. While we may not have specific openings listed, we are continuously looking for world-class engineers who fit the following profiles.
                    </p>
                    <div className="mt-12 space-y-8 text-left">
                        {openRoles.map(role => (
                            <Card key={role.title}>
                                <h3 className="text-xl font-bold text-akin-text-dark">{role.title}</h3>
                                <p className="mt-2 text-akin-text-light">{role.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready to Build the Future?"
                subtitle="If you are a passionate engineer who thrives on solving complex problems and wants to build systems that matter, we want to hear from you. Start a conversation with our talent team."
                buttonText="Contact Our Talent Team"
                buttonLink="mailto:careers@akintechnology.com"
            />
        </div>
    );
};

export default CareersPage;