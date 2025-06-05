






import React, { useState, useEffect } from 'react';

export default function SamAILanding() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load YouForm embed script when form is shown
    if (showForm && !document.querySelector('script[src="https://app.youform.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://app.youform.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showForm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Top-left geometric lines */}
          <path d="M0 0L200 100L100 300L0 200Z" fill="url(#gradient1)" opacity="0.1"/>
          <path d="M100 50L300 150L200 350L100 250Z" fill="url(#gradient2)" opacity="0.08"/>
          
          {/* Top-right geometric lines */}
          <path d="M1200 0L1000 100L1100 300L1200 200Z" fill="url(#gradient3)" opacity="0.1"/>
          <path d="M1100 50L900 150L1000 350L1100 250Z" fill="url(#gradient4)" opacity="0.08"/>
          
          {/* Bottom geometric lines */}
          <path d="M300 800L500 700L400 500L300 600Z" fill="url(#gradient5)" opacity="0.1"/>
          <path d="M800 800L1000 700L900 500L800 600Z" fill="url(#gradient6)" opacity="0.08"/>
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Power Your Presence with Intelligent
            <br />
            <span className="text-gray-800">Automation</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the waitlist and get exclusive early access to Sam AI. Shape the future of how creators manage their social presence.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
          >
            Get early access now!
          </button>
          <p className="text-sm text-gray-500">Join 100+ creators already on the waitlist</p>
        </div>

{/* Sam AI Section - Screenshot Recreation */}        
<div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl ">   
  <div className="text-center">     
    <div className="flex justify-center">       
      <img          
        src="src/assets/Sam.svg"          
        alt="Sam"          
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"        
      />     
    </div>          
    
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">       
      Your AI Powered Social Presence Agent     
    </h3>          
    
    <p className="text-lg text-gray-600 mb-6">       
      Join the waitlist and get exclusive early access to Agent Sam     
    </p>          
    
    <button       
      onClick={() => setShowForm(true)}       
      className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"     
    >       
      Get early access now! <span className="text-sm ml-2">press Enter ↵</span>     
    </button>          
    
    {/* Social Address Logo */}     
    <div className="flex items-center justify-center">       
      <img          
        src="src/assets/CompanySymbol.svg"          
        alt="Sam"          
        className="w-48 h-48 sm:w-56 sm:h-56"        
      />     
    </div>   
  </div> 
</div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative">
            {/* Close button */}
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Form Header */}
            <div className="p-8 pb-4 text-center border-b">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Join the Waitlist</h3>
              <p className="text-gray-600">Get exclusive early access to Sam AI</p>
            </div>
            
            {/* Embedded Form */}
            <div className="p-8">
              <div 
                data-youform-embed 
                data-form='gmakeip5' 
                data-width='100%' 
                data-height='500'
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}