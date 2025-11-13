
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';

const LeadershipPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Our Leadership"
                subtitle="Meet the visionary founder dedicated to bridging the gap between complex business problems and transformative technology solutions."
            />

            <main className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Founder Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Founder & Vision
                        </h2>
                    </div>
                    
                    <div className="bg-gradient-to-br from-akin-cyan/5 to-transparent rounded-2xl p-8 md:p-12 border border-akin-cyan/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                            {/* Image Section */}
                            <div className="flex justify-center md:justify-start">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-akin-cyan/20 to-transparent rounded-2xl blur-xl"></div>
                                    <img 
                                        src="/images/suren.jpg" 
                                        alt="Portrait of Suren Amarasekhara, Founder of Akin Pte Ltd" 
                                        className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl border-4 border-white"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:col-span-2">
                                <h3 className="text-3xl font-bold text-akin-text-dark mb-2">
                                    Suren Amarasekhara
                                </h3>
                                <p className="text-xl text-akin-cyan font-semibold mb-6">
                                    Founder, Akin Pte Ltd
                                </p>

                                {/* Education & Background */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-akin-text-dark mb-3">Education & Credentials</h4>
                                    <ul className="space-y-2 text-akin-text-light">
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>Master's in Computer Systems Engineering</strong> – Syracuse University, New York</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>Bachelor's in Computer Systems Engineering</strong> – Syracuse University, New York</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>MBA</strong> – Booth School of Business, University of Chicago</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-akin-text-dark mb-3">Leadership Experience</h4>
                                    <p className="text-akin-text-light mb-3">
                                        With over 30 years of experience in technology and business leadership, Suren has held senior executive positions including CEO, Managing Director, and Chief Operating Officer at multi-billion dollar organizations:
                                    </p>
                                    <ul className="space-y-2 text-akin-text-light">
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>SingTel</strong> – Singapore's leading telecommunications provider</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>Axiata</strong> – Major Asian telecommunications conglomerate</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-akin-cyan mr-3 font-bold">•</span>
                                            <span><strong>Usaha Tegas Group</strong> – Leading regional enterprise</span>
                                        </li>
                                    </ul>
                                    <p className="text-akin-text-light mt-3">
                                        His in-country expertise spans Singapore, Malaysia, India, Nepal, and Sri Lanka, providing deep regional insights and operational excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className="mt-12 pt-12 border-t border-akin-cyan/20">
                            <h4 className="text-2xl font-bold text-akin-text-dark mb-6">The Akin Vision</h4>
                            <p className="text-lg text-akin-text-light mb-6 leading-relaxed">
                                After decades of engaging with multinational corporations, Suren identified a critical gap in the market: <strong className="text-akin-text-dark">businesses lacked a trusted partner to deliver truly tailored technology solutions</strong>. This insight became the catalyst for founding Akin Pte Ltd in Singapore in 2019.
                            </p>
                            <p className="text-lg text-akin-text-light leading-relaxed">
                                Akin was created to fill this role, empowering businesses to thrive by unlocking their full potential through intelligent, bespoke enterprise solutions that bridge the gap between complex business problems and transformative technology.
                            </p>
                        </div>

                        {/* Founder's Message */}
                        <div className="mt-12 pt-12 border-t border-akin-cyan/20">
                            <h4 className="text-2xl font-bold text-akin-text-dark mb-6">A Message from Our Founder</h4>
                            <blockquote className="border-l-4 border-akin-cyan pl-6 italic text-lg text-akin-text-light leading-relaxed">
                                "For over three decades, I've seen that technology succeeds only when it solves real human problems. Business owners often struggle with disconnected systems that obscure the customer picture. We built-in a basic CRM within Akin bespoke ERP to solve this exact pain point. It's about giving you the tools to not just manage customers, but to truly understand them, fostering the relationships that are the foundation of measurable, sustainable growth."
                            </blockquote>
                        </div>

                        {/* Core Philosophy */}
                        <div className="mt-12 pt-12 border-t border-akin-cyan/20">
                            <h4 className="text-2xl font-bold text-akin-text-dark mb-6">Core Philosophy</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg p-6 border border-akin-cyan/20">
                                    <h5 className="text-lg font-bold text-akin-cyan mb-3">Excellence in Technology</h5>
                                    <p className="text-akin-text-light">
                                        A lifelong advocate for delivering world-class technology solutions that drive real business impact.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-6 border border-akin-cyan/20">
                                    <h5 className="text-lg font-bold text-akin-cyan mb-3">Customer Understanding</h5>
                                    <p className="text-akin-text-light">
                                        Building solutions that enable businesses to truly understand and nurture customer relationships.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-6 border border-akin-cyan/20">
                                    <h5 className="text-lg font-bold text-akin-cyan mb-3">Sustainable Growth</h5>
                                    <p className="text-akin-text-light">
                                        Empowering organizations to achieve measurable, sustainable growth through tailored technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <CallToActionSection
                title="Join Our Mission"
                subtitle="We are always looking for passionate builders and innovators to join our team. If you're ready to tackle the hardest problems in AI and enterprise technology, we want to hear from you."
                buttonText="View Open Roles"
                buttonLink="/careers"
            />
        </div>
    );
};

export default LeadershipPage;
