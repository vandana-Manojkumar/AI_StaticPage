import React from 'react';

export default function SocialAddressHeader() {
  return (
    <div className="w-full bg-black text-white">
      {/* Header Section */}
      <header className="w-full py-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="src/assets/Companylogo.jpg" 
              alt="socialaddress" 
              className="h-12 md:h-16 object-contain"
            />
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex items-center justify-center">
            <div className="flex space-x-8 md:space-x-12">
              <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-normal">
                Video
              </button>
              <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-normal">
                Waitlist
              </button>
              <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base font-normal">
                Blogs
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Footer Section - Black background continues */}
      <div className="w-full h-32 bg-black"></div>
    </div>
  );
}