
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import { CloudIcon, CircleStackIcon, CogIcon, ShieldCheckIcon, CodeBracketSquareIcon, BeakerIcon } from '@heroicons/react/24/outline';

const principles = [
    { name: 'Ontology-First', text: 'Our architecture is centered around the Unified Ontology, ensuring all components operate on a common, contextual understanding of your business.', icon: CodeBracketSquareIcon },
    { name: 'Cloud-Native & Agnostic', text: 'We build on modern, cloud-native principles and remain cloud-agnostic, allowing us to deploy on the best infrastructure for the job.', icon: CloudIcon },
    { name: 'Security by Design', text: 'Security is not an add-on. We embed enterprise-grade security, privacy, and governance controls into the core of the platform.', icon: ShieldCheckIcon },
];

const stack = {
    data: ['Kafka', 'Spark', 'Airflow', 'Databricks', 'Snowflake'],
    mlops: ['Kubernetes', 'MLflow', 'Docker', 'Seldon Core'],
    backend: ['Python', 'Go', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    frontend: ['React', 'TypeScript', 'TailwindCSS', 'GraphQL'],
};

const TechnologyPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Platform"
                title="Our Technology Stack"
                subtitle="We build bespoke platforms using a modern, best-in-class technology stack, prioritizing scalability, security, and interoperability."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Architectural Principles</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Our technology choices are guided by a core set of architectural principles that ensure the systems we build are robust, flexible, and future-proof.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {principles.map(item => (
                            <Card key={item.name} className="text-center">
                                <item.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="mt-4 text-xl font-bold text-akin-text-dark">{item.name}</h3>
                                <p className="mt-2 text-akin-text-light">{item.text}</p>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section className="mt-24">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Core Technologies</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           While every platform is bespoke, we leverage a curated set of powerful, open, and enterprise-grade technologies.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <div className="flex items-center gap-3 mb-4">
                               <CircleStackIcon className="h-8 w-8 text-akin-cyan" />
                               <h3 className="text-xl font-bold">Data & Processing</h3>
                            </div>
                            <ul className="space-y-2 text-akin-text-light">{stack.data.map(t => <li key={t}>{t}</li>)}</ul>
                        </Card>
                         <Card>
                            <div className="flex items-center gap-3 mb-4">
                               <BeakerIcon className="h-8 w-8 text-akin-cyan" />
                               <h3 className="text-xl font-bold">MLOps & Serving</h3>
                            </div>
                            <ul className="space-y-2 text-akin-text-light">{stack.mlops.map(t => <li key={t}>{t}</li>)}</ul>
                        </Card>
                         <Card>
                            <div className="flex items-center gap-3 mb-4">
                               <CogIcon className="h-8 w-8 text-akin-cyan" />
                               <h3 className="text-xl font-bold">Backend & API</h3>
                            </div>
                            <ul className="space-y-2 text-akin-text-light">{stack.backend.map(t => <li key={t}>{t}</li>)}</ul>
                        </Card>
                         <Card>
                            <div className="flex items-center gap-3 mb-4">
                               <CodeBracketSquareIcon className="h-8 w-8 text-akin-cyan" />
                               <h3 className="text-xl font-bold">Frontend & Experience</h3>
                            </div>
                            <ul className="space-y-2 text-akin-text-light">{stack.frontend.map(t => <li key={t}>{t}</li>)}</ul>
                        </Card>
                    </div>
                </section>

            </main>

            <CallToActionSection
                title="Ready to Build with a Modern Stack?"
                subtitle="Our engineering expertise allows us to select and integrate the best tools for your specific challenge. Let's discuss the right architecture for your goals."
                buttonText="Talk to a Platform Architect"
            />
        </div>
    );
};

export default TechnologyPage;