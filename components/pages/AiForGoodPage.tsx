
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { HeartIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const pillars = [
    {
        icon: HeartIcon,
        title: 'Pro-Bono & Non-Profit Partnerships',
        text: "We dedicate a portion of our engineering resources to partnering with non-profit organizations and academic institutions. By applying our expertise in operational AI to social and environmental challenges, we aim to help these organizations amplify their impact and achieve their missions more effectively."
    },
    {
        icon: CodeBracketIcon,
        title: 'Open-Source Contributions',
        text: "We believe in the power of the open-source community to accelerate innovation. We actively contribute to the open-source tools and frameworks we use in our platforms, sharing our improvements and helping to build a more robust and accessible ecosystem for all developers and data scientists."
    },
    {
        icon: AcademicCapIcon,
        title: 'AI for All: Education & Mentorship',
        text: "Demystifying AI and making it accessible is crucial for an equitable future. Our team members volunteer their time for mentorship programs, educational workshops, and guest lectures to inspire the next generation of technologists and to help bridge the talent gap in our communities."
    }
];

const AiForGoodPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Thinking"
                title="AI for Good"
                subtitle="We believe that technology should be a force for positive change. Our 'AI for Good' initiative is our commitment to leveraging our expertise, resources, and platforms to contribute to a better, more equitable, and sustainable world."
            />

            <main className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Pillars of Impact
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-akin-text-light">
                            Our commitment extends beyond our client work into three key areas of community and social impact.
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
                title="Partner With Us for Impact"
                subtitle="Are you a non-profit, researcher, or community organization with a complex data challenge? We are always looking for impactful projects where our technology can make a difference. Reach out to discuss a potential partnership."
                buttonText="Contact Us for Partnerships"
                buttonLink="/contact"
            />
        </div>
    );
};

export default AiForGoodPage;
