
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ShoppingCartIcon, ArrowTrendingUpIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'Intelligent Inventory Management', description: 'Our platforms use AI to forecast demand and automate inventory replenishment, reducing stockouts and minimizing holding costs.', icon: ShoppingCartIcon },
    { name: 'Personalized Customer Journeys', description: 'By unifying customer data, we enable hyper-personalized product recommendations, promotions, and content that increase conversion and loyalty.', icon: UserCircleIcon },
    { name: 'Optimized Pricing & Promotions', description: 'We build dynamic pricing engines that analyze market data, competitor pricing, and customer behavior to optimize your pricing strategy in real-time.', icon: ArrowTrendingUpIcon },
];

const DigitalCommercePage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Solutions / Digital Commerce"
                title="Building the Future of Commerce"
                subtitle="We architect intelligent, scalable, and high-performance commerce platforms that optimize everything from the supply chain to the customer checkout."
            />

            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark">Commerce, Powered by Intelligence</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                           Modern digital commerce is a complex ecosystem. Success requires more than just a storefront; it demands an intelligent, data-driven core that can optimize every aspect of the operation, from supplier to customer.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {capabilities.map(item => (
                            <Card key={item.name} className="text-center">
                                <item.icon className="h-12 w-12 mx-auto text-akin-cyan" />
                                <h3 className="mt-4 text-xl font-bold text-akin-text-dark">{item.name}</h3>
                                <p className="mt-2 text-akin-text-light">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           B2B & B2C Expertise
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                          Our experience spans both complex B2B commerce environments with custom catalogs and pricing, and high-volume B2C platforms focused on customer experience. We build flexible, headless architectures that can adapt to any business model and scale with your growth.
                        </p>
                    </div>
                     <img src="/images/solution-commerce.jpg" alt="Diagram of a commerce ecosystem" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <CallToActionSection
                title="Ready to Scale Your Commerce Platform?"
                subtitle="Let's discuss how our data-driven approach to digital commerce can help you increase efficiency, drive revenue, and build a platform for the future."
                buttonText="Talk to a Commerce Architect"
            />
        </div>
    );
};

export default DigitalCommercePage;
