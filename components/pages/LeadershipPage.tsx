
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';

const leaders = [
    {
        name: 'Jane Doe',
        title: 'Chief Executive Officer',
        bio: 'With over 20 years of experience at the intersection of technology and industry, Jane provides the strategic vision that guides Akin\'s mission to operationalize AI.',
        imgSrc: '/images/leader1.jpg'
    },
    {
        name: 'John Smith',
        title: 'Chief Technology Officer',
        bio: 'A systems architect at heart, John leads our engineering organization. He is responsible for the technical vision and architectural principles that ensure our platforms are robust, scalable, and secure.',
        imgSrc: '/images/leader2.jpg'
    },
    {
        name: 'Emily Chen',
        title: 'Chief AI Officer',
        bio: 'Emily directs our data science and machine learning practices. Her research in ontology-grounded AI ensures our solutions remain at the cutting edge of what\'s possible.',
        imgSrc: '/images/leader3.jpg'
    },
    {
        name: 'Michael Brown',
        title: 'Chief Operating Officer',
        bio: 'Michael is responsible for ensuring our VELOCITY methodology translates into seamless delivery and exceptional client outcomes, overseeing all aspects of our operational execution.',
        imgSrc: '/images/leader4.jpg'
    },
];

const LeadershipPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Our Leadership"
                subtitle="Meet the experienced team of technologists and strategists dedicated to architecting the future of intelligent operations."
            />

            <main className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        A Team Built on Engineering Excellence
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                        Our leadership team combines deep technical expertise with a proven track record of transforming complex industrial operations. We are builders and problem-solvers, united by a passion for creating technology that delivers tangible, real-world impact.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {leaders.map(leader => (
                        <Card key={leader.name} className="text-center">
                            <img src={leader.imgSrc} alt={`Portrait of ${leader.name}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-akin-text-dark">{leader.name}</h3>
                            <p className="text-akin-cyan font-semibold">{leader.title}</p>
                            <p className="mt-2 text-akin-text-light">{leader.bio}</p>
                        </Card>
                    ))}
                </div>
            </main>

            <CallToActionSection
                title="Join Our Mission"
                subtitle="We are always looking for passionate builders and innovators to join our team. If you're ready to tackle the hardest problems in AI, we want to hear from you."
                buttonText="View Open Roles"
                buttonLink="/careers"
            />
        </div>
    );
};

export default LeadershipPage;
