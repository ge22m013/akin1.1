
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import { CloudIcon, CpuChipIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

const partners = {
    cloud: [
        { name: 'Amazon Web Services', logo: '/images/partners/aws.png' },
        { name: 'Google Cloud Platform', logo: '/images/partners/gcp.png' },
        { name: 'Microsoft Azure', logo: '/images/partners/azure.png' },
    ],
    technology: [
        { name: 'Databricks', logo: '/images/partners/databricks.png' },
        { name: 'Snowflake', logo: '/images/partners/snowflake.png' },
        { name: 'NVIDIA', logo: '/images/partners/nvidia.png' },
        { name: 'MongoDB', logo: '/images/partners/mongodb.png' },
    ],
    strategic: [
        { name: 'MIT AI Lab', logo: '/images/partners/mit.png' },
        { name: 'Stanford AI', logo: '/images/partners/stanford.png' },
    ],
};

const PartnerSection: React.FC<{ title: string; icon: React.ElementType; partners: { name: string; logo: string }[] }> = ({ title, icon: Icon, partners }) => (
    <section className="mt-20">
        <div className="flex items-center gap-4">
            <Icon className="h-10 w-10 text-akin-cyan" />
            <h2 className="text-3xl font-extrabold text-akin-text-dark">{title}</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {partners.map(p => (
                <div key={p.name} className="flex justify-center p-4 bg-gray-50 rounded-lg">
                    <img src={p.logo} alt={`${p.name} logo`} className="h-16 object-contain" title={p.name} />
                </div>
            ))}
        </div>
    </section>
);

const PartnersPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Platform"
                title="Our Partner Ecosystem"
                subtitle="We build on the shoulders of giants. Our strong partnerships with the world's leading technology providers ensure our bespoke platforms are built with best-in-class, enterprise-grade components."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                       An Open, Interoperable Architecture
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                        We don't believe in vendor lock-in. Our open architecture is designed to integrate seamlessly with the tools and platforms you already use. Our partnerships are a reflection of this philosophy, enabling us to deliver flexible, future-proof solutions.
                    </p>
                </div>
                
                <PartnerSection title="Cloud Partners" icon={CloudIcon} partners={partners.cloud} />
                <PartnerSection title="Technology Partners" icon={CpuChipIcon} partners={partners.technology} />
                <PartnerSection title="Strategic & Research Partners" icon={BuildingOffice2Icon} partners={partners.strategic} />

            </main>

            <CallToActionSection
                title="Interested in Partnering with Akin?"
                subtitle="We are always looking to expand our ecosystem with innovative technology providers and strategic partners. If you're interested in building the future of operational AI with us, let's connect."
                buttonText="Contact our Partnerships Team"
                buttonLink="/contact"
            />
        </div>
    );
};

export default PartnersPage;
