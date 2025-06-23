import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'MERN Stack Developer',
    'Frontend Specialist',
    'Backend Developer',
    'Full Stack Engineer',
    'React.js Developer'
  ];

  // Rotate through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Bharathi_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            {/* Greeting */}
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="heading-primary mb-4">
              <span className="block text-gray-900">{personalInfo.name}</span>
              <span className="gradient-text block mt-2">
                {roles[currentRole]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-large mb-8 max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio.short}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/projects"
                className="btn-primary group"
              >
                View My Work
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button
                onClick={downloadResume}
                className="btn-secondary group"
              >
                <FaDownload className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {personalInfo.socialLinks.slice(0, 3).map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  className="social-icon bg-white shadow-lg hover:shadow-xl"
                  aria-label={social.name}
                >
                  {social.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
                  {social.icon === 'FaGithub' && <FaGithub />}
                  {social.icon === 'FaEnvelope' && <FaEnvelope />}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-primary-600 to-purple-600 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-4">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">💻</span>
              </div>
              
              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">🚀</span>
              </div>
              
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-xl">⭐</span>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-100 to-purple-100 rounded-full transform scale-110 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;