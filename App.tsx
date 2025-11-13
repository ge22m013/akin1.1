

import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import InsightModal from './components/ui/InsightModal';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import CookieConsent from './components/ui/CookieConsent';

import HomePage from './components/pages/HomePage';
import PlatformPage from './components/pages/PlatformPage';
import IndustriesPage from './components/pages/IndustriesPage';
import SolutionsPage from './components/pages/SolutionsPage';
import VelocityApproachPage from './components/pages/VelocityApproachPage';
import ClientStoriesPage from './components/pages/ClientStoriesPage';
import InsightsPage from './components/pages/InsightsPage';
import AboutPage from './components/pages/AboutPage';
import ThriveIndexPage from './components/pages/insights/ThriveIndexPage';
import StateOfAiSupplyChainPage from './components/pages/insights/StateOfAiSupplyChainPage';
import DigitalUtilityTransformationPage from './components/pages/insights/DigitalUtilityTransformationPage';
import AiInFinancialServicesPage from './components/pages/insights/AiInFinancialServicesPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import FAQPage from './components/pages/FAQPage';
import GenerativeAiPage from './components/pages/GenerativeAiPage';
import InclusionPage from './components/pages/InclusionPage';
import SustainabilityPage from './components/pages/SustainabilityPage';
import AiForGoodPage from './components/pages/AiForGoodPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import ResponsibleAiPage from './components/pages/ResponsibleAiPage';
import SitemapPage from './components/pages/SitemapPage';
import LeadershipPage from './components/pages/LeadershipPage';
import PartnersPage from './components/pages/PartnersPage';
import TechnologyPage from './components/pages/TechnologyPage';
import ValuesPage from './components/pages/ValuesPage';
import MethodologyPage from './components/pages/MethodologyPage';
import RetailPage from './components/pages/industries/RetailPage';
import TransportationPage from './components/pages/industries/TransportationPage';
import EnergyPage from './components/pages/industries/EnergyPage';
import FinancePage from './components/pages/industries/FinancePage';
import HealthPage from './components/pages/industries/HealthPage';
import PublicSectorPage from './components/pages/industries/PublicSectorPage';
import AiPage from './components/pages/solutions/AiPage';
import DigitalEngineeringPage from './components/pages/solutions/DigitalEngineeringPage';
import CloudPage from './components/pages/solutions/CloudPage';
import ExperienceTransformationPage from './components/pages/solutions/ExperienceTransformationPage';
import DigitalCommercePage from './components/pages/solutions/DigitalCommercePage';
import SupplyChainPage from './components/pages/solutions/SupplyChainPage';
import VisionPage from './components/pages/velocity/VisionPage';
import EngineeringPage from './components/pages/velocity/EngineeringPage';
import LogicPage from './components/pages/velocity/LogicPage';
import OperationalizePage from './components/pages/velocity/OperationalizePage';
import CollaborateEvolvePage from './components/pages/velocity/CollaborateEvolvePage';


export interface Content {
  id: string;
  title: string;
  category: string;
  content: string;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeContent, setActiveContent] = useState<Content | null>(null);

  const handleOpenContent = (content: Content) => {
    setActiveContent(content);
  };

  const handleCloseContent = () => {
    setActiveContent(null);
  };
  
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    const percentageEl = document.getElementById('preloader-percentage');
    const logoPaths = document.querySelectorAll<SVGPathElement>('#preloader-logo path');

    if (!preloader || !percentageEl) {
        setIsReady(true);
        return;
    }

    // Logo Animation
    if (logoPaths.length > 0) {
        logoPaths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
        });
        setTimeout(() => {
            logoPaths.forEach((path, index) => {
                path.style.transition = `stroke-dashoffset 1.5s ${index * 0.3}s ease-in-out`;
                path.style.strokeDashoffset = '0';
            });
        }, 100);
    }

    // Percentage Counter
    let percentage = 0;
    const interval = setInterval(() => {
        percentage++;
        percentageEl.textContent = `${percentage}%`;

        if (percentage >= 100) {
            clearInterval(interval);
            preloader.classList.add('loaded');
            
            const onTransitionEnd = () => {
                if(document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            };
            
            preloader.addEventListener('transitionend', onTransitionEnd, { once: true });

            // Fallback for safety in case transitionend doesn't fire
            setTimeout(() => {
                if (document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            }, 600);
        }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <HashRouter>
        <>
          <ScrollProgressBar />
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white text-akin-text-dark">
            <Header />
            <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage onSolutionClick={handleOpenContent} />} />
                  <Route path="/platform" element={<PlatformPage onPillarClick={handleOpenContent} />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/velocity-approach" element={<VelocityApproachPage />} />
                  <Route path="/client-stories" element={<ClientStoriesPage />} />
                  <Route path="/insights" element={<InsightsPage onInsightClick={handleOpenContent} />} />
                  <Route path="/insights/thrive-index" element={<ThriveIndexPage />} />
                  <Route path="/insights/state-of-ai-supply-chain" element={<StateOfAiSupplyChainPage />} />
                  <Route path="/insights/digital-utility-transformation" element={<DigitalUtilityTransformationPage />} />
                  <Route path="/insights/ai-in-financial-services" element={<AiInFinancialServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/generative-ai" element={<GenerativeAiPage />} />
                  <Route path="/inclusion" element={<InclusionPage />} />
                  <Route path="/sustainability" element={<SustainabilityPage />} />
                  <Route path="/ai-for-good" element={<AiForGoodPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/responsible-ai" element={<ResponsibleAiPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />

                  {/* New Routes */}
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/technology" element={<TechnologyPage />} />
                  <Route path="/values" element={<ValuesPage />} />
                  <Route path="/methodology" element={<MethodologyPage />} />
                  
                  {/* Industry Routes */}
                  <Route path="/industries/retail-consumer-products" element={<RetailPage />} />
                  <Route path="/industries/transportation-mobility" element={<TransportationPage />} />
                  <Route path="/industries/energy-commodities" element={<EnergyPage />} />
                  <Route path="/industries/financial-services" element={<FinancePage />} />
                  <Route path="/industries/health-life-sciences" element={<HealthPage />} />
                  <Route path="/industries/public-sector" element={<PublicSectorPage />} />

                  {/* Solution Routes */}
                  <Route path="/solutions/artificial-intelligence" element={<AiPage />} />
                  <Route path="/solutions/digital-engineering" element={<DigitalEngineeringPage />} />
                  <Route path="/solutions/cloud-infrastructure" element={<CloudPage />} />
                  <Route path="/solutions/experience-transformation" element={<ExperienceTransformationPage />} />
                  <Route path="/solutions/digital-commerce" element={<DigitalCommercePage />} />
                  <Route path="/solutions/supply-chain" element={<SupplyChainPage />} />

                  {/* Velocity Routes */}
                  <Route path="/velocity-approach/vision" element={<VisionPage />} />
                  <Route path="/velocity-approach/engineering" element={<EngineeringPage />} />
                  <Route path="/velocity-approach/logic" element={<LogicPage />} />
                  <Route path="/velocity-approach/operationalize" element={<OperationalizePage />} />
                  <Route path="/velocity-approach/collaborate-evolve" element={<CollaborateEvolvePage />} />
                </Routes>
            </main>
            <Footer />
          </div>
          <InsightModal content={activeContent} onClose={handleCloseContent} />
          <CookieConsent />
        </>
    </HashRouter>
  );
};

export default App;