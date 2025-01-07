//Will contain my name and Navigation component//
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Navigation from '../Navigation/Navbar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', text: 'About Me' },
        { path: '/portfolio', text: 'Portfolio' },
        { path: '/contact', text: 'Contact' },
        { path: '/resume', text: 'Resume' }
    ];

const isActive = (path) => location.pathname === path;

return (
    <header className="bg-neutral-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-800">
              Nancy J Watreas
            </Link>
            <Navigation /> 
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive(item.path)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
              >
                {item.text}
              </Link>
            ))}
          </nav> */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;