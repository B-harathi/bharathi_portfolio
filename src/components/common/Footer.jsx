import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' }
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'API Integration',
    'Web Applications',
    'React.js Development'
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                BG
              </div>
              <div>
                <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.bio.short}
            </p>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  className="social-icon bg-gray-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-500"
                  aria-label={social.name}
                >
                  {social.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
                  {social.icon === 'FaGithub' && <FaGithub />}
                  {social.icon === 'FaEnvelope' && <FaEnvelope />}
                  {social.icon === 'FaPhone' && <FaPhone />}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 block py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={personalInfo.resume}
                  download
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 block py-1"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 py-1">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 w-4 h-4" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 w-4 h-4" />
                <a
                  href={`tel:+91${personalInfo.phone}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-primary-400 w-4 h-4 mt-1">📍</div>
                <span className="text-gray-300 text-sm">
                  {personalInfo.location}
                </span>
              </div>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 btn-secondary text-sm py-2 px-4 border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-400"
            >
              <FaArrowUp className="w-3 h-3 mr-2" />
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 w-4 h-4" />
              <span>using React.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;