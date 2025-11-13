
import React, { useRef } from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EyeIcon, WrenchScrewdriverIcon, BeakerIcon, RocketLaunchIcon, ArrowPathIcon, ServerStackIcon, CircleStackIcon, CpuChipIcon, TruckIcon, ArrowTrendingUpIcon, ChartBarIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

const phases = [
  {
    name: 'Vision & Strategy',
    description: 'We define the problem, identify the highest-value opportunities, and design the target-state architecture.',
    href: '/velocity-approach/vision',
    icon: EyeIcon,
  },
  {
    name: 'Engineering & Integration',
    description: 'We build the core data infrastructure, integrating legacy systems and creating robust data pipelines.',
    href: '/velocity-approach/engineering',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Logic & Modeling',
    description: 'Our data scientists develop and train bespoke AI/ML models that encode your unique business logic.',
    href: '/velocity-approach/logic',
    icon: BeakerIcon,
  },
  {
    name: 'Operationalize & Deploy',
    description: 'We deploy the full platform into your live environment using our autonomous deployment framework.',
    href: '/velocity-approach/operationalize',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Collaborate & Evolve',
    description: 'We treat the platform as a living asset, continuously monitoring, refining, and deploying new capabilities.',
    href: '/velocity-approach/collaborate-evolve',
    icon: ArrowPathIcon,
  },
];

const ChaosIcon: React.FC<{icon: React.ElementType, name: string}> = ({icon: Icon, name}) => (
    <div className="flex flex-col items-center gap-2 text-center text-akin-text-light">
        <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
            <Icon className="h-8 w-8" />
        </div>
        <p className="font-semibold text-sm">{name}</p>
    </div>
);

// New component for the unified sources
const SourceIcon: React.FC<{icon: React.ElementType, name: string}> = ({icon: Icon, name}) => (
    <div className="flex flex-col items-center gap-2 text-center text-akin-text-light">
        <div className="w-16 h-16 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
            <Icon className="h-8 w-8" />
        </div>
        <p className="font-semibold text-sm">{name}</p>
    </div>
);

// Replaced ClarityIcon with OutcomeIcon for clarity in the new design
const OutcomeIcon: React.FC<{icon: React.ElementType, name: string}> = ({icon: Icon, name}) => (
    <div className="flex flex-col items-center gap-2 text-center text-green-700">
        <div className="w-20 h-20 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center shadow-md">
            <Icon className="h-10 w-10" />
        </div>
        <p className="font-semibold text-sm">{name}</p>
    </div>
);

