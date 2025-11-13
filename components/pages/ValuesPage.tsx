
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { RocketLaunchIcon, UserGroupIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';

const values = [
    {
        name: 'Engineering Excellence',
        description: "We are engineers, not academics. We build robust, scalable, and secure systems for mission-critical operations. Our culture is rooted in a deep respect for technical craftsmanship, elegant architecture, and pragmatic problem-solving. We believe that the best strategy is a well-executed deployment.",
        icon: RocketLaunchIcon
    },
    {
        name: 'Deep Collaboration',
        description: "We are partners, not vendors. We embed with our clients' teams to understand their operational reality from the inside out. Internally, we foster a low-ego environment where the best idea wins, regardless of title. This deep, cross-functional collaboration is the catalyst for building solutions that deliver lasting, transformative value.",
        icon: UserGroupIcon
    },
    {
        name: 'Operational Focus',
        description: "Our work is not done until the model is running, live, in your operation. We are defined by real-world impact, not by slide decks or proofs-of-concept. This singular focus on operationalizing AI drives every decision we make, from initial architectural design to our continuous deployment and evolution frameworks.",
        icon: GlobeAltIcon
    },
    {
        name: 'Passionate Community',
        description: "We are a dynamic community of technologists motivated by purpose. We are building a company where passionate, curious, and driven people can do their best work. We believe that diverse, inclusive teams build more resilient, responsible, and innovative technology, and we are committed to fostering an environment where everyone can thrive.",
        icon: SparklesIcon
    },
];

const ValuesPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Our Values"
                subtitle="These are the shared principles that guide our decisions, our collaborations, and our commitment to engineering excellence. They are the blueprint for our culture."
            />

            <main className="py-20 md:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-20">
                    {values.map((value, index) => (
                        <section key={value.name} className="grid md:grid-cols-3 gap-8 items-center">
                            <div className={`flex justify-center md:justify-start ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                <div className="bg-akin-cyan/10 p-6 rounded-full">
                                    <value.icon className="h-24 w-24 text-akin-cyan" />
                                </div>
                            </div>
                            <div className="md:col-span-2 text-center md:text-left">
                                <h2 className="text-3xl font-extrabold text-akin-text-dark">{value.name}</h2>
                                <p className="mt-4 text-xl text-akin-text-light">{value.description}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <CallToActionSection
                title="Join a Values-Driven Team"
                subtitle="If our principles resonate with you, we invite you to explore a career at Akin. We're looking for talented individuals who share our commitment to building impactful, responsible technology."
                buttonText="Explore Careers at Akin"
                buttonLink="/careers"
            />
        </div>
    );
};

export default ValuesPage;