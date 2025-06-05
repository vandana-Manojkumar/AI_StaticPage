
// import React, { useState, useEffect } from 'react';
// import { MessageCircle, Send, Check, Sparkles } from 'lucide-react';

// /**
//  * AskSamInterface
//  * This component renders the main interface of AskSam.
//  * It contains the chat box, album cover, and the workflow steps.
//  */
// const AskSamInterface = () => {
//   /**
//    * State variables
//    */
//   const [showWorkflow, setShowWorkflow] = useState(true);
//   const [workflowStep, setWorkflowStep] = useState(0);
//   const [typingText, setTypingText] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);
//   const [isApproveAnimating, setIsApproveAnimating] = useState(false);

//   /**
//    * Workflow steps
//    */
//   const workflowSteps = [
//     'Analyzing the current layout',
//     'Set Album Banner',
//     'Check Streams Analytics',
//     "Create 'Fan Favorite'",
//     'Add Tracks'
//   ];

//   /**
//    * Full message that is being typed
//    */
//   const fullMessage = "Sam prepare for my new album release next week. Also, add a Fan Favorites section based on top-streamed tracks.";

//   /**
//    * Start the continuous workflow cycle
//    */
//   useEffect(() => {
//     const startWorkflowCycle = () => {
//       setWorkflowStep(0);
//       let step = 0;
//       const stepInterval = setInterval(() => {
//         if (step < workflowSteps.length) {
//           setWorkflowStep(step + 1);
//           step++;
//         } else {
//           clearInterval(stepInterval);
//           // Wait 2 seconds then restart the cycle
//           setTimeout(() => {
//             startWorkflowCycle();
//           }, 2000);
//         }
//       }, 1200); // Slightly faster progression
//     };

//     // Start the continuous cycle
//     startWorkflowCycle();
//   }, []);

//   /**
//    * Start the continuous typing animation
//    */
//   // Continuous typing animation
//   useEffect(() => {
//     const startTyping = () => {
//       setIsTyping(true);
//       setCurrentCharIndex(0);
//       setTypingText('');
//     };

//     // Start typing immediately
//     startTyping();

//     // Restart typing every 8 seconds
//     const restartInterval = setInterval(() => {
//       startTyping();
//     }, 8000);

//     return () => clearInterval(restartInterval);
//   }, []);

//   useEffect(() => {
//     if (isTyping && currentCharIndex <= fullMessage.length) {
//       const typingTimer = setTimeout(() => {
//         if (currentCharIndex < fullMessage.length) {
//           setTypingText(fullMessage.slice(0, currentCharIndex + 1));
//           setCurrentCharIndex(currentCharIndex + 1);
//         } else {
//           setIsTyping(false);
//           // Pause for 3 seconds before restarting
//           setTimeout(() => {
//             setCurrentCharIndex(0);
//             setTypingText('');
//             setIsTyping(true);
//           }, 3000);
//         }
//       }, 80); // Slower typing speed for better effect

//       return () => clearTimeout(typingTimer);
//     }
//   }, [isTyping, currentCharIndex, fullMessage]);

//   const handleStartWorkflow = () => {
//     setWorkflowStep(0);
//     let step = 0;
//     const stepInterval = setInterval(() => {
//       if (step < workflowSteps.length) {
//         setWorkflowStep(step + 1);
//         step++;
//       } else {
//         clearInterval(stepInterval);
//       }
//     }, 1000);
//   };

//   const handleTypeMessage = () => {
//     setIsTyping(true);
//     setCurrentCharIndex(0);
//     setTypingText('');
//   };

//   const handleApprove = () => {
//     setIsApproveAnimating(true);
//     setTimeout(() => {
//       setIsApproveAnimating(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden w-full">
//       {/* Curved Dotted Lines Design */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
//         <svg className="absolute inset-0 w-full h-full">
//           <defs>
//             <linearGradient id="curvedGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(167, 139, 250, 0.8)"/>
//               <stop offset="50%" stopColor="rgba(196, 181, 253, 0.8)"/>
//               <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)"/>
//             </linearGradient>
//             <linearGradient id="curvedGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(236, 72, 153, 0.8)"/>
//               <stop offset="50%" stopColor="rgba(196, 181, 253, 0.8)"/>
//               <stop offset="100%" stopColor="rgba(167, 139, 250, 0.8)"/>
//             </linearGradient>
//             <linearGradient id="curvedGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(125, 128, 253, 1)"/>
//               <stop offset="100%" stopColor="rgba(225, 107, 160, 1)"/>
//             </linearGradient>
//           </defs>
          