// New arrow component for data flow visualization
const ArrowUp: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg className={`w-8 h-12 ${className}`} viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 34V2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 2L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const VelocityApproachPage: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: timelineRef,
      offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <div>
        <Hero
            breadcrumb='How We Do It'
            title='The VELOCITY Approach'
            subtitle="Our methodology is an end-to-end engineering discipline designed to move AI from vision to operational reality with speed and precision. It's how we build."
        />
        
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        A Unified Framework for Impact
                    </h2>
                </div>
                <div className="mt-8 space-y-6 text-lg text-akin-text-light text-left">
                    <p>
                        The VELOCITY framework is more than a process; it's a unified workflow that integrates strategy, data science, and engineering into a single, cohesive delivery engine. It ensures that every action we take is directly tied to a measurable business outcome.
                    </p>
                    <p>
                        This approach eliminates the friction between ideation and implementation, allowing us to build momentum, mobilize teams, and accelerate the delivery of tangible value. Explore each phase of our approach to understand how we turn ambitious goals into operational AI systems.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        From Fragmentation to Focus: Our Transformative Process
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-akin-text-light">
                        Our methodology is a journey. It starts by untangling the complexity of your siloed data and culminates in clear, actionable, AI-driven outcomes. We transform chaos into a unified, intelligent core for your business.
                    </p>
                </div>

                <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
                    {/* BEFORE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="p-8 border-2 border-dashed border-gray-300 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold text-center text-akin-text-dark">Before Akin: The Chaos</h3>
                        <p className="text-center text-akin-text-light mt-2 mb-8">Data is trapped, insights are impossible, and operations are reactive.</p>
                        <div className="relative h-64 grid grid-cols-2 content-around gap-8">
                            <ChaosIcon icon={ServerStackIcon} name="ERP" />
                            <ChaosIcon icon={CircleStackIcon} name="Data Lake" />
                            <ChaosIcon icon={CpuChipIcon} name="SCADA" />
                            <ChaosIcon icon={TruckIcon} name="Logistics Feed" />
                            {/* Chaotic lines */}
                            <svg className="absolute w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M25 25 L 75 75" stroke="#d1d5db" strokeWidth="1" />
                                <path d="M25 75 L 75 25" stroke="#d1d5db" strokeWidth="1" />
                                <path d="M25 50 L 75 50" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* AFTER */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="p-8 bg-white border-2 border-akin-cyan/50 rounded-lg shadow-xl"
                    >
                         <h3 className="text-2xl font-bold text-center text-akin-text-dark">After Akin: The Clarity</h3>
                         <p className="text-center text-akin-text-light mt-2 mb-8">A Unified Ontology creates an intelligent asset that drives predictive outcomes.</p>
                        <div className="flex flex-col items-center justify-center gap-6 py-4 min-h-[28rem]">
                            {/* Outcomes */}
                            <div className="flex justify-around w-full">
                                <OutcomeIcon icon={ArrowTrendingUpIcon} name="Predictive Maint." />
                                <OutcomeIcon icon={ChartBarIcon} name="Demand Forecasting" />
                                <OutcomeIcon icon={BuildingStorefrontIcon} name="Inventory Opt." />
                            </div>

                            <ArrowUp className="text-akin-cyan" />

                            {/* Unified Ontology */}
                            <div className="flex flex-col items-center gap-2 text-center text-akin-text-dark">
                                <div className="w-28 h-28 bg-akin-cyan rounded-full flex items-center justify-center shadow-lg shadow-akin-cyan/50">
                                    <CpuChipIcon className="h-16 w-16 text-white" />
                                </div>
                                <p className="font-bold text-lg">Unified Ontology</p>
                            </div>

                            <ArrowUp className="text-gray-400" />

                            {/* Data Sources */}
                            <div className="w-full flex justify-around items-center flex-wrap gap-4 pt-6 border-t-2 border-dashed border-gray-300">
                                <SourceIcon icon={ServerStackIcon} name="ERP" />
                                <SourceIcon icon={CircleStackIcon} name="Data Lake" />
                                <SourceIcon icon={CpuChipIcon} name="SCADA" />
                                <SourceIcon icon={TruckIcon} name="Logistics Feed" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>


        <section className="py-20 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        Explore the Phases
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                        Dive deep into each of the five phases that make up our end-to-end delivery model.
                    </p>
                </div>
                 <div ref={timelineRef} className="mt-16 max-w-3xl mx-auto">
                  <div className="relative">
                    {/* The animated timeline line */}
                    <motion.div
                        className="absolute left-6 top-0 w-1 h-full bg-akin-cyan origin-top"
                        style={{ scaleY }}
                        aria-hidden="true"
                    />
                    
                    {phases.map((phase, index) => (
                      <motion.div
                        key={phase.name}
                        className={`relative pl-16 ${index === phases.length - 1 ? '' : 'pb-16'}`}
                        variants={timelineItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {/* The timeline dot and icon */}
                        <div className="absolute left-0 top-0">
                          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center ring-8 ring-gray-50">
                            <phase.icon className="h-6 w-6 text-akin-cyan" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h3 className="text-2xl font-bold text-akin-text-dark">{phase.name}</h3>
                          <p className="mt-2 text-lg text-akin-text-light">{phase.description}</p>
                          <Link to={phase.href} className="inline-block mt-4 font-semibold text-akin-cyan hover:text-akin-text-dark transition-colors">
                            Explore Phase &rarr;
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
        </section>


        <CallToActionSection
            title="Ready to Build with VELOCITY?"
            subtitle="Let's transform your most pressing challenge into a technological victory. Our approach is designed to deliver impact, fast."
            buttonText="Start the Conversation"
        />
    </div>
  );
};

export default VelocityApproachPage;
