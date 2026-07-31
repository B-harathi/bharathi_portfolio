import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => { setIsOpen(false); }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('nav')) setIsOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const downloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Bharathi_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl shadow-lg dark:shadow-dark-900/50 border-b border-gray-100/50 dark:border-dark-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}
            >
              B
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold" style={{ color: 'var(--signal-white)' }}>{personalInfo.name}</h1>
              <p className="text-xs" style={{ color: 'var(--wire-grey)' }}>{personalInfo.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link px-3 py-2 ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            {/* Resume Download Button */}
            <button
              onClick={downloadResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}
            >
              <FaDownload className="w-3.5 h-3.5" />
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-200"
              style={{ color: 'var(--wire-grey)', border: '1px solid var(--wire)' }}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide from right */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link block px-3 py-3 ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={downloadResume}
              className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-3 text-sm font-semibold rounded-md transition-all duration-200"
              style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;