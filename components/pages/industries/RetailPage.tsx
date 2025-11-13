
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ChartBarIcon, ShoppingCartIcon, UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const RetailPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Industries / Retail & Consumer Products"
                title="Engineering the Future of Retail"
                subtitle="In a world of infinite choice, the retailers who win are those who can anticipate customer needs, optimize operations, and deliver a seamless experience. We build the intelligent core that makes it possible."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <section>
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">The Retail Revolution is Data-Driven</h2>
                            <div className="mt-6 prose prose-lg max-w-none text-akin-text-light prose-headings:text-akin-text-dark prose-strong:text-akin-text-dark">
                                <p>Today's consumer expects personalization, convenience, and value. Meeting these expectations at scale requires moving from reactive decision-making to predictive, data-driven operations. We solve the core data challenges that hold retailers back.</p>
                                <p>Our bespoke AI Operating Systems unify siloed customer data, complex supply chain feeds, and real-time inventory levels into a single, intelligent model of your business. This "digital twin" becomes the foundation for building a truly cognitive retail operation.</p>
                            </div>
                        </section>
                        
                        <section className="mt-16">
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">Our Capabilities</h2>
                             <div className="mt-8 space-y-8">
                                <div className="flex items-start gap-6">
                                    <ChartBarIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">AI-Powered Demand Forecasting</h3>
                                        <p className="mt-1 text-akin-text-light">Our models analyze historical data, market trends, and external signals to predict demand with unparalleled accuracy, from a single SKU to an entire category.</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-6">
                                    <UserGroupIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Unified Customer Ontology</h3>
                                        <p className="mt-1 text-akin-text-light">We create a single, 360-degree view of your customer, enabling hyper-personalized marketing, product recommendations, and loyalty programs that drive lifetime value.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <ShoppingCartIcon className="h-12 w-12 text-akin-cyan flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold">Intelligent Commerce Platforms</h3>
                                        <p className="mt-1 text-akin-text-light">We architect and build scalable e-commerce and omnichannel solutions that optimize everything from inventory management to the last-mile delivery experience.</p>
                                    </div>
                                </div>
                             </div>
                        </section>
                    </div>
                    <aside className="lg:col-span-1 space-y-8 lg:sticky top-28 self-start">
                        <Card>
                             <h3 className="text-xl font-bold text-akin-text-dark">Key Challenges Solved</h3>
                             <ul className="mt-4 space-y-3 text-akin-text-light">
                                <li className="flex gap-3"><ArrowTrendingUpIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Inaccurate Demand Forecasting</span></li>
                                <li className="flex gap-3"><ArrowTrendingUpIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Siloed Customer Data</span></li>
                                <li className="flex gap-3"><ArrowTrendingUpIcon className="h-6 w-6 text-green-500 flex-shrink-0" /><span>Supply Chain Disruptions</span></li>
                             </ul>
                        </Card>
                         <Card>
                             <h3 className="text-xl font-bold text-akin-text-dark">Client Outcomes</h3>
                             <div className="mt-4 space-y-4">
                                <div>
                                    <p className="text-3xl font-extrabold text-akin-cyan">+20%</p>
                                    <p className="text-akin-text-light">Increase in forecast accuracy.</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-akin-cyan">-15%</p>
                                    <p className="text-akin-text-light">Reduction in stockouts.</p>
                                </div>
                             </div>
                        </Card>
                    </aside>
                </div>

            </main>

            <CallToActionSection
                title="Ready to Build Your Retail Future?"
                subtitle="Let's discuss how a bespoke AI operating system can unify your data, optimize your operations, and create a sustainable competitive advantage."
                buttonText="Talk to a Retail Specialist"
            />
        </div>
    );
};

export default RetailPage;