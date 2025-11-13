
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { CloudArrowUpIcon, CpuChipIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';

const SustainabilityPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Thinking"
                title="Engineering a Sustainable Future"
                subtitle="We believe that intelligent technology is one of the most powerful tools we have to address the world's pressing environmental challenges. Our commitment to sustainability is twofold: minimizing our own footprint and empowering our clients to build more efficient and sustainable operations."
            />

            <main className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Dual Approach to Sustainability
                        </h2>
                    </div>

                    <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-akin-text-dark">1. Sustainable by Design: Our Operations</h3>
                            <p className="mt-4 text-lg text-akin-text-light">We are committed to running a responsible business. This includes leveraging efficient cloud infrastructure to minimize the energy consumption of our platforms, promoting remote-first work policies to reduce our carbon footprint, and partnering with suppliers who share our commitment to environmental stewardship.</p>
                        </div>
                        <img src="/images/sustainability-ops.jpg" alt="Sustainable cloud operations" className="rounded-lg shadow-xl" />
                    </div>

                    <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
                         <img src="/images/sustainability-solutions.jpg" alt="AI optimizing a power grid" className="rounded-lg shadow-xl lg:order-last" />
                        <div>
                            <h3 className="text-2xl font-bold text-akin-text-dark">2. Sustainable by Impact: Our Solutions</h3>
                            <p className="mt-4 text-lg text-akin-text-light">The greatest impact we can have is through the systems we build. Our AI Operating Systems are designed to solve challenges at the heart of industrial efficiency and sustainability.</p>
                            <div className="mt-6 space-y-4">
                                <Card className="flex items-start gap-4">
                                    <ChartBarIcon className="h-8 w-8 text-akin-cyan flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Optimized Energy Grids</h4>
                                        <p className="text-akin-text-light">Our platforms help utilities forecast demand and integrate renewables, reducing waste and creating a more stable, efficient grid.</p>
                                    </div>
                                </Card>
                                 <Card className="flex items-start gap-4">
                                    <CpuChipIcon className="h-8 w-8 text-akin-cyan flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Reduced Industrial Waste</h4>
                                        <p className="text-akin-text-light">Predictive maintenance models reduce equipment failure and material waste, while automated quality control minimizes defective products.</p>
                                    </div>
                                </Card>
                                 <Card className="flex items-start gap-4">
                                    <CloudArrowUpIcon className="h-8 w-8 text-akin-cyan flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Resilient Supply Chains</h4>
                                        <p className="text-akin-text-light">By optimizing logistics networks and demand forecasting, we help reduce emissions from transport and minimize waste from overstocking.</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <CallToActionSection
                title="Build a More Efficient Operation"
                subtitle="Sustainability and operational excellence are two sides of the same coin. Let's explore how a bespoke AI OS can help you achieve both."
                buttonText="Talk to an Engineer"
                buttonLink="/contact"
            />
        </div>
    );
};

export default SustainabilityPage;
