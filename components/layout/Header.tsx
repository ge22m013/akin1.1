

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import AkinLogo from '../ui/AkinLogo';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDownIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchModal from '../ui/SearchModal';

// Data for Industries
const industryLinks = [
  { name: 'Retail & Consumer Products', href: '/industries/retail-consumer-products' },
  { name: 'Transportation & Mobility', href: '/industries/transportation-mobility' },
  { name: 'Energy & Commodities', href: '/industries/energy-commodities' },
  { name: 'Financial Services', href: '/industries/financial-services' },
  { name: 'Health & Life Sciences', href: '/industries/health-life-sciences' },
  { name: 'Public Sector', href: '/industries/public-sector' },
];

// Data for Solutions
const solutionLinks = [
  { name: 'Artificial Intelligence', href: '/solutions/artificial-intelligence' },
  { name: 'Digital Engineering', href: '/solutions/digital-engineering' },
  { name: 'Cloud & Infrastructure', href: '/solutions/cloud-infrastructure' },
  { name: 'Experience Transformation', href: '/solutions/experience-transformation' },
  { name: 'Digital Commerce', href: '/solutions/digital-commerce' },
  { name: 'Supply Chain', href: '/solutions/supply-chain' },
];

// Data for Velocity
const velocityLinks = [
  { name: 'Vision & Strategy', href: '/velocity-approach/vision' },
  { name: 'Engineering & Integration', href: '/velocity-approach/engineering' },
  { name: 'Logic & Modeling', href: '/velocity-approach/logic' },
  { name: 'Operationalize & Deploy', href: '/velocity-approach/operationalize' },
  { name: 'Collaborate & Evolve', href: '/velocity-approach/collaborate-evolve' },
];

// FIX: Define a discriminated union type for navigation items to fix type errors.
// This allows TypeScript to understand that if `isMega` is not true, `category` will have a `links` property.
type NavLinkInfo = { name: string; href: string };

type NavigationItem =
  | {
      name: string;
      isMega: true;
      columns: {
        name: string;
        href?: string;
        description: string;
        links: NavLinkInfo[];
      }[];
    }
  | {
      name: string;
      isMega?: false;
      links: NavLinkInfo[];
    };

