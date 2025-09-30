import React, { useState } from 'react';
import { Search, User, Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              VividSeats
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
              Concerts
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
              Sports
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
              Theater
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
              Comedy
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
              More
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden sm:flex items-center text-gray-600 hover:text-blue-700 cursor-pointer transition-colors">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">New York, NY</span>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Account</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign In
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Create Account
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Orders
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium transition-colors">
                Concerts
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium transition-colors">
                Sports
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium transition-colors">
                Theater
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium transition-colors">
                Comedy
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium transition-colors">
                More
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;