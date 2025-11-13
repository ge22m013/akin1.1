
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { UserGroupIcon, GlobeAmericasIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const pillars = [
    {
        icon: UserGroupIcon,
        title: 'Diverse Teams Build Better Systems',
        text: "Innovation thrives on diverse perspectives. We are committed to building a team that reflects the global community we serve. By bringing together engineers and scientists from different backgrounds, experiences, and disciplines, we challenge our assumptions, mitigate biases, and ultimately create more robust and resilient AI systems."
    },
    {
        icon: GlobeAmericasIcon,
        title: 'Inclusive Technology by Design',
        text: "AI systems have the potential to reinforce existing societal biases. We take this responsibility seriously. Our engineering methodology includes rigorous processes for bias detection and mitigation in both data and models. We build for fairness and accessibility, ensuring the systems we deploy are equitable and serve everyone effectively."
    },
    {
        icon: ScaleIcon,
        title: 'An Equitable and Empowering Culture',
        text: "Inclusion is more than just representation; it's about creating an environment where every voice is heard, valued, and empowered. We are dedicated to fostering a culture of psychological safety, continuous learning, and equitable opportunity, ensuring that everyone at Akin has the support and resources they need to do their best work and grow their careers."
    }
];

const InclusionPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Inclusion & Diversity"
                subtitle="We are building the future of intelligence. That future must be equitable, responsible, and inclusive for all."
            />

            <main className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Commitment
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-akin-text-light">
                            Our mission to build operational AI is inseparable from our commitment to building a diverse team and inclusive technology. One cannot succeed without the other.
                        </p>
                    </div>

                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {pillars.map(pillar => (
                            <Card key={pillar.title} className="text-center">
                                <pillar.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="mt-6 text-xl font-bold text-akin-text-dark">{pillar.title}</h3>
                                <p className="mt-2 text-akin-text-light">{pillar.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <CallToActionSection
                title="Join Our Mission-Driven Team"
                subtitle="We are looking for talented individuals from all backgrounds who are passionate about building the future of responsible AI. Explore our open roles and help us build a more inclusive technological landscape."
                buttonText="View Careers at Akin"
                buttonLink="/careers"
            />
        </div>
    );
};

export default InclusionPage;