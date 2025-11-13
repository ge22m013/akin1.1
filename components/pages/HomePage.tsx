
import React, { useRef } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
import { CubeTransparentIcon, BeakerIcon, PuzzlePieceIcon, WrenchScrewdriverIcon, CpuChipIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import TypingAnimation from '../ui/TypingAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import CallToActionSection from '../ui/CallToActionSection';
import { Content } from '../../App';

const methodologyPhases = [
    'Vision & Strategy',
    'Engineering & Integration',
    'Logic & Modeling',
    'Operationalize & Deploy',
    'Collaborate & Evolve'
];

const solutionsContent: Record<string, Content> = {
    'manufacturing': {
        id: 'manufacturing',
        category: 'Industry Solution',
        title: 'Intelligent Manufacturing: The Akin AI OS',
        content: `
            <h3>Overview: From Factory Floor to Front Office</h3>
            <p>Our bespoke AI Operating System for manufacturing creates a unified 'digital twin' of your entire production lifecycle. We connect shop floor machinery (SCADA/MES), supply chain data, and quality control processes into a single, intelligent command center that moves your operation from reactive to predictive.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Unplanned Downtime:</strong> How do we predict equipment failure before it halts production?</li>
                <li><strong>Quality Escapes:</strong> How can we detect product defects in real-time, not at the end of the line?</li>
                <li><strong>Siloed Operations:</strong> How do we synchronize our production schedule with real-time material availability and supply chain disruptions?</li>
            </ul>
            <h3>Core Capabilities Delivered:</h3>
            <ul>
                <li><strong>Predictive Maintenance Ontology:</strong> AI models analyze sensor data to predict equipment failure, minimizing costly downtime.</li>
                <li><strong>Automated Quality Control:</strong> Computer vision models detect product defects on the production line with superhuman accuracy.</li>
                <li><strong>Supply Chain Synchronization:</strong> A unified view of supplier data and logistics ensures your production is always aligned with material availability.</li>
            </ul>
        `
    },
    'logistics': {
        id: 'logistics',
        category: 'Industry Solution',
        title: 'Resilient Supply Chain: The Akin AI OS',
        content: `
            <h3>Overview: From Volatility to Velocity</h3>
            <p>Our AI OS unifies data from carriers, warehouses, and suppliers to give you end-to-end visibility and predictive control. We transform your supply chain from a cost center into a resilient, competitive advantage.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Demand Volatility:</strong> How do we create forecasts that are accurate enough to prevent stockouts and reduce excess inventory?</li>
                <li><strong>Network Inefficiency:</strong> How can we dynamically optimize shipping routes and carrier choices in a constantly changing logistics landscape?</li>
                <li><strong>Lack of Visibility:</strong> How do we get a real-time, single source of truth for inventory and shipments across dozens of partners?</li>
            </ul>
            <h3>Core Capabilities Delivered:</h3>
            <ul>
                <li><strong>AI-Driven Demand Forecasting:</strong> Models that analyze market trends, weather, and other external factors for hyper-accurate demand prediction.</li>
                <li><strong>Inventory & Logistics Optimization:</strong> Maintain optimal stock levels and identify the most efficient shipping routes in real-time.</li>
            </ul>
        `
    },
    'finance': {
        id: 'finance',
        category: 'Industry Solution',
        title: 'AI-Driven Finance & Risk: The Akin AI OS',
        content: `
            <h3>Overview: From Risk to Real-Time Opportunity</h3>
            <p>Navigate market volatility and complex regulatory landscapes with an AI operating system built for the financial sector. We unify transactional data, market feeds, and internal records to create a real-time, holistic view of risk and opportunity.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Sophisticated Fraud:</strong> How can we detect complex, multi-vector fraud attempts in milliseconds?</li>
                <li><strong>Regulatory Burden:</strong> How do we automate compliance monitoring (AML, KYC) to reduce manual overhead and ensure accuracy?</li>
                <li><strong>Static Risk Models:</strong> How do we move beyond historical data to create dynamic credit and risk models that adapt to the market?</li>
            </ul>
            <h3>Core Capabilities Delivered:</h3>
            <ul>
                <li><strong>Real-Time Fraud Detection:</strong> Deploy models that analyze transaction patterns to identify and flag fraudulent activity instantly.</li>
                <li><strong>Algorithmic Risk Scoring:</strong> Develop bespoke models that provide a more accurate and dynamic assessment of credit risk.</li>
            </ul>
        `
    },
    'energy': {
        id: 'energy',
        category: 'Industry Solution',
        title: 'The Digital Utility: The Akin AI OS',
        content: `
            <h3>Overview: From Grid to Edge Intelligence</h3>
            <p>The energy grid is becoming more complex with renewables and distributed resources. Our platform creates a 'digital twin' of your grid and infrastructure, enabling predictive control and optimized energy distribution.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Grid Instability:</strong> How do we balance a volatile grid with fluctuating renewable energy sources and unpredictable demand?</li>
                <li><strong>Aging Infrastructure:</strong> How can we predict failures in critical assets like transformers before they cause outages?</li>
                <li><strong>Market Volatility:</strong> How do we optimize energy trading in a 24/7 market with complex variables?</li>
            </ul>
            <h3>Core Capabilities Delivered:</h3>
            <ul>
                <li><strong>Grid Load Forecasting:</strong> Accurately predict energy demand and generation for optimized load balancing.</li>
                <li><strong>Predictive Asset Maintenance:</strong> Monitor the health of critical infrastructure to predict failures and schedule maintenance proactively.</li>
            </ul>
        `
    },
    'predictive-maintenance': {
        id: 'predictive-maintenance',
        category: 'Challenge Solution',
        title: 'Challenge: Predictive Maintenance',
        content: `
            <h3>From Reactive to Predictive Operations</h3>
            <p>Move from a reactive to a predictive maintenance strategy. Our platform integrates sensor data (vibration, temperature, etc.) from your critical assets into a unified ontology, allowing AI models to detect subtle anomalies that precede failures.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Asset Health Scoring:</strong> Get a real-time, data-driven health score for every critical piece of equipment in your operation.</li>
                <li><strong>Root Cause Analysis:</strong> When failures do occur, use AI to rapidly analyze historical data and identify the root cause, preventing future occurrences.</li>
                <li><strong>Optimized Maintenance Scheduling:</strong> Automatically generate maintenance schedules based on predicted failure risk, not arbitrary timelines.</li>
            </ul>
        `
    },
    'supply-chain': {
        id: 'supply-chain',
        category: 'Challenge Solution',
        title: 'Challenge: Supply Chain Optimization',
        content: `
            <h3>End-to-End Visibility and Control</h3>
            <p>Traditional forecasting methods based on historical sales are no longer sufficient. Our AI-driven approach integrates external signals—market trends, weather, economic indicators—to create hyper-accurate demand forecasts and optimize your entire logistics network.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Hyper-Accurate Demand Forecasting:</strong> Integrate external data sources to generate forecasts at any level of granularity, from individual SKUs to entire product categories.</li>
                <li><strong>Logistics Network Optimization:</strong> Use AI to identify the most efficient shipping routes and carrier choices in real-time, responding instantly to disruptions.</li>
                <li><strong>Scenario Modeling:</strong> Simulate the impact of different market scenarios (e.g., a competitor's promotion, a port closure) on your supply chain.</li>
            </ul>
        `
    },
    'digital-engineering': {
        id: 'digital-engineering',
        category: 'Challenge Solution',
        title: 'Challenge: Digital Engineering',
        content: `
            <h3>Architecting Your Digital Core</h3>
            <p>True transformation isn't about adding an 'AI feature'. It's about architecting your entire operational data flow around a cognitive core. We build the foundational Unified Ontology that connects your siloed systems and makes intelligent action possible.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Unified Ontology Development:</strong> Create the 'digital twin' of your business that maps data to real-world objects and processes.</li>
                <li><strong>Legacy System Integration:</strong> Our open architecture allows us to integrate with your existing ERPs, data lakes, and SCADA systems without a costly 'rip-and-replace'.</li>
                <li><strong>MLOps & Deployment:</strong> We build the robust pipelines to move your AI from a promising experiment into a mission-critical component of your daily operations.</li>
            </ul>
        `
    },
    'autonomous-operations': {
        id: 'autonomous-operations',
        category: 'Challenge Solution',
        title: 'Challenge: Autonomous Operations',
        content: `
            <h3>Beyond Automation to Autonomy</h3>
            <p>Go beyond simple Robotic Process Automation (RPA). Our Intelligent Automation solutions use AI to automate complex, non-routine tasks that require cognitive decision-making, all powered by your Unified Ontology.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Cognitive Document Processing:</strong> Automatically extract, interpret, and process information from unstructured documents like invoices and contracts.</li>
                <li><strong>Automated Decision-Making:</strong> Build human-in-the-loop workflows where AI recommends the optimal decision (e.g., which supplier to use, how to price a product) for human approval.</li>
                <li><strong>Dynamic Resource Allocation:</strong> Use AI to automatically allocate resources—personnel, machinery, budget—in real-time based on shifting priorities and demand.</li>
            </ul>
        `
    },
};

const industries = [
    { name: 'Intelligent Manufacturing', id: 'manufacturing' },
    { name: 'Resilient Supply Chain', id: 'logistics' },
    { name: 'AI-Driven Finance & Risk', id: 'finance' },
    { name: 'The Digital Utility', id: 'energy' },
];

const challenges = [
    { name: 'Predictive Maintenance', id: 'predictive-maintenance' },
    { name: 'Supply Chain Optimization', id: 'supply-chain' },
    { name: 'Digital Engineering', id: 'digital-engineering' },
    { name: 'Autonomous Operations', id: 'autonomous-operations' },
];

interface HomePageProps {
  onSolutionClick: (content: Content) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSolutionClick }) => {
    const platformSectionRef = useRef(null);
    const { scrollYProgress: platformScroll } = useScroll({
        target: platformSectionRef,
        offset: ["start end", "end start"]
    });
    const platformImageY = useTransform(platformScroll, [0, 1], ["-5%", "5%"]);
    const platformTextY = useTransform(platformScroll, [0, 1], ["5%", "-5%"]);
    const platformOpacity = useTransform(platformScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut' as const,
          when: 'beforeChildren',
          staggerChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
    };

    const HighlightPhase = ({ phase }: { phase: string }) => {
        if (phase === 'Collaborate & Evolve') {
            return (
                <span>
                    <span className="text-akin-cyan font-extrabold">C</span>ollaborate & <span className="text-akin-cyan font-extrabold">E</span>volve
                </span>
            );
        }
        const firstLetter = phase.charAt(0);
        const rest = phase.slice(1);
        return (
            <span>
                <span className="text-akin-cyan font-extrabold">{firstLetter}</span>{rest}
            </span>
        );
    };

  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-40 overflow-x-hidden">
      
      <Hero
        title={
          <>
            The Future is <span className="text-akin-cyan">Intelligent.</span>
            <br />
            <TypingAnimation text="Intelligence, Architected." />
          </>
        }
        subtitle={<>We design, build, and deploy bespoke <span className="text-akin-cyan">AI Operating Systems</span> that unify your data, models, and operations—moving artificial intelligence from experimentation to <span className="text-akin-cyan">operation.</span></>}
        showGlobe={true}
      >
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact">Talk to an Engineer</Button>
            <Button to="/platform" primary={false} className="!text-white !border-white hover:!bg-white hover:!text-akin-text-dark">Explore the Platform</Button>
        </div>
      </Hero>

      {/* The Problem */}
      <motion.section
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">Your AI Potential is Trapped in Silos.</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <CubeTransparentIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">Siloed Data</h3>
              <p>Your data is fragmented across legacy ERPs, data lakes, and disconnected systems, making a unified view impossible.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <BeakerIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">Failed Experiments</h3>
              <p>Your data science 'proof-of-concepts' are stuck, failing to scale or integrate into live production environments.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <PuzzlePieceIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">Fragmented Tooling</h3>
              <p>Your 'AI platform' is just a collection of disconnected vendor tools, a cost center, not an operational asset.</p>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* The Solution */}
       <motion.section style={{ opacity: platformOpacity }} ref={platformSectionRef} className="bg-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: platformTextY }}>
            <h2 className="text-3xl md:text-4xl font-extrabold">The Akin AI Platform: Your Unified AI Operating System.</h2>
            <p className="mt-4 text-lg text-akin-text-light">
              One platform, built for you. We build on your existing architecture to create a single 'digital twin' of your organization, connecting data, models, and operations in a single, secure environment.
            </p>
            <Button to="/platform" className="mt-8">Explore the Platform</Button>
          </motion.div>
          <div className="rounded-lg shadow-2xl">
             <motion.img 
                src="/images/platform-ui.jpg" 
                alt="Akin Platform UI" 
                className="w-full rounded-lg"
                style={{ y: platformImageY }}
            />
          </div>
        </div>
      </motion.section>

      {/* Our Solutions Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-serif">We know your industry. We solve your challenges.</motion.h2>
        
        <div className="mt-16">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight mb-8">Industries</motion.h3>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
            {industries.map(industry => (
              <button key={industry.id} onClick={() => onSolutionClick(solutionsContent[industry.id])} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-akin-text-dark rounded-full font-semibold text-akin-text-dark hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan">
                <span>{industry.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight mb-8">Challenges</motion.h3>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4">
            {challenges.map(challenge => (
              <button key={challenge.id} onClick={() => onSolutionClick(solutionsContent[challenge.id])} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-akin-text-dark rounded-full font-semibold text-akin-text-dark hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan">
                <span>{challenge.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Philosophy */}
      <motion.section
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">Beyond the Hype. Beyond the 'Proof-of-Concept'.</motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-lg text-akin-text-light max-w-3xl mx-auto">The conversation about AI's potential is over. The challenge now is making it operational. While others talk strategy, we architect your reality.</motion.p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <WrenchScrewdriverIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">From Prototype to Production</h3>
              <p>We don’t deliver slide decks; we ship code. Our focus is singular: moving your AI from a promising experiment into a robust, mission-critical component of your daily operations.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <CpuChipIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">Intelligence Infused, Not Bolted-On</h3>
              <p>True transformation isn't about adding an 'AI feature'. It's about architecting your entire operational data flow around a cognitive core. Our bespoke platforms infuse intelligence into the DNA of your business.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full">
              <UserGroupIcon className="h-12 w-12 mx-auto text-akin-cyan" />
              <h3 className="text-xl font-bold mb-2 mt-4">Augmenting Your Expertise</h3>
              <p>Our goal is to enhance the human brilliance at your core. The Akin platform empowers your teams with unified data and predictive insights, turning their institutional knowledge into a decisive competitive advantage.</p>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Methodology Teaser */}
      <motion.section
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">From Vision to VELOCITY: Our Bespoke Engineering Process.</motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-lg text-akin-text-light max-w-2xl mx-auto">We do not consult, we <strong>build</strong>. Our 'VELOCITY' framework is a proven, end-to-end engineering discipline for delivering operational AI at scale.</motion.p>
         <motion.div variants={itemVariants} className="mt-12 font-semibold text-lg text-akin-text-dark">
            {/* Mobile View */}
            <div className="flex flex-col md:hidden items-center gap-2">
                {methodologyPhases.map((phase, index) => (
                    <React.Fragment key={phase}>
                        <span><HighlightPhase phase={phase} /></span>
                        {index < methodologyPhases.length - 1 && (
                            <span className="text-akin-cyan text-2xl">&darr;</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
            {/* Desktop View */}
            <div className="hidden md:flex flex-row justify-center items-center gap-4">
                {methodologyPhases.map((phase, index) => (
                    <React.Fragment key={phase}>
                        <span><HighlightPhase phase={phase} /></span>
                        {index < methodologyPhases.length - 1 && (
                            <span className="text-akin-cyan text-2xl">&rarr;</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
        <motion.div variants={itemVariants}>
            <Button to="/velocity-approach" className="mt-10">Explore the VELOCITY Approach</Button>
        </motion.div>
      </motion.section>
      
      {/* 6. Proof in Action */}
      <motion.section
        className="bg-gray-50 py-20 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">See the Platform in Action.</motion.h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                <motion.div variants={itemVariants}>
                    <Card className="h-full">
                        <span className="text-sm font-bold uppercase text-akin-cyan">Manufacturing</span>
                        <h3 className="text-xl font-bold mt-2">Problem: Unplanned factory downtime.</h3>
                        <p className="mt-2"><strong>Solution:</strong> Deployed predictive maintenance models on a unified 'Factory Floor' Ontology.</p>
                        <p className="mt-2 text-2xl font-bold text-green-600"><strong>Outcome:</strong> 28% reduction in equipment failure.</p>
                    </Card>
                </motion.div>
                 <motion.div variants={itemVariants}>
                    <Card className="h-full">
                        <span className="text-sm font-bold uppercase text-akin-cyan">Logistics</span>
                        <h3 className="text-xl font-bold mt-2">Problem: Siloed supply chain data.</h3>
                        <p className="mt-2"><strong>Solution:</strong> Integrated 30+ carrier/warehouse feeds into a single 'Inventory' Ontology.</p>
                        <p className="mt-2 text-2xl font-bold text-green-600"><strong>Outcome:</strong> 15% reduction in stockouts.</p>
                    </Card>
                </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <Button to="/client-stories" className="mt-12">View All Client Stories</Button>
            </motion.div>
        </div>
      </motion.section>

      {/* 7. Authority Hub */}
      <motion.section
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">Insights on Real-World AI.</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <motion.div variants={itemVariants}>
                <Card className="h-full">
                    <span className="text-sm font-bold uppercase text-akin-cyan">Signature Report</span>
                    <h3 className="text-xl font-bold my-2">The Thrive Index</h3>
                    <p>An opinionated guide to the industry, benchmarking how companies are progressing on their AI journey.</p>
                </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Card className="h-full">
                    <span className="text-sm font-bold uppercase text-akin-cyan">Featured Blog</span>
                    <h3 className="text-xl font-bold my-2">3 Ways LLMs Fail in Production</h3>
                    <p>A practical guide on how to fix common LLM issues when moving from prototype to live environments.</p>
                </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Card className="h-full">
                    <span className="text-sm font-bold uppercase text-akin-cyan">Whitepaper</span>
                    <h3 className="text-xl font-bold my-2">Beyond the Data Lake</h3>
                    <p>Making the case for an Operational Ontology as the core of your modern data strategy.</p>
                </Card>
            </motion.div>
        </div>
        <motion.div variants={itemVariants}>
            <Button to="/insights" className="mt-12">Explore All Insights</Button>
        </motion.div>
      </motion.section>

      <CallToActionSection />
    </div>
  );
};

export default HomePage;
