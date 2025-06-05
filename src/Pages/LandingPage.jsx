

// import React, { useRef } from 'react';
// import SocialAddressHeader from '../components/SocialAddressHeader';
// import SamAIHero from '../components/SamAiHero';
// import SamLandingPage from '../components/SamLandingPAGE';
// import AskSamInterface from '../components/AskSamInterface';
// import SamAIHeroSection from '../components/SamAIHeroSection';
// import SamAILanding from '../components/SamAILanding';

// const LandingPage = () => {
//   const heroRef = useRef(null);
//   const landingRef = useRef(null);
//   const interfaceRef = useRef(null);
//   const samAiLandingRef = useRef(null);
//   const socialAddressRef = useRef(null);
//   const samAIHeroSectionRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   return (
//     <div className="landing-page-container">
      
    
      
//       {/* First Section - Sam Landing Page */}
//       <section ref={landingRef} className="landing-section" id="landing">
//         <SamLandingPage />
//         {/* Optional scroll indicator */}
//       </section>
      
//       {/* Second Section - Ask Sam Interface */}
//       <section ref={interfaceRef} className="interface-section" id="interface">
//         <AskSamInterface />
//         {/* Optional back to top */}
//       </section>
      
//       {/* Third Section - Sam AI Hero */}
//       <section ref={heroRef} className="hero-section" id="hero">
//         <SamAIHero />
//         {/* Optional scroll indicator */}
//       </section>
      
//       {/*fourth Section - Sam AI Landing */}
//       <section ref={samAiLandingRef} className="sam-ai-landing-section" id="sam-ai-landing">
//         <SamAILanding />
//       </section>

//       {/* Fifth Section - Sam AI Hero Section */}
//       <section ref={samAIHeroSectionRef} className="sam-ai-hero-section" id="sam-ai-hero-section">
//         <SamAIHeroSection />
//       </section>
      
      

//         {/* Social Address Header Section */}
//       <section ref={socialAddressRef} className="social-address-section" id="social-address">
//         <SocialAddressHeader />
//       </section>
      
//     </div>
//   );
// };

// export default LandingPage;





import React, { useRef } from 'react';
import SocialAddressHeader from '../components/SocialAddressHeader';
import SamAIHero from '../components/SamAiHero';
import SamLandingPage from '../components/SamLandingPAGE';
import AskSamInterface from '../components/AskSamInterface';
import SamAIHeroSection from '../components/SamAIHeroSection';
import SamAILanding from '../components/SamAILanding';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const heroRef = useRef(null);
  const landingRef = useRef(null);
  const interfaceRef = useRef(null);
  const samAiLandingRef = useRef(null);
  const socialAddressRef = useRef(null);
  const samAIHeroSectionRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="landing-page-container">
      
      {/* Navbar Section */}
      <section ref={navbarRef} className="navbar-section" id="navbar">
        <Navbar />
      </section>
      
      {/* First Section - Sam Landing Page */}
      <section ref={landingRef} className="landing-section" id="landing">
        <SamLandingPage />
        {/* Optional scroll indicator */}
      </section>
      
      {/* Second Section - Ask Sam Interface */}
      <section ref={interfaceRef} className="interface-section" id="interface">
        <AskSamInterface />
        {/* Optional back to top */}
      </section>
      
      {/* Third Section - Sam AI Hero */}
      <section ref={heroRef} className="hero-section" id="hero">
        <SamAIHero />
        {/* Optional scroll indicator */}
      </section>
      
      {/*fourth Section - Sam AI Landing */}
      <section ref={samAiLandingRef} className="sam-ai-landing-section" id="sam-ai-landing">
        <SamAILanding />
      </section>

      {/* Fifth Section - Sam AI Hero Section */}
      <section ref={samAIHeroSectionRef} className="sam-ai-hero-section" id="sam-ai-hero-section">
        <SamAIHeroSection />
      </section>
      
      {/* Social Address Header Section */}
      <section ref={socialAddressRef} className="social-address-section" id="social-address">
        <SocialAddressHeader />
      </section>
      
    </div>
  );
};

export default LandingPage;