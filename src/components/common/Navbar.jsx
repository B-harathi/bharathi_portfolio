import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Bharathi_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              BG
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">
                Bharathi G
              </h1>
              <p className="text-sm text-gray-600">
                MERN Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Resume Download Button */}
            <button
              onClick={downloadResume}
              className="btn-primary text-sm py-2 px-4 hidden sm:inline-flex"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-primary-600 bg-primary-50' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Resume Button */}
            <button
              onClick={downloadResume}
              className="w-full mt-4 btn-primary text-sm py-3"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;