//           {/* Responsive curved paths */}
//           <path 
//             d="M 20% 30% Q 10% 40% 15% 55% Q 10% 65% 20% 70%"
//             stroke="url(#curvedGradient1)" 
//             strokeWidth="3" 
//             fill="none"
//             strokeDasharray="8 12"
//             opacity="0.9"
//           >
//             <animate 
//               attributeName="stroke-dashoffset" 
//               values="0;-40" 
//               dur="3s" 
//               repeatCount="indefinite"
//             />
//           </path>
          
//           <path 
//             d="M 80% 30% Q 90% 25% 85% 50% Q 95% 60% 80% 70%"
//             stroke="url(#curvedGradient3)" 
//             strokeWidth="4" 
//             fill="none"
//             strokeDasharray="10 15"
//             opacity="1"
//           >
//             <animate 
//               attributeName="stroke-dashoffset" 
//               values="0;-50" 
//               dur="2.5s" 
//               repeatCount="indefinite"
//             />
//           </path>
          
//           <path 
//             d="M 80% 70% Q 90% 75% 85% 85% Q 90% 90% 80% 95%"
//             stroke="url(#curvedGradient2)" 
//             strokeWidth="3" 
//             fill="none"
//             strokeDasharray="8 12"
//             opacity="0.9"
//           >
//             <animate 
//               attributeName="stroke-dashoffset" 
//               values="0;-40" 
//               dur="3s" 
//               repeatCount="indefinite"
//             />
//           </path>
          
//           {/* Floating dots along the curves */}
//           {[...Array(8)].map((_, i) => (
//             <circle key={`dot1-${i}`} r="3" fill="rgba(167, 139, 250, 0.8)" opacity="0.7">
//               <animateMotion 
//                 dur="6s" 
//                 repeatCount="indefinite"
//                 begin={`${i * 0.75}s`}
//               >
//                 <path d="M 20% 30% Q 10% 40% 15% 55% Q 10% 65% 20% 70%"/>
//               </animateMotion>
//               <animate
//                 attributeName="opacity"
//                 values="0;1;0"
//                 dur="2s"
//                 repeatCount="indefinite"
//                 begin={`${i * 0.75}s`}
//               />
//             </circle>
//           ))}
          
//           {[...Array(10)].map((_, i) => (
//             <circle key={`dot3-${i}`} r="3.5" fill="rgba(125, 128, 253, 0.9)" opacity="0.8">
//               <animateMotion 
//                 dur="5s" 
//                 repeatCount="indefinite"
//                 begin={`${i * 0.5}s`}
//               >
//                 <path d="M 80% 30% Q 90% 25% 85% 50% Q 95% 60% 80% 70%"/>
//               </animateMotion>
//               <animate
//                 attributeName="opacity"
//                 values="0;1;0"
//                 dur="1.5s"
//                 repeatCount="indefinite"
//                 begin={`${i * 0.5}s`}
//               />
//             </circle>
//           ))}
          
//           {[...Array(8)].map((_, i) => (
//             <circle key={`dot2-${i}`} r="3" fill="rgba(236, 72, 153, 0.8)" opacity="0.7">
//               <animateMotion 
//                 dur="6s" 
//                 repeatCount="indefinite"
//                 begin={`${i * 0.75}s`}
//               >
//                 <path d="M 80% 70% Q 90% 75% 85% 85% Q 90% 90% 80% 95%"/>
//               </animateMotion>
//               <animate
//                 attributeName="opacity"
//                 values="0;1;0"
//                 dur="2s"
//                 repeatCount="indefinite"
//                 begin={`${i * 0.75}s`}
//               />
//             </circle>
//           ))}
//         </svg>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto">
//         {/* Album Cover */}
//         <div className="flex justify-center mb-6 md:mb-8">
//                            <img 
//   src="src/assets/Downimage.svg" 
//   alt="Album Cover" 
//   className="w-full max-w-[300px] h-auto mx-auto mb-4 object-cover rounded-md shadow"
// />
//         </div>

//         {/* Understanding Context Label */}
//         <div className="flex justify-center mb-6 md:mb-8">
//           <div className="bg-gray-100 rounded-full px-4 md:px-6 py-2 shadow-lg border border-purple-200">
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
//               <span className="text-gray-700 font-medium text-sm md:text-base">Understanding Context</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Layout - Increased spacing between cards */}
//         <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 xl:space-x-24 mb-6 md:mb-8 w-full">
//           {/* Left Chat Box */}
//           <div className="bg-gray-50 rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-md lg:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-300">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
//                 <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
//               </div>
//               <span className="font-bold text-gray-800 text-sm md:text-base">Ask Sam</span>
//             </div>
            
