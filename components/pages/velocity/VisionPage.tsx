
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { LightBulbIcon, MapIcon, BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const VisionPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="VELOCITY Approach / Vision & Strategy"
                title="Phase 1: Vision & Strategy"
                subtitle="This is where we translate your most pressing business challenge into a concrete, actionable, and technically-sound plan. We define the 'what' and the 'why' before we build the 'how'."
            />
            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <section>
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">From Ambition to Blueprint</h2>
                            <div className="mt-6 prose prose-lg max-w-none text-akin-text-light">
                                <p>A successful AI implementation begins with absolute clarity. In this phase, we partner with your leadership and operational teams in intensive, collaborative workshops. Our goal is to move beyond surface-level requirements to uncover the highest-value opportunities and define a precise, quantifiable problem statement.</p>
                            </div>
                        </section>
                        
                        <section className="mt-16">
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Vision Model</h2>
                            <p className="mt-4 text-lg text-akin-text-light">Our approach is rooted in the integration of three critical lenses. At their intersection, we uncover the most impactful path forward.</p>
                             <div className="mt-8 space-y-8">
                                <div className="flex items-start gap-6">
                                    <BeakerIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Business Lens</h3>
                                        <p className="mt-1 text-akin-text-light">We anchor every decision in value, feasibility, and strategic viability, ensuring the solution addresses a core business need.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <LightBulbIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Experience Lens</h3>
                                        <p className="mt-1 text-akin-text-light">We identify user needs and pain points to ensure the solution is intuitive, effective, and drives adoption.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <MapIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Capability Lens</h3>
                                        <p className="mt-1 text-akin-text-light">We assess your existing technology landscape to ensure the solution is buildable, scalable, and integrates seamlessly.</p>
                                    </div>
                                </div>
                             </div>
                        </section>
                    </div>
                    <aside className="lg:col-span-1 space-y-8 lg:sticky top-28 self-start">
                        <Card>
                             <h3 className="text-xl font-bold text-akin-text-dark">Key Deliverables</h3>
                             <ul className="mt-4 space-y-3 text-akin-text-light">
                                <li className="flex gap-3"><CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Quantified problem statement</span></li>
                                <li className="flex gap-3"><CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>High-level solution architecture</span></li>
                                <li className="flex gap-3"><CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Defined project scope</span></li>
                                <li className="flex gap-3"><CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Clear timelines and milestones</span></li>
                             </ul>
                        </Card>
                    </aside>
                </div>
            </main>

            <CallToActionSection
                title="Ready for Phase 2: Engineering?"
                subtitle="With a clear blueprint in hand, the next step is to build the foundational data infrastructure. Explore how we turn strategy into robust, operational code."
                buttonText="Explore Engineering & Integration"
                buttonLink="/velocity-approach/engineering"
            />
        </div>
    );
};

export default VisionPage;