const navigation: NavigationItem[] = [
  {
    name: 'Who We Are',
    isMega: true,
    columns: [
      {
        name: 'Our Identity',
        href: '/about',
        description: "Our mission, purpose, and the proof of our impact.",
        links: [
          { name: 'About Akin', href: '/about' },
          { name: 'Leadership', href: '/leadership' },
          { name: 'Client Stories', href: '/client-stories' },
        ]
      },
      {
        name: 'Our Culture',
        href: '/careers',
        description: "The principles that guide us and the community we're building.",
        links: [
          { name: 'Careers at Akin', href: '/careers' },
          { name: 'Our Values', href: '/values' },
          { name: 'Inclusion & Diversity', href: '/inclusion' },
        ]
      },
      {
        name: 'Our Commitments',
        description: "How we build trustworthy, sustainable, and equitable technology.",
        links: [
          { name: 'Responsible AI & Trust', href: '/responsible-ai' },
          { name: 'Sustainability', href: '/sustainability' },
          { name: 'AI for Good', href: '/ai-for-good' },
        ],
      }
    ]
  },
  {
    name: 'What We Do',
    isMega: true,
    columns: [
      {
        name: 'Industries',
        href: '/industries',
        links: industryLinks,
        description: "Bespoke AI for your sector's unique challenges."
      },
      {
        name: 'Solutions',
        href: '/solutions',
        links: solutionLinks,
        description: 'Our core capabilities, from AI to infrastructure.'
      },
      {
        name: 'Our Platform',
        href: '/platform',
        links: [
            { name: 'Akin AI Platform', href: '/platform' },
            { name: 'Generative AI', href: '/generative-ai' },
            { name: 'Technology Stack', href: '/technology' },
            { name: 'Our Partners', href: '/partners' },
        ],
        description: 'Explore our foundational technology and ecosystem.'
      }
    ]
  },
  {
    name: 'How We Do It',
    isMega: true,
    columns: [
        {
            name: 'VELOCITY Approach',
            href: '/velocity-approach',
            links: velocityLinks,
            description: 'Our end-to-end discipline for delivering operational AI.'
        },
        {
            name: 'Our Core Methodology',
            href: '/methodology',
            description: 'From fragmented data to intelligent action, our process transforms complexity into clarity.',
            links: [
                { name: 'Our Engineering Philosophy', href: '/methodology' },
                { name: 'Unify: The Ontology', href: '/platform' },
                { name: 'Insight: Bespoke AI Models', href: '/solutions/artificial-intelligence' },
                { name: 'See The Proof', href: '/client-stories' },
            ]
        }
    ]
  },
  {
    name: 'Our Thinking',
    isMega: true,
    columns: [
      {
        name: 'Perspectives on AI',
        href: '/insights',
        description: "Our latest research, analysis, and frameworks on the future of operational AI.",
        links: [
          { name: 'Insights Hub', href: '/insights' },
          { name: 'The Thrive Index', href: '/insights/thrive-index' },
          { name: 'FAQ', href: '/faq' },
        ],
      },
      {
        name: 'Industry Intelligence',
        href: '/industries',
        description: "Our take on the unique challenges and AI opportunities within key sectors.",
        links: [
          { name: 'Report: State of AI in Supply Chain', href: '/insights/state-of-ai-supply-chain' },
          { name: 'Analysis: The Digital Utility Transformation', href: '/insights/digital-utility-transformation' },
          { name: 'Viewpoint: AI in Financial Services', href: '/insights/ai-in-financial-services' },
          { name: 'Explore All Industries', href: '/industries' },
        ]
      }
    ]
  },
];

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    const [openMobileNestedSubmenu, setOpenMobileNestedSubmenu] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);
    const leaveTimeoutRef = useRef<number | null>(null);

    const activeCategory = openDropdown ? navigation.find(cat => cat.name === openDropdown) : null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenMobileSubmenu(null);
        setOpenMobileNestedSubmenu(null);
        setIsSearchOpen(false);
    }, [location.pathname]);

    const handleMouseEnter = (categoryName: string) => {
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
        }
        setOpenDropdown(categoryName);
    };

    const handleMouseLeave = () => {
        leaveTimeoutRef.current = window.setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    };
    
    const handleMobileMenuToggle = () => {
        const isOpening = !mobileMenuOpen;
        setMobileMenuOpen(isOpening);
        if (!isOpening) {
            setOpenMobileSubmenu(null);
        }
    };
    
    const inactiveLinkClass = (isScrolled: boolean) => `hover:text-akin-cyan transition-colors ${isScrolled ? 'text-akin-text-dark' : 'text-white'}`;
    
    const menuVariants: Variants = {
        hidden: { opacity: 0, y: -10, pointerEvents: 'none', transition: { duration: 0.2, ease: 'easeOut' } },
        visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
    <>
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm' : 'bg-transparent'}`} onMouseLeave={handleMouseLeave}>
        <nav ref={navRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
                <Link to="/">
                <AkinLogo className={`h-8 transition-colors duration-300 ${isScrolled ? 'text-akin-text-dark' : 'text-white'}`} />
                </Link>
            </div>
            <div className="hidden md:flex items-baseline space-x-6">
                {navigation.map((category) => (
                <div key={category.name} className="relative" onMouseEnter={() => handleMouseEnter(category.name)}>
                    <button
                        className={`font-medium px-1 py-2 text-sm flex items-center gap-1 focus:outline-none ${inactiveLinkClass(isScrolled)}`}
                    >
                    {category.name}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === category.name ? 'rotate-180' : ''}`} />
                    </button>
                    {/* FIX: Used 'in' operator for type guarding as it's more reliable for TypeScript to narrow union types with optional properties. */}
                    {'links' in category && (
                    <AnimatePresence>
                        {openDropdown === category.name && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute top-full mt-2 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-56"
                        >
                            <div className="py-1">
                            {category.links.map((item) => (
                                <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-akin-cyan bg-gray-50' : 'text-akin-text-dark'} hover:bg-gray-100`}
                                onClick={() => setOpenDropdown(null)}
                                >
                                {item.name}
                                </NavLink>
                            ))}
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    )}
                </div>
                ))}
            </div>
            <div className="hidden md:flex items-center">
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan transition-colors ${isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                    aria-label="Open search"
                >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                <Link 
                    to="/contact" 
                    className={`ml-4 px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors ${isScrolled ? 'border-akin-text-dark text-akin-text-dark hover:bg-gray-100' : 'border-white text-white hover:bg-white hover:text-akin-text-dark'}`}>
                Contact Us
                </Link>
            </div>
            <div className="-mr-2 flex md:hidden items-center">
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan ${isScrolled ? 'text-gray-600' : 'text-white'}`}
                    aria-label="Open search"
                >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
                <button
                onClick={handleMobileMenuToggle}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan ${isScrolled ? 'text-gray-600 bg-gray-100' : 'text-white'}`}
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
                </button>
            </div>
            </div>
        </nav>

            <AnimatePresence>
                {activeCategory && activeCategory.isMega && (
                    <motion.div
                        className="absolute top-full left-0 right-0"
                        onMouseEnter={() => handleMouseEnter(activeCategory.name)}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="bg-akin-light-gray border-t border-gray-200 shadow-lg">
                            <div className="max-w-7xl mx-auto flex gap-8 px-8 py-8">
                                {activeCategory.columns?.map(col => (
                                    <div key={col.name} className="space-y-4 flex-1">
                                        <Link 
                                            to={col.href || '#'} 
                                            className="group inline-flex items-center gap-2 text-base font-semibold text-akin-text-dark hover:text-akin-cyan transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {col.name}
                                            {col.href && <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                                        </Link>
                                        <p className="text-sm text-akin-text-light">{col.description}</p>
                                        <ul className="space-y-3">
                                            {col.links?.map(link => (
                                                <li key={link.name}>
                                                    <NavLink 
                                                        to={link.href} 
                                                        className="relative text-sm text-akin-text-dark hover:text-akin-cyan transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-akin-cyan after:left-0 after:bottom-[-3px] after:transition-all after:duration-300 hover:after:w-full"
                                                        onClick={() => setOpenDropdown(null)}
                                                    >
                                                        {link.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        <AnimatePresence>
            {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
                className="md:hidden bg-akin-light-gray max-h-[85vh] overflow-y-auto" id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((category) => (
                        <div key={category.name} className="border-b border-gray-200 last:border-b-0">
                            <button
                                onClick={() => {
                                    setOpenMobileSubmenu(openMobileSubmenu === category.name ? null : category.name);
                                    setOpenMobileNestedSubmenu(null); // Close nested when main changes
                                }}
                                className="w-full flex justify-between items-center px-3 py-3 text-base font-semibold text-akin-text-dark rounded-md hover:bg-gray-50"
                            >
                                {category.name}
                                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${openMobileSubmenu === category.name ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openMobileSubmenu === category.name && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pl-4 pb-2 mt-1 space-y-1"
                                    >
                                        {/* FIX: Used 'in' operator for type guarding as it's more reliable for TypeScript to narrow union types. */}
                                        {'columns' in category ? category.columns?.map(col => (
                                            <div key={col.name} className="py-1">
                                                <div className="flex justify-between items-center">
                                                    <NavLink
                                                        to={col.href || '#'}
                                                        className={({isActive}) => `text-base font-semibold ${isActive ? 'text-akin-cyan' : 'text-akin-text-dark'}`}
                                                        onClick={!col.links?.length ? handleMobileMenuToggle : (e) => e.preventDefault()}
                                                    >
                                                        {col.name}
                                                    </NavLink>
                                                    {col.links && col.links.length > 0 && (
                                                        <button onClick={() => setOpenMobileNestedSubmenu(openMobileNestedSubmenu === col.name ? null : col.name)}>
                                                            <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openMobileNestedSubmenu === col.name ? 'rotate-180' : ''}`} />
                                                        </button>
                                                    )}
                                                </div>
                                                <AnimatePresence>
                                                    {openMobileNestedSubmenu === col.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200"
                                                        >
                                                            {col.links?.map(item => (
                                                                <NavLink
                                                                    key={item.name}
                                                                    to={item.href}
                                                                    className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-100 text-akin-cyan' : 'text-akin-text-dark hover:bg-gray-50'}`}
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )) : category.links.map(item => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-100 text-akin-cyan' : 'text-akin-text-dark hover:bg-gray-50'}`}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                <Link to="/contact" className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-akin-text-dark hover:bg-akin-cyan transition-colors">
                    Contact Us
                </Link>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </header>
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;