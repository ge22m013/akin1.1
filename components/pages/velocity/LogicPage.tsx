
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { BeakerIcon, ArrowTrendingUpIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const model = [
    { name: 'Feature Engineering', description: 'We leverage the rich context of the Unified Ontology to engineer powerful features that significantly improve model accuracy and performance.' },
    { name: 'Bespoke Model Development', description: 'We select, train, and fine-tune the right algorithms—from classical machine learning to deep learning—to solve your specific problem.' },
    { name: 'Rigorous Validation & Testing', description: 'Our models undergo a rigorous testing and validation process to ensure they are accurate, fair, and robust before being considered for deployment.' },
];

const LogicPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="VELOCITY Approach / Logic & Modeling"
                title="Phase 3: Logic & Modeling"
                subtitle="With a unified data foundation in place, our data scientists now build the intelligence. This phase encodes your unique business logic into bespoke AI/ML models."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">From Data to Insight</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           This is where raw data is transformed into predictive power. Working directly on the Unified Ontology, our data scientists have the rich, contextual data needed to build highly accurate and effective models. We don't just apply generic algorithms; we craft solutions that understand the nuances of your operation.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Modeling Process</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                            Our iterative process ensures we develop models that are not just technically sound, but also aligned with your business objectives.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {model.map(item => (
                            <Card key={item.name} className="text-center">
                                <h3 className="text-xl font-bold text-akin-text-dark">{item.name}</h3>
                                <p className="mt-2 text-akin-text-light">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">What You Can Expect</h2>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <Card><p className="text-lg font-semibold">A set of production-ready, bespoke AI models trained on your data.</p></Card>
                        <Card><p className="text-lg font-semibold">Comprehensive documentation of model performance and validation metrics.</p></Card>
                        <Card><p className="text-lg font-semibold">A clear path to deploying these models into your live operational workflow.</p></Card>
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready for Phase 4: Operationalize & Deploy?"
                subtitle="A model is only valuable when it's running in production. Explore how we move your new intelligence from the lab to the live environment."
                buttonText="Explore Operationalize & Deploy"
                buttonLink="/velocity-approach/operationalize"
            />
        </div>
    );
};

export default LogicPage;
