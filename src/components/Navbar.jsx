import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onBlogClick, onHomeClick, currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBlogClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onBlogClick) {
      onBlogClick();
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const isOnBlogPage = currentPage === 'blog';

  return (
    <nav className="fixed top-6 left-4 right-4 z-50 bg-white shadow-lg rounded-3xl border border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="src/assets/Company_Tm.svg"
              alt="socialaddress"
              className="h-8 md:h-10 object-contain"
            />
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleHomeClick}
              className={`font-medium transition-colors duration-200 cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            
            {!isOnBlogPage && (
              <a
                href="#video"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Video
              </a>
            )}
            
            <button
              onClick={handleBlogClick}
              className={`font-medium transition-colors duration-200 cursor-pointer ${
                currentPage === 'blog' 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Blog
            </button>
          </div>
          
          {/* Early Access Button - Right */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Early access
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100 bg-white rounded-b-3xl">
              <button
                onClick={handleHomeClick}
                className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-200 ${
                  currentPage === 'home' 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              
              {!isOnBlogPage && (
                <a
                  href="#video"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Video
                </a>
              )}
              
              <button
                onClick={handleBlogClick}
                className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-200 ${
                  currentPage === 'blog' 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Blog
              </button>
              
              <div className="px-3 py-2">
                <button 
  className="w-full text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md"
  style={{
    background: 'linear-gradient(to right, rgb(114, 128, 255), rgb(195, 129, 242), rgb(249, 91, 95))',
    backgroundImage: 'linear-gradient(to right, rgb(114, 128, 255), rgb(195, 129, 242), rgb(249, 91, 95))'
  }}
>
  Early access
</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;