//             <div className="bg-white rounded-xl p-3 md:p-4 mb-4 min-h-[80px] md:min-h-[100px] flex items-center">
//               <p className="text-gray-800 leading-relaxed text-sm md:text-base">
//                 {typingText}
//                 {isTyping && (
//                   <span className="animate-pulse text-purple-500 font-bold">|</span>
//                 )}
//                 {!isTyping && typingText === fullMessage && (
//                   <span className="opacity-0 animate-pulse">|</span>
//                 )}
//               </p>
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <input 
//                 type="text" 
//                 placeholder="Ask me to do anything ..." 
//                 className="flex-1 bg-gray-100 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 onClick={handleTypeMessage}
//               />
//               <button className="text-purple-500 hover:text-purple-700 transition-colors">
//                 <Send className="w-4 h-4 md:w-5 md:h-5" />
//               </button>
//             </div>
//           </div>

// {/* Center Circle with Social Icons */}
// <div className="relative order-last lg:order-none">
//   <div className="w-60 h-60 md:w-80 md:h-80 relative">
//     {/* Outer gray circle with pulse animation */}
//     <div className="absolute inset-0 rounded-full bg-gray-300 opacity-90 animate-pulse"></div>
    
//     {/* Inner gray circle with breathing animation */}
//     <div className="absolute inset-8 rounded-full bg-gray-400 opacity-90 animate-bounce" style={{animationDuration: '3s'}}></div>
    
//     {/* Rotating container for images - moved to outer circle */}
//     <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
//       {/* Facebook - Top */}
//       <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform">
//           <img src="src/assets/Fcaebook.svg" alt="Facebook" className="w-10 h-10 md:w-12 md:h-12" />
//         </div>
//       </div>
      
//       {/* Twitter - Top Right (72 degrees) */}
//       <div className="absolute top-2 right-2 transform">
//         <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform">
//           <img src="src/assets/Twitter.svg" alt="Twitter" className="w-9 h-9 md:w-10 md:h-10" />
//         </div>
//       </div>
      
//       {/* Right (144 degrees) */}
//       <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
//         <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform">
//           <img src="src/assets/Twitch.svg" alt="Twitch" className="w-10 h-10 md:w-12 md:h-12" />
//         </div>
//       </div>
      
//       {/* Bottom Right (216 degrees) */}
//       <div className="absolute bottom-2 right-2 transform">
//         <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform">
//           <img src="src/assets/Instagram.svg" alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" />
//         </div>
//       </div>
      
//       {/* Bottom (288 degrees) */}
//       <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform">
//           <img src="src/assets/Youtube.svg" alt="YouTube" className="w-10 h-10 md:w-12 md:h-12" />
//         </div>
//       </div>
//     </div>
    
//     {/* Center Circle - static, no rotation with glow animation */}
//     <div className="absolute inset-16 bg-black rounded-full flex items-center justify-center shadow-2xl animate-pulse" style={{animationDuration: '2s'}}>
//       {/* Your image will go here - replace src="" with your image path */}
//       <img src="src/assets/@symbol.svg" alt="Your Symbol" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
//     </div>
//   </div>
// </div>
//           {/* Right Chat Box - Enhanced with continuous animations */}
//           <div className="bg-gray-50 rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg xl:max-w-2xl overflow-hidden">
//             <div className="p-4 md:p-6 pb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
//                   <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
//                 </div>
//                 <span className="font-bold text-gray-800 text-sm md:text-base">Ask Sam</span>
//               </div>
//             </div>
            
//             <div className="px-4 md:px-6 pb-4 md:pb-6">
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center animate-pulse">
//                   <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
//                 </div>
//                 <span className="font-semibold text-gray-700 text-sm md:text-base animate-pulse">Worked for 30 Sec</span>
//               </div>
              
//               <div className="space-y-3 md:space-y-4 ml-3 md:ml-4 border-l-2 border-gray-200 pl-4 md:pl-6 relative">
//                 {workflowSteps.map((step, index) => (
//                   <div key={index} className="flex items-center space-x-3 relative transition-all duration-700">
//                     <div className={`absolute -left-6 md:-left-8 w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center transition-all duration-700 ${
//                       index < workflowStep 
//                         ? 'bg-gradient-to-r from-green-400 to-green-600 transform scale-125 shadow-lg animate-pulse' 
//                         : 'bg-gray-300'
//                     }`}
//                     style={{
//                       boxShadow: index < workflowStep ? '0 0 15px rgba(34, 197, 94, 0.6)' : 'none'
//                     }}>
//                       {index < workflowStep && (
//                         <Check className="w-2 h-2 md:w-3 md:h-3 text-white animate-bounce" strokeWidth={3} />
//                       )}
//                     </div>
//                     <span className={`text-xs md:text-sm font-medium transition-all duration-700 ${
//                       index < workflowStep ? 'text-green-600 font-bold transform scale-105' : 'text-gray-500'
//                     }`}>
//                       {step}
//                     </span>
//                     {index < workflowStep && (
//                       <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-pulse opacity-60"></div>
//                     )}
//                   </div>
//                 ))}
//               </div>
              
//               <div className="text-xs text-gray-400 mt-4 md:mt-6 animate-pulse">12:30pm</div>
              
//               <div className="flex space-x-3 mt-4 md:mt-6">
//                 <button 
//                   className={`text-white px-4 md:px-6 py-2 rounded-lg font-medium flex-1 text-sm md:text-base transition-all duration-500 transform ${
//                     isApproveAnimating 
//                       ? 'bg-gradient-to-r from-green-400 to-green-600 scale-105 shadow-2xl animate-pulse' 
//                       : 'bg-blue-500 hover:bg-blue-600'
//                   }`}
//                   onClick={handleApprove}
//                   style={{
//                     boxShadow: isApproveAnimating ? '0 0 25px rgba(34, 197, 94, 0.8)' : 'none'
//                   }}
//                 >
//                   {isApproveAnimating ? (
//                     <div className="flex items-center justify-center space-x-2">
//                       <Check className="w-4 h-4 animate-bounce" />
//                       <span>Approved!</span>
//                     </div>
//                   ) : (
//                     'Approve'
//                   )}
//                 </button>
//                 <button className="bg-gray-200 text-gray-700 px-4 md:px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium flex-1 text-sm md:text-base">
//                   Cancel
//                 </button>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-100 p-4 md:p-6">
//               <div className="flex items-center space-x-2">
//                 <input 
//                   type="text" 
//                   placeholder="Ask me to do anything ..." 
//                   className="flex-1 bg-gray-100 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 />
//                 <button 
//                   className="text-purple-500 hover:text-purple-700 transition-colors"
//                   onClick={handleStartWorkflow}
//                 >
//                   <Send className="w-4 h-4 md:w-5 md:h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Modified Design Label */}
//         <div className="flex justify-center mb-6 md:mb-8">
//           <div className="bg-gray-100 rounded-full px-4 md:px-6 py-2 shadow-lg border border-purple-200">
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
//               <span className="text-gray-700 font-medium text-sm md:text-base">Modified Design</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Album Cover */}
//         <div className="flex justify-center">
//                  <img 
//   src="src/assets/Downimage.svg" 
//   alt="Album Cover" 
//   className="w-full max-w-[300px] h-auto mx-auto mb-4 object-cover rounded-md shadow"
// />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AskSamInterface;













// const AskSamInterface = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
//       <img    
//         src="src/assets/All_Combined.jpg"    
//         alt="Album Cover"    
//         className="w-full h-auto object-cover" 
//       />
//     </div>
//   );
// };

// export default AskSamInterface;






// const AskSamInterface = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
//       <img    
//         src="src/assets/All_Combined.jpg"    
//         alt="Album Cover"    
//         className="w-4/5 max-w-4xl h-auto object-cover" 
//       />
//     </div>
//   );
// };

// export default AskSamInterface;









// const AskSamInterface = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
//       <img    
//         src="src/assets/All_Combined.jpg"    
//         alt="Album Cover"    
//         className="w-11/12 max-w-6xl h-auto object-cover" 
//       />
//     </div>
//   );
// };

// export default AskSamInterface;









// const AskSamInterface = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
//       <img    
//         src="src/assets/All_Combined.jpg"    
//         alt="Album Cover"    
//         className="w-11/12 max-w-6xl h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-3xl" 
//       />
//     </div>
//   );
// };

// export default AskSamInterface;









const AskSamInterface = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
      <img    
        src="src/assets/All_Combined.jpg"    
        alt="Album Cover"    
        className="w-11/12 max-w-6xl h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-3xl" 
      />
    </div>
  );
};

export default AskSamInterface;