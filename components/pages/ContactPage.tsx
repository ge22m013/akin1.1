import React, { useState } from 'react';
import Hero from '../ui/Hero';
import { EnvelopeIcon, UserGroupIcon, BuildingOffice2Icon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const ContactPage: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [activePathway, setActivePathway] = useState('engineer');

    const personalEmailDomains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'aol', 'icloud', 'protonmail'];
    
    const formInputClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm bg-white text-akin-text-dark";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const domain = email.substring(email.lastIndexOf('@') + 1);
        
        const isPersonal = personalEmailDomains.some(d => domain.toLowerCase().includes(d));

        if (isPersonal) {
            setEmailError('Please use a valid company email address. Personal emails are not accepted.');
            return;
        }

        setEmailError('');
        console.log("Form submitted with data:", Object.fromEntries(formData));
        setIsSubmitted(true);
    };

    const pathwayContentVariants = {
        hidden: { opacity: 0, x: 20 },
        // FIX: Add 'as const' to 'ease' properties to satisfy framer-motion's Easing type.
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: 'easeIn' as const } }
    };

    const PathwayButton: React.FC<{
        id: string;
        icon: React.ElementType;
        title: string;
        subtitle: string;
    }> = ({ id, icon: Icon, title, subtitle }) => {
        const isActive = activePathway === id;
        return (
            <button
                onClick={() => {
                    setActivePathway(id);
                    setIsSubmitted(false); // Reset form submission state on switch
                }}
                className={`w-full p-6 text-left border rounded-lg transition-all duration-300 ${isActive ? 'bg-white border-akin-cyan shadow-lg ring-2 ring-akin-cyan' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`}
            >
                <div className="flex items-start gap-4">
                    <Icon className={`h-10 w-10 flex-shrink-0 mt-1 transition-colors ${isActive ? 'text-akin-cyan' : 'text-akin-text-light'}`} />
                    <div>
                        <h3 className="text-xl font-bold text-akin-text-dark">{title}</h3>
                        <p className="mt-1 text-akin-text-light">{subtitle}</p>
                    </div>
                </div>
            </button>
        );
    };

    return (
        <div>
            <Hero
                title="Let's Build Together"
                subtitle="Whether you're looking to transform your operations, join our team, or partner with us, we're ready to start the conversation."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left side: Contact options */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-akin-text-dark">Contact Pathways</h2>
                            <p className="mt-2 text-lg text-akin-text-light">Select the option that best fits your inquiry.</p>
                        </div>
                        
                        <div className="space-y-4">
                            <PathwayButton id="engineer" icon={WrenchScrewdriverIcon} title="Talk to an Engineer" subtitle="Discuss your technical challenges and platform needs." />
                            <PathwayButton id="careers" icon={UserGroupIcon} title="Careers" subtitle="Explore open roles and our engineering culture." />
                            <PathwayButton id="partnerships" icon={BuildingOffice2Icon} title="Partnerships" subtitle="Interested in partnering? Let's explore possibilities." />
                        </div>
                    </div>

                    {/* Right side: Form */}
                    <div className="lg:col-span-2">
                         <AnimatePresence mode="wait">
                            {activePathway === 'engineer' && (
                                <motion.div
                                    key="engineer"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
                                        {isSubmitted ? (
                                            <div className="text-center min-h-[400px] flex flex-col justify-center">
                                                <EnvelopeIcon className="h-16 w-16 mx-auto text-green-500" />
                                                <h2 className="mt-4 text-2xl font-bold text-akin-text-dark">Thank You!</h2>
                                                <p className="mt-2 text-akin-text-light">Your message has been received. Our engineering team will review your inquiry and get back to you at their earliest convenience.</p>
                                            </div>
                                        ) : (
                                            <>
                                                <h2 className="text-2xl font-bold text-akin-text-dark">Talk to an Engineer</h2>
                                                <p className="mt-1 text-akin-text-light">Please fill out the form below to begin the technical conversation.</p>
                                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                        <div>
                                                            <label htmlFor="name" className="block text-sm font-medium text-akin-text-dark">Full Name</label>
                                                            <input type="text" name="name" id="name" required className={formInputClasses} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email" className="block text-sm font-medium text-akin-text-dark">Company Email</label>
                                                            <input type="email" name="email" id="email" required className={formInputClasses} />
                                                            {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
                                                        </div>
                                                    </div>
                                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                        <div>
                                                            <label htmlFor="company" className="block text-sm font-medium text-akin-text-dark">Company Name</label>
                                                            <input type="text" name="company" id="company" required className={formInputClasses} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="role" className="block text-sm font-medium text-akin-text-dark">Which best describes your role?</label>
                                                            <select id="role" name="role" required className={formInputClasses}>
                                                                <option>Business Leader</option>
                                                                <option>Technical Leader</option>
                                                                <option>Data Scientist / Engineer</option>
                                                                <option>Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="message" className="block text-sm font-medium text-akin-text-dark">How can we help?</label>
                                                        <textarea id="message" name="message" rows={4} required placeholder="Describe your technical challenge or what you'd like to build..." className={formInputClasses}></textarea>
                                                    </div>
                                                    <div>
                                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-akin-text-dark hover:bg-akin-cyan hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan">
                                                            Submit Inquiry
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                            
                            {activePathway === 'careers' && (
                                <motion.div
                                    key="careers"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg text-center min-h-[400px] flex flex-col justify-center"
                                >
                                    <UserGroupIcon className="h-16 w-16 mx-auto text-akin-cyan" />
                                    <h2 className="mt-4 text-2xl font-bold text-akin-text-dark">Join Our Team</h2>
                                    <p className="mt-2 text-akin-text-light max-w-md mx-auto">We're a community of technologists building the next generation of operational AI. If you're driven to solve complex problems, explore our culture and open roles.</p>
                                    <div className="mt-8">
                                        <Button to="/careers">View Careers Page</Button>
                                    </div>
                                </motion.div>
                            )}

                            {activePathway === 'partnerships' && (
                                <motion.div
                                    key="partnerships"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg text-center min-h-[400px] flex flex-col justify-center"
                                >
                                    <BuildingOffice2Icon className="h-16 w-16 mx-auto text-akin-cyan" />
                                    <h2 className="mt-4 text-2xl font-bold text-akin-text-dark">Partner with Akin</h2>
                                    <p className="mt-2 text-akin-text-light max-w-md mx-auto">We partner with leading technology providers and system integrators to deliver comprehensive solutions. Let's explore how we can build the future together.</p>
                                    <div className="mt-8">
                                        <Button to="mailto:partnerships@akintechnology.com">Contact Partnerships</Button>
                                    </div>
                                </motion.div>
                            )}
                         </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;