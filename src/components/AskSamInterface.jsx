
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Check, Sparkles } from 'lucide-react';

const AskSamInterface = () => {
  const [showWorkflow, setShowWorkflow] = useState(true);
  const [workflowStep, setWorkflowStep] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isApproveAnimating, setIsApproveAnimating] = useState(false);
  
  // Animation states
  const [showLeftCard, setShowLeftCard] = useState(false);
  const [showTopImages, setShowTopImages] = useState(false);
  const [showRightCard, setShowRightCard] = useState(false);
  const [showBottomCard, setShowBottomCard] = useState(false);
  const [showCenterCircle, setShowCenterCircle] = useState(false);

  /**
   * Workflow steps
   */
  const workflowSteps = [
    'Analyzing the current layout',
    'Set Album Banner',
    'Check Streams Analytics',
    "Create 'Fan Favorite'",
    'Add Tracks'
  ];

  /**
   * Full message that is being typed
   */
  const fullMessage = "Sam prepare for my new album release next week. Also, add a Fan Favorites section based on top-streamed tracks.";

  /**
   * Entrance Animation Sequence
   */
  useEffect(() => {
    const animationSequence = [
      { delay: 0, action: () => setShowLeftCard(true) },
      { delay: 800, action: () => setShowTopImages(true) },
      { delay: 1600, action: () => setShowCenterCircle(true) },
      { delay: 2400, action: () => setShowRightCard(true) },
      { delay: 3200, action: () => setShowBottomCard(true) },
    ];

    animationSequence.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Restart animation sequence every 15 seconds
    const restartInterval = setInterval(() => {
      setShowLeftCard(false);
      setShowTopImages(false);
      setShowCenterCircle(false);
      setShowRightCard(false);
      setShowBottomCard(false);
      
      setTimeout(() => {
        animationSequence.forEach(({ delay, action }) => {
          setTimeout(action, delay);
        });
      }, 500);
    }, 15000);

    return () => clearInterval(restartInterval);
  }, []);

  /**
   * Start the continuous workflow cycle
   */
  useEffect(() => {
    const startWorkflowCycle = () => {
      setWorkflowStep(0);
      let step = 0;
      const stepInterval = setInterval(() => {
        if (step < workflowSteps.length) {
          setWorkflowStep(step + 1);
          step++;
        } else {
          clearInterval(stepInterval);
          // Wait 2 seconds then restart the cycle
          setTimeout(() => {
            startWorkflowCycle();
          }, 2000);
        }
      }, 1200); // Slightly faster progression
    };

    // Start the continuous cycle
    startWorkflowCycle();
  }, []);

  /**
   * Start the continuous typing animation
   */
  // Continuous typing animation
  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentCharIndex(0);
      setTypingText('');
    };

    // Start typing immediately
    startTyping();

    // Restart typing every 8 seconds
    const restartInterval = setInterval(() => {
      startTyping();
    }, 8000);

    return () => clearInterval(restartInterval);
  }, []);

  useEffect(() => {
    if (isTyping && currentCharIndex <= fullMessage.length) {
      const typingTimer = setTimeout(() => {
        if (currentCharIndex < fullMessage.length) {
          setTypingText(fullMessage.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setIsTyping(false);
          // Pause for 3 seconds before restarting
          setTimeout(() => {
            setCurrentCharIndex(0);
            setTypingText('');
            setIsTyping(true);
          }, 3000);
        }
      }, 80); // Slower typing speed for better effect

      return () => clearTimeout(typingTimer);
    }
  }, [isTyping, currentCharIndex, fullMessage]);

  const handleStartWorkflow = () => {
    setWorkflowStep(0);
    let step = 0;
    const stepInterval = setInterval(() => {
      if (step < workflowSteps.length) {
        setWorkflowStep(step + 1);
        step++;
      } else {
        clearInterval(stepInterval);
      }
    }, 1000);
  };

  const handleTypeMessage = () => {
    setIsTyping(true);
    setCurrentCharIndex(0);
    setTypingText('');
  };

  const handleApprove = () => {
    setIsApproveAnimating(true);
    setTimeout(() => {
      setIsApproveAnimating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden w-full">
      {/* Enhanced Entrance Animations CSS */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%) scale(0.8) rotate(-10deg);
            opacity: 0;
            filter: blur(10px);
          }
          50% {
            transform: translateX(-20%) scale(1.05) rotate(2deg);
            opacity: 0.8;
            filter: blur(2px);
          }
          100% {
            transform: translateX(0) scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%) scale(0.8) rotate(10deg);
            opacity: 0;
            filter: blur(10px);
          }
          50% {
            transform: translateX(20%) scale(1.05) rotate(-2deg);
            opacity: 0.8;
            filter: blur(2px);
          }
          100% {
            transform: translateX(0) scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes slideInTop {
          0% {
            transform: translateY(-100%) scale(0.7) rotateX(90deg);
            opacity: 0;
            filter: blur(15px);
          }
          50% {
            transform: translateY(-20%) scale(1.1) rotateX(45deg);
            opacity: 0.7;
            filter: blur(5px);
          }
          100% {
            transform: translateY(0) scale(1) rotateX(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes slideInBottom {
          0% {
            transform: translateY(100%) scale(0.7) rotateX(-90deg);
            opacity: 0;
            filter: blur(15px);
          }
          50% {
            transform: translateY(20%) scale(1.1) rotateX(-45deg);
            opacity: 0.7;
            filter: blur(5px);
          }
          100% {
            transform: translateY(0) scale(1) rotateX(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes zoomInCenter {
          0% {
            transform: scale(0) rotate(180deg);
            opacity: 0;
            filter: blur(20px);
          }
          30% {
            transform: scale(0.3) rotate(120deg);
            opacity: 0.3;
            filter: blur(10px);
          }
          60% {
            transform: scale(0.8) rotate(60deg);
            opacity: 0.7;
            filter: blur(5px);
          }
          80% {
            transform: scale(1.2) rotate(20deg);
            opacity: 0.9;
            filter: blur(2px);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes floatIn {
          0% {
            transform: translateY(50px) rotateY(90deg);
            opacity: 0;
            filter: blur(8px);
          }
          50% {
            transform: translateY(-10px) rotateY(45deg);
            opacity: 0.8;
            filter: blur(3px);
          }
          100% {
            transform: translateY(0) rotateY(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes sparkleIn {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes pulse3D {
          0%, 100% {
            transform: scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(125, 128, 253, 0.5);
          }
          50% {
            transform: scale(1.05) rotateX(5deg);
            box-shadow: 0 0 40px rgba(125, 128, 253, 0.8);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-md {
          from {
            transform: rotate(0deg) translateX(160px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); }
        }
        
        .orbit-icon {
          animation: orbit 15s linear infinite;
        }
        
        @media (min-width: 768px) {
          .orbit-icon {
            animation: orbit-md 15s linear infinite;
          }
        }
        
        .orbit-icon:nth-child(1) { animation-delay: 0s; }
        .orbit-icon:nth-child(2) { animation-delay: -3s; }
        .orbit-icon:nth-child(3) { animation-delay: -6s; }
        .orbit-icon:nth-child(4) { animation-delay: -9s; }
        .orbit-icon:nth-child(5) { animation-delay: -12s; }

        .entrance-left {
          animation: slideInLeft 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-right {
          animation: slideInRight 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-top {
          animation: slideInTop 1.0s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-bottom {
          animation: slideInBottom 1.0s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-center {
          animation: zoomInCenter 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-float {
          animation: floatIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .entrance-sparkle {
          animation: sparkleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .continuous-pulse {
          animation: pulse3D 2s ease-in-out infinite;
        }

        .hidden-entrance {
          opacity: 0;
          transform: scale(0);
        }
      `}</style>

      {/* Enhanced Flow Path Design - Exact replica matching screenshots */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            {/* Exact gradient colors matching rgba(125, 128, 253, 1) to rgba(225, 107, 160, 1) */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(125, 128, 253, 1)"/>
              <stop offset="50%" stopColor="rgba(175, 117, 206, 1)"/>
              <stop offset="100%" stopColor="rgba(225, 107, 160, 1)"/>
            </linearGradient>
            
            {/* Radial gradient for dots */}
            <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(125, 128, 253, 1)"/>
              <stop offset="100%" stopColor="rgba(225, 107, 160, 1)"/>
            </radialGradient>
          </defs>
          
          {/* Main curved flow path exactly as shown in images */}
          <path 
            d="M 50% 5% Q 85% 15% 95% 50% Q 85% 85% 50% 95% Q 15% 85% 5% 50% Q 15% 15% 50% 5%"
            stroke="url(#flowGradient)" 
            strokeWidth="8" 
            fill="none"
            strokeDasharray="8 12"
            opacity="0.95"
            strokeLinecap="round"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0;-40" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Secondary inner path for depth */}
          <path 
            d="M 50% 10% Q 80% 20% 90% 50% Q 80% 80% 50% 90% Q 20% 80% 10% 50% Q 20% 20% 50% 10%"
            stroke="url(#flowGradient)" 
            strokeWidth="4" 
            fill="none"
            strokeDasharray="6 10"
            opacity="0.6"
            strokeLinecap="round"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              values="0;-32" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Flowing gradient dots along the main path */}
          {[...Array(16)].map((_, i) => (
            <circle key={`main-dot-${i}`} r="5" fill="url(#dotGradient)" opacity="0.9">
              <animateMotion 
                dur="6s" 
                repeatCount="indefinite"
                begin={`${i * 0.375}s`}
              >
                <path d="M 50% 5% Q 85% 15% 95% 50% Q 85% 85% 50% 95% Q 15% 85% 5% 50% Q 15% 15% 50% 5%"/>
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;0.8;0"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.375}s`}
              />
              <animate
                attributeName="r"
                values="3;6;3"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.375}s`}
              />
            </circle>
          ))}
          
          {/* Smaller accent dots with different timing */}
          {[...Array(12)].map((_, i) => (
            <circle key={`accent-dot-${i}`} r="3" fill="rgba(225, 107, 160, 0.9)" opacity="0.7">
              <animateMotion 
                dur="8s" 
                repeatCount="indefinite"
                begin={`${i * 0.67}s`}
              >
                <path d="M 50% 10% Q 80% 20% 90% 50% Q 80% 80% 50% 90% Q 20% 80% 10% 50% Q 20% 20% 50% 10%"/>
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur="1.5s"
                repeatCount="indefinite"
                begin={`${i * 0.67}s`}
              />
            </circle>
          ))}
          
          {/* Additional sparkle dots for premium effect */}
          {[...Array(8)].map((_, i) => (
            <circle key={`sparkle-${i}`} r="2" fill="rgba(125, 128, 253, 1)" opacity="0.8">
              <animateMotion 
                dur="10s" 
                repeatCount="indefinite"
                begin={`${i * 1.25}s`}
              >
                <path d="M 50% 5% Q 85% 15% 95% 50% Q 85% 85% 50% 95% Q 15% 85% 5% 50% Q 15% 15% 50% 5%"/>
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1s"
                repeatCount="indefinite"
                begin={`${i * 1.25}s`}
              />
              <animate
                attributeName="r"
                values="1;4;1"
                dur="1s"
                repeatCount="indefinite"
                begin={`${i * 1.25}s`}
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Album Cover - TOP with enhanced entrance animations */}
        <div className={`flex justify-center mb-6 md:mb-8 relative ${showTopImages ? 'entrance-top' : 'hidden-entrance'}`}>
          <img
            src="src/assets/Downimage.svg"
            alt="Album Cover"
            className="w-full max-w-[210px] h-auto mx-auto mb-4 object-cover rounded-md shadow continuous-pulse"
          />
          
          {/* Positioned images at bottom-right corner with enhanced animations */}
          <div className="absolute bottom-[-20px] right-[calc(50%-105px)] md:right-[calc(50%-210px)] flex flex-col">
            <img 
              src="src/assets/MeetSomebody.svg" 
              alt="Let Me Go Away" 
              className="w-50 h-42 md:w-64 md:h-50 object-contain animate-bounce entrance-float" 
              style={{animationDelay: '0.3s'}}
            />
            <img 
              src="src/assets/MaimiTour.svg" 
              alt="Miami Tour" 
              className="w-48 h-32 md:w-64 md:h-32 object-contain -mt-6 md:-mt-8 animate-pulse entrance-float" 
              style={{animationDelay: '0.6s'}}
            />
          </div>
        </div>

        {/* Understanding Context Label with sparkle animation */}
        <div className={`flex justify-center mb-6 md:mb-8 ${showTopImages ? 'entrance-sparkle' : 'hidden-entrance'}`}>
          <div className="bg-gray-100 rounded-full px-4 md:px-6 py-2 shadow-lg border border-purple-200 continuous-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium text-sm md:text-base">Understanding Context</span>
            </div>
          </div>
        </div>

        {/* Main Layout - Enhanced with stunning entrance animations */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 xl:space-x-24 mb-6 md:mb-8 w-full">
          {/* Left Chat Box with dramatic entrance */}
          <div className={`bg-gray-50 rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-md lg:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-300 ${showLeftCard ? 'entrance-left' : 'hidden-entrance'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </div>
              <span className="font-bold text-gray-800 text-sm md:text-base">Ask Sam</span>
            </div>
            
            <div className="bg-white rounded-xl p-3 md:p-4 mb-4 min-h-[80px] md:min-h-[100px] flex items-center continuous-pulse">
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                {typingText}
                {isTyping && (
                  <span className="animate-pulse text-purple-500 font-bold">|</span>
                )}
                {!isTyping && typingText === fullMessage && (
                  <span className="opacity-0 animate-pulse">|</span>
                )}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Ask me to do anything ..." 
                className="flex-1 bg-gray-100 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={handleTypeMessage}
              />
              <button className="text-purple-500 hover:text-purple-700 transition-colors">
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Center Circle with spectacular entrance */}
          <div className={`relative order-last lg:order-none ${showCenterCircle ? 'entrance-center' : 'hidden-entrance'}`}>
            <div className="w-60 h-60 md:w-80 md:h-80 relative">
              {/* Outer subtle ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-40"></div>
              
              {/* Inner ring with floating animation */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-60" style={{animation: 'float 4s ease-in-out infinite'}}></div>
              
              {/* Orbiting Icons Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Facebook */}
                <div className="orbit-icon absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="src/assets/Fcaebook.svg" alt="Facebook" className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Twitter */}
                <div className="orbit-icon absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="src/assets/Twitter.svg" alt="Twitter" className="w-10 h-10 md:w-14 md:h-14 hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Twitch */}
                <div className="orbit-icon absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="src/assets/Twitch.svg" alt="Twitch" className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Instagram */}
                <div className="orbit-icon absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="src/assets/Instagram.svg" alt="Instagram" className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* YouTube */}
                <div className="orbit-icon absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="src/assets/Youtube.svg" alt="YouTube" className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              
              {/* Center Circle with enhanced glow animation */}
              <div className="absolute inset-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center continuous-pulse" style={{animation: 'glow 3s ease-in-out infinite'}}>
                <img src="src/assets/@symbol.svg" alt="Your Symbol" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Chat Box with spectacular entrance */}
          <div className={`bg-gray-50 rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg xl:max-w-2xl overflow-hidden ${showRightCard ? 'entrance-right' : 'hidden-entrance'}`}>
            <div className="p-4 md:p-6 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base">Ask Sam</span>
              </div>
            </div>
            
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                </div>
                <span className="font-semibold text-gray-700 text-sm md:text-base animate-pulse">Worked for 30 Sec</span>
              </div>
              
              <div className="space-y-3 md:space-y-4 ml-3 md:ml-4 border-l-2 border-gray-200 pl-4 md:pl-6 relative">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 relative transition-all duration-700">
                    <div className={`absolute -left-6 md:-left-8 w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center transition-all duration-700 ${
                      index < workflowStep 
                        ? 'bg-gradient-to-r from-green-400 to-green-600 transform scale-125 shadow-lg animate-pulse' 
                        : 'bg-gray-300'
                    }`}
                    style={{
                      boxShadow: index < workflowStep ? '0 0 15px rgba(34, 197, 94, 0.6)' : 'none'
                    }}>
                      {index < workflowStep && (
                        <Check className="w-2 h-2 md:w-3 md:h-3 text-white animate-bounce" strokeWidth={3} />
                      )}
                    </div>
                    <span className={`text-xs md:text-sm font-medium transition-all duration-700 ${
                      index < workflowStep ? 'text-green-600 font-bold transform scale-105' : 'text-gray-500'
                    }`}>
                      {step}
                    </span>
                    {index < workflowStep && (
                      <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-pulse opacity-60"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-xs text-gray-400 mt-4 md:mt-6 animate-pulse">12:30pm</div>
              
              <div className="flex space-x-3 mt-4 md:mt-6">
                <button 
                  className={`text-white px-4 md:px-6 py-2 rounded-lg font-medium flex-1 text-sm md:text-base transition-all duration-500 transform ${
                    isApproveAnimating 
                      ? 'bg-gradient-to-r from-green-400 to-green-600 scale-105 shadow-2xl animate-pulse' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  onClick={handleApprove}
                  style={{
                    boxShadow: isApproveAnimating ? '0 0 25px rgba(34, 197, 94, 0.8)' : 'none'
                  }}
                >
                  {isApproveAnimating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Approved!</span>
                    </div>
                  ) : (
                    'Approve'
                  )}
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 md:px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium flex-1 text-sm md:text-base">
                  Cancel
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-100 p-4 md:p-6">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Ask me to do anything ..." 
                  className="flex-1 bg-gray-100 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button 
                  className="text-purple-500 hover:text-purple-700 transition-colors"
                  onClick={handleStartWorkflow}
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modified Design Label with sparkle entrance */}
        <div className={`flex justify-center mb-6 md:mb-8 ${showBottomCard ? 'entrance-sparkle' : 'hidden-entrance'}`}>
          <div className="bg-gray-100 rounded-full px-4 md:px-6 py-2 shadow-lg border border-purple-200 continuous-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium text-sm md:text-base">Modified Design</span>
            </div>
          </div>
        </div>

        {/* Bottom Album Cover with spectacular entrance */}
        <div className={`flex justify-center relative ${showBottomCard ? 'entrance-bottom' : 'hidden-entrance'}`}>   
          <img        
            src="src/assets/Downimage.svg"        
            alt="Album Cover"        
            className="w-full max-w-[210px] h-auto mx-auto mb-4 object-cover rounded-md shadow continuous-pulse"     
          />      
          
          {/* Positioned images at bottom-right corner with enhanced entrance animations */}   
          <div className="absolute bottom-[-20px] right-[calc(50%-105px)] md:right-[calc(50%-210px)] flex flex-col">
            <img 
              src="src/assets/LetMeGoAway.svg" 
              alt="Let Me Go Away" 
              className="w-50 h-32 md:w-64 md:h-40 object-contain animate-bounce entrance-float" 
              style={{animationDelay: '0.5s'}}
            />
            <img 
              src="src/assets/MaimiTour.svg" 
              alt="Miami Tour" 
              className="w-48 h-32 md:w-64 md:h-32 object-contain -mt-6 md:-mt-8 animate-pulse entrance-float" 
              style={{animationDelay: '0.8s'}}
            />
          </div>        
        </div>
      </div>
    </div>
  );
};

export default AskSamInterface;




// const AskSamInterface = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
//       <img    
//         src="src/assets/All_Combined.jpg"    
//         alt="Album Cover"    
//         className="w-11/12 max-w-6xl h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-3xl" 
//       />
//     </div>
//   );
// };

// export default AskSamInterface;