
import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import Button from '../ui/Button';
import { RocketLaunchIcon, UserGroupIcon, GlobeAltIcon, SparklesIcon, EyeIcon, HeartIcon, GlobeAmericasIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import CallToActionSection from '../ui/CallToActionSection';

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

const commitments = [
    {
        name: "Responsible AI & Digital Trust",
        description: "We build systems governed by security, transparency, and fairness, ensuring our technology is trustworthy and accountable.",
        href: "/responsible-ai",
        icon: ShieldCheckIcon
    },
    {
        name: "Inclusion & Diversity",
        description: "We are committed to building a team that reflects the global community we serve and to designing inclusive, equitable technology.",
        href: "/inclusion",
        icon: GlobeAmericasIcon
    },
    {
        name: "Sustainability",
        description: "We empower our clients to build more efficient operations while minimizing our own environmental footprint.",
        href: "/sustainability",
        icon: HeartIcon
    },
    {
        name: "AI for Good",
        description: "We leverage our expertise and platforms to contribute to a better, more equitable, and sustainable world.",
        href: "/ai-for-good",
        icon: ScaleIcon
    }
];

const AboutPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="About Akin"
                title="We build the AI platforms that power the world's most complex operations."
                subtitle="Akin Technology's mission is to move AI from the lab to the real world. We are engineers and data scientists who partner with industry-leading organizations to build bespoke, end-to-end AI operating systems."
            />

            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        Our Purpose: To Architect Intelligence
                    </h2>
                    <p className="mt-6 text-xl text-akin-text-light">
                        Our purpose is to bridge the gap between AI's potential and its operational reality. We architect bespoke AI operating systems that empower the world's most critical industries to solve their hardest problems, augmenting human expertise and building a more efficient, resilient, and intelligent future.
                    </p>
                </div>
            </section>

             <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Shared Values: The Principles That Guide Us
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                            These four principles are the foundation of our culture and the blueprint for how we deliver on our purpose.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {values.map((value) => (
                             <Card key={value.name}>
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 bg-akin-cyan/10 p-3 rounded-lg">
                                        <value.icon className="h-10 w-10 text-akin-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-akin-text-dark">{value.name}</h3>
                                        <p className="mt-2 text-lg text-akin-text-light">{value.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
             </section>
             
             <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="md:order-last">
                        <EyeIcon className="h-16 w-16 text-akin-cyan mb-4" />
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           Our Vision: The Autonomous Enterprise
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                           We envision a future where organizations are not just automated, but autonomous. A future where intelligent systems can anticipate disruptions, optimize operations in real-time, and continuously learn and adapt without constant human intervention.
                        </p>
                         <p className="mt-4 text-lg text-akin-text-light">
                           This is the 'self-driving' enterprise—resilient, efficient, and constantly evolving. The Akin AI Operating System is the foundational technology built to power this future, transforming businesses from reactive organizations into living, cognitive organisms.
                        </p>
                    </div>
                     <img src="/images/future-vision.jpg" alt="Futuristic autonomous enterprise concept" className="rounded-lg shadow-xl" />
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Commitments
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           We are committed to building a future that is not only intelligent but also equitable, sustainable, and responsible. Our commitments are an integral part of our identity and guide our impact on the world.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {commitments.map((commitment) => (
                            <Card key={commitment.name} className="flex flex-col text-center">
                                <commitment.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="text-xl font-bold mt-4">{commitment.name}</h3>
                                <p className="mt-2 text-akin-text-light flex-grow">{commitment.description}</p>
                                <div className="mt-6">
                                    <Button to={commitment.href} primary={false}>Learn More</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <CallToActionSection
                title="Join Us in Architecting the Future."
                subtitle="Whether you're looking to transform your operations or build the technology that powers that transformation, we're looking for partners and pioneers. Let's connect."
                buttonText="Start a Conversation"
            />
        </div>
    );
};

export default AboutPage;
