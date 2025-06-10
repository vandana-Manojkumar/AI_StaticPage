// import React from 'react';

// const SamAIHeroSection = () => {
//   return (
//     <div className="w-full min-h-screen bg-gray-50 flex flex-col">
//       {/* Header Section */}
//       <div className="text-center pt-12 pb-8 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Learn About Sam AI
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Discover how Sam AI revolutionizes social address editing with intelligent suggestions and automated optimization.
//         </p>
//       </div>

//       {/* Main Image Section with Floating Text */}
//       <div className="flex-1 px-4 pb-8">
//         <div className="relative w-full max-w-4xl mx-auto">
//           {/* Image Container */}
//           <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//             {/* Replace this with your image */}
//             <img 
//               src="src/assets/success.png" 
//               alt="Sam AI Interface"
//               className="w-full h-full object-cover"
//             />
            
//             {/* Gradient Overlay for better text readability */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
//             {/* Floating Text Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//               <div className="text-white">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-3">
//                   Personalize your social address to reflect your true identity!
//                 </h2>
//                 <p className="text-gray-200 text-base md:text-lg mb-6">
//                   Showcase all your important links.
//                 </p>
                
//                 {/* CTA Button */}
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Responsive Adjustments */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .container {
//             padding: 0 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SamAIHeroSection;








import React from 'react';

const SamAIHeroSection = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="text-center pt-6 md:pt-12 pb-4 md:pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Learn About Sam AI
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover how Sam AI revolutionizes social address editing with intelligent suggestions and automated optimization.
        </p>
      </div>

      {/* Main Image Section with Floating Text */}
      <div className="flex-1 px-4 pb-4 md:pb-8">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Image Container */}
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Replace this with your image */}
            <img
              src="src/assets/success.png"
              alt="Sam AI Interface"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Personalize your social address to reflect your true identity!
                </h2>
                <p className="text-gray-200 text-base md:text-lg mb-6">
                  Showcase all your important links.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SamAIHeroSection;