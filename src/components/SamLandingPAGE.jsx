








// import React from 'react';

// const SamLandingPage = () => {
//   return (
//     <div 
//       className="min-h-screen w-full flex flex-col items-center justify-center"
//       style={{
//         background: 'linear-gradient(to right, rgb(230,232,255), rgb(251,219,226))',
//         minHeight: '100vh'
//       }}
//     >
//       {/* Main Content Container */}
//       <div className="text-center max-w-4xl mx-auto w-full px-4 sm:px-8">
        
//         {/* Header Section */}
//         <div className="mb-12">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
//             <span>Introducing</span>
//             <img src="src/assets/Sam.svg" alt="Sam" className="w-30 h-20 sm:w-30 sm:h-20" />
//           </h1>
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Your AI-Powered Social Presence Agent
//           </h2>
          
//           <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
//             From layout tweaks to content suggestions, Sam makes your SocialAddress smarter, faster, and more effective.
//           </p>
          
//           {/* CTA Button */}
//           <button 
//             className="px-6 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
//             style={{ 
//               background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153))'
//             }}
//           >
//             Learn more
//             <svg 
//               className="w-5 h-5" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M17 8l4 4m0 0l-4 4m4-4H3" 
//               />
//             </svg>
//           </button>
//         </div>
        
//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 px-4">
//           {/* Context Awareness Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(165, 243, 252)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-cyan-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               Context Awareness
//             </h3>
//           </div>
          
//           {/* AI Powered Suggestions Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(196, 181, 253)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-purple-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M13 10V3L4 14h7v7l9-11h-7z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               AI Powered Suggestions
//             </h3>
//           </div>
          
//           {/* Data Driven Optimization Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0 sm:col-span-2 md:col-span-1">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(252, 165, 165)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-red-500" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               Data Driven Optimization
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SamLandingPage;






// import React from 'react';

// const SamLandingPage = () => {
//   return (
//     <div 
//       className="min-h-screen w-full flex flex-col items-center justify-start pt-40"
//       style={{
//         background: 'linear-gradient(to right, rgb(230,232,255), rgb(251,219,226))',
//         minHeight: '100vh'
//       }}
//     >
//       {/* Main Content Container */}
//       <div className="text-center max-w-4xl mx-auto w-full px-4 sm:px-8">
        
//         {/* Header Section */}
//         <div className="mb-12">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
//             <span>Introducing</span>
//             <img src="src/assets/Sam.svg" alt="Sam" className="w-30 h-20 sm:w-30 sm:h-20" />
//           </h1>
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Your AI-Powered Social Presence Agent
//           </h2>
          
//           <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
//             From layout tweaks to content suggestions, Sam makes your SocialAddress smarter, faster, and more effective.
//           </p>
          
//           {/* CTA Button */}
//           <button 
//             className="px-6 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
//             style={{ 
//               background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153))'
//             }}
//           >
//             Learn more
//             <svg 
//               className="w-5 h-5" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M17 8l4 4m0 0l-4 4m4-4H3" 
//               />
//             </svg>
//           </button>
//         </div>
        
//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 px-4">
//           {/* Context Awareness Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(165, 243, 252)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-cyan-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               Context Awareness
//             </h3>
//           </div>
          
//           {/* AI Powered Suggestions Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(196, 181, 253)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-purple-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M13 10V3L4 14h7v7l9-11h-7z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               AI Powered Suggestions
//             </h3>
//           </div>
          
//           {/* Data Driven Optimization Card */}
//           <div className="flex flex-row sm:flex-col items-center sm:text-center text-left p-4 sm:p-6 gap-4 sm:gap-0 sm:col-span-2 md:col-span-1">
//             <div 
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0"
//               style={{ backgroundColor: 'rgb(252, 165, 165)' }}
//             >
//               <svg 
//                 className="w-8 h-8 text-red-500" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
//               Data Driven Optimization
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SamLandingPage;



import React from 'react';

const SamLandingPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-start pt-48"
      style={{
        background: 'linear-gradient(to bottom, rgb(230,232,255) 0%, rgb(251,219,226) 70%, rgb(255,255,255) 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Main Content Container */}
      <div className="text-center max-w-4xl mx-auto w-full px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>Introducing</span>
            <img src="src/assets/Sam.svg" alt="Sam" className="w-40 h-20 sm:w-30 sm:h-20" />
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Your AI-Powered Social Presence Agent
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            From layout tweaks to content suggestions, Sam makes your SocialAddress smarter, faster, and more effective.
          </p>
          
          {/* CTA Button */}
          <button 
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3"
            style={{ 
              background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153))'
            }}
          >
            Learn more
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-4">
          {/* Context Awareness Card */}
          <div className="flex flex-row items-center text-left p-6 gap-4 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 transition-all duration-300">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgb(165, 243, 252)' }}
            >
              <svg 
                className="w-8 h-8 text-cyan-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Context Awareness
              </h3>
              <p className="text-gray-600 text-sm">
                Smart understanding of your content and audience
              </p>
            </div>
          </div>
          
          {/* AI Powered Suggestions Card */}
          <div className="flex flex-row items-center text-left p-6 gap-4 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 transition-all duration-300">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgb(196, 181, 253)' }}
            >
              <svg 
                className="w-8 h-8 text-purple-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Powered Suggestions
              </h3>
              <p className="text-gray-600 text-sm">
                Intelligent recommendations for better engagement
              </p>
            </div>
          </div>
          
          {/* Data Driven Optimization Card */}
          <div className="flex flex-row items-center text-left p-6 gap-4 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 transition-all duration-300">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgb(252, 165, 165)' }}
            >
              <svg 
                className="w-8 h-8 text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Data Driven Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                Analytics-based improvements for maximum impact
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default SamLandingPage;





// import React from 'react';

// const SamLandingPage = () => {
//   return (
//     <div 
//       className="min-h-screen w-full flex flex-col items-center justify-start pt-48"
//       style={{
//         background: 'linear-gradient(to bottom, rgb(230,232,255) 0%, rgb(251,219,226) 70%, rgba(255,255,255,0.9) 100%)',
//         minHeight: '100vh'
//       }}
//     >
//       {/* Main Content Container */}
//       <div className="text-center max-w-4xl mx-auto w-full px-4 sm:px-8 pb-16">
        
//         {/* Header Section */}
//         <div className="mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 flex flex-col items-center justify-center gap-3">
//             <span>Introducing</span>
//             <img src="src/assets/Sam.svg" alt="Sam" className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24" />
//           </h1>
          
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
//             Your AI-Powered Social Presence Agent
//           </h2>
          
//           <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed px-2">
//             From layout tweaks to content suggestions, Sam makes your SocialAddress smarter, faster, and more effective.
//           </p>
          
//           {/* CTA Button */}
//           <button 
//             className="px-6 py-3 rounded-lg text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
//             style={{ 
//               background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153))'
//             }}
//           >
//             Learn more
//             <svg 
//               className="w-5 h-5" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M17 8l4 4m0 0l-4 4m4-4H3" 
//               />
//             </svg>
//           </button>
//         </div>
        
//         {/* Feature Cards */}
//         <div className="space-y-6 sm:space-y-8 mt-20">
//           {/* Context Awareness Card */}
//           <div className="flex flex-row items-center text-left p-4 sm:p-6 gap-4 max-w-2xl mx-auto">
//             <div 
//               className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
//               style={{ backgroundColor: 'rgb(165, 243, 252)' }}
//             >
//               <svg 
//                 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                 Context Awareness
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600">
//                 Understands your content and audience
//               </p>
//             </div>
//           </div>
          
//           {/* AI Powered Suggestions Card */}
//           <div className="flex flex-row items-center text-left p-4 sm:p-6 gap-4 max-w-2xl mx-auto">
//             <div 
//               className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
//               style={{ backgroundColor: 'rgb(196, 181, 253)' }}
//             >
//               <svg 
//                 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M13 10V3L4 14h7v7l9-11h-7z" 
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                 AI Powered Suggestions
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600">
//                 Smart recommendations for better engagement
//               </p>
//             </div>
//           </div>
          
//           {/* Data Driven Optimization Card */}
//           <div className="flex flex-row items-center text-left p-4 sm:p-6 gap-4 max-w-2xl mx-auto">
//             <div 
//               className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
//               style={{ backgroundColor: 'rgb(252, 165, 165)' }}
//             >
//               <svg 
//                 className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                 Data Driven Optimization
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600">
//                 Analytics-based performance improvements
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SamLandingPage;