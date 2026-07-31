import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa';
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
    <footer style={{ backgroundColor: 'var(--bg-void)', borderTop: '1px solid var(--wire)' }} data-aos="fade-up">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}
              >
                BG
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--signal-white)' }}>{personalInfo.name}</h3>
                <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>{personalInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--wire-grey)' }}>
              {personalInfo.bio.short}
            </p>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  className="social-icon"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--grant-amber)', fontFamily: 'var(--font-mono)' }}>Quick Links</h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--grant-amber)', fontFamily: 'var(--font-mono)' }}>Services</h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--grant-amber)', fontFamily: 'var(--font-mono)' }}>Get In Touch</h4>
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
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-400 w-4 h-4" />
                <span className="text-gray-300 text-sm">
                  {personalInfo.location}
                </span>
              </div>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 btn-secondary text-sm py-2 px-4"
            >
              <FaArrowUp className="w-3 h-3 mr-2" />
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: '1px solid var(--wire)' }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0" style={{ fontFamily: 'var(--font-mono)' }}>
            <div className="text-sm text-center md:text-left" style={{ color: 'var(--wire-grey)' }}>
              © {currentYear} {personalInfo.name}. all rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm" style={{ color: 'var(--wire-grey)' }}>
              <span>{'// styled as an access log'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;