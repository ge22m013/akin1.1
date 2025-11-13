
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { ShieldCheckIcon, LightBulbIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const pillars = [
    {
        icon: ShieldCheckIcon,
        title: 'Security & Privacy by Design',
        text: "Data security and privacy are not afterthoughts; they are architected into the core of every platform we build. This foundational principle ensures your most sensitive data is protected from day one."
    },
    {
        icon: LightBulbIcon,
        title: 'Transparency & Explainability (XAI)',
        text: "We build systems that are not opaque 'black boxes.' We provide the tools and methodologies to help you understand why an AI made a certain prediction, which is crucial for adoption, debugging, and governance."
    },
    {
        icon: ScaleIcon,
        title: 'Fairness & Bias Mitigation',
        text: "We acknowledge the inherent risks of bias in AI and are committed to rigorous processes for detecting and mitigating it. This is critical for building equitable systems that you and your customers can trust."
    },
    {
        icon: UserGroupIcon,
        title: 'Human-in-the-Loop Governance',
        text: "Our philosophy is that AI should augment, not replace, human expertise. We design systems with clear points for human oversight, intervention, and ultimate control, ensuring technology always serves its operators."
    }
];

const ResponsibleAiPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Commitments"
                title="Responsible AI & Digital Trust"
                subtitle="We are not just building intelligent systems; we are building trustworthy intelligent systems. Our commitment to Responsible AI is the ethical foundation of our engineering discipline."
            />

            <main className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            The Principles of Trustworthy AI
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-akin-text-light">
                            For our clients, trust is not a feature; it is the foundation of our partnership. Our commitment to Responsible AI is built on four unwavering principles that govern how we design, build, and deploy all of our technology.
                        </p>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        {pillars.map(pillar => (
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
            </main>

            <CallToActionSection
                title="Build AI You Can Trust"
                subtitle="Partner with an engineering firm that puts security, transparency, and ethics at the core of its practice. Let's discuss how we can build a trustworthy AI foundation for your organization."
                buttonText="Start a Conversation"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ResponsibleAiPage;
