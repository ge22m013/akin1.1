
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            const consent = localStorage.getItem('akin_cookies_accepted');
            if (consent !== 'true') {
                setIsVisible(true);
            }
        } catch (error) {
            console.error("Could not access localStorage:", error);
        }
    }, []);

    const handleAccept = () => {
        try {
            localStorage.setItem('akin_cookies_accepted', 'true');
            setIsVisible(false);
        } catch (error) {
            console.error("Could not set localStorage item:", error);
            setIsVisible(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    // FIX: Add 'as const' to 'ease' property to satisfy framer-motion's Easing type.
                    transition={{ duration: 0.5, ease: 'easeOut' as const }}
                    className="fixed bottom-0 left-0 right-0 bg-akin-dark-hero/90 backdrop-blur-sm text-white p-4 z-[1000] shadow-2xl"
                    role="dialog"
                    aria-live="polite"
                    aria-label="Cookie consent"
                >
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-300">
                            We use cookies to enhance your browsing experience and analyze our traffic. By clicking 'Accept', you consent to our use of cookies.
                        </p>
                        <button
                            onClick={handleAccept}
                            className="flex-shrink-0 px-6 py-2 bg-akin-cyan text-akin-text-dark font-semibold rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-akin-dark-hero focus:ring-akin-cyan"
                            aria-label="Accept cookies"
                        >
                            Accept